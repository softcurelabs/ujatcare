<?php

namespace App\Http\Controllers;

use App\Constants\Role;
use App\Events\UserUpdated;
use App\Imports\UsersImport;
use App\Models\FlatOwner;
use App\Models\User;
use App\Models\UserDocuments;
use App\Models\UserProfile;
use Exception;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;
use Nette\Utils\Random;
use PhpParser\Node\Stmt\Foreach_;
use Symfony\Component\HttpFoundation\JsonResponse;
use Throwable;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $roles = [Role::Staff->value, Role::MaintenanceStaff->value];
        if (Auth::user()->hasRole([Role::Admin->value])) {
            $roles[] = Role::Admin->value;
        }
        return UserProfile::with('user')->whereHas('user.roles', static function ($query) use ($roles) {
            return $query->whereIn('name', $roles);
        })->orderBy('id')->paginate($request->get('limit', 10));
    }

    public function recidents(Request $request)
    {
        $queryBuilder = UserProfile::with('user')->whereHas('user.roles', static function ($query) {
            return $query->whereIn('name', [Role::Recident->value]);
        })->orderBy('id');
        if (!empty($request->get('filter'))) {
            $queryBuilder->whereHas('user.flat.flat.apartment', static function ($query) use ($request) {
                return $query->whereIn('id', [$request->get('filter')]);
            });
        }
        if ('undefined' != $request->get('findFlat') && !empty($request->get('findFlat'))) {
            $queryBuilder->whereHas('user.flat.flat', static function ($query) use ($request) {
                return $query->where('name',  'like', '%' . $request->get('findFlat') . '%');
            });
        }

        if ('undefined' != $request->get('name') && !empty($request->get('name'))) {
            $queryBuilder->whereHas('user', static function ($query) use ($request) {
                return $query->where('first_name',  'like', '%' . $request->get('name') . '%');
            });
        }

        // findFlat, name

        return $queryBuilder->paginate($request->get('limit', 10));
    }


    public function allOccupants()
    {
                $queryBuilder = UserProfile::with(['user' => function($query) {
            return $query->without(['flat', 'getFlatAttributes'])->select('id', 'first_name');
        }])->select('user_id' )->has('user.flat');


        return $queryBuilder->get();
    }
    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $userProfile = UserProfile::with('user', 'user.documents')->where('user_id', $id)->first();

        return response()->json($userProfile);
    }

    public function store(Request $request)
    {
        $validations = [
            'phone_number' =>  ['required', Rule::unique('users', 'phone_number')
                ->whereNull('deleted_at'), 'max:10', 'min:10'],
            'first_name' => 'required|min:3',
            'last_name' => 'required',
            'email' => 'sometimes|nullable|email',
            'role_id' => 'required|string',
        ];
        if ($request->get('role_id') == Role::Recident->value) {
            $validations['flat_id'] = ['required', Rule::unique('flat_owner', 'flat_id')
                ->whereNull('deleted_at')];
        }

        $request->validate($validations);
        $data = [
            'first_name'  => $request->first_name,
            'last_name'   => $request->last_name,
            'phone_number' => $request->phone_number,
            'password' => bcrypt(Random::generate(10)),
        ];

        if (!empty($request->email)) {
            $data['email'] = $request->email;
        }

        $user = new User($data);

        $user->assignRole($request->get('role_id'));
        if ($user->save()) {
            if ($request->get('role_id') === Role::Recident->value) {
                FlatOwner::create(['user_id' => $user->getKey(), 'flat_id' => $request->get('flat_id')]);
            }
            $userProfile = UserProfile::create(['user_id' => $user->getKey(), 'phone_number' => $request->phone_number]);
            try {
                UserUpdated::dispatch($userProfile);
                $user->sendWelcomeEmail();
            } catch (Exception $e) {
            }

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'error occured',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $user_id)
    {
        $userProfile = UserProfile::with('user')->where('user_id', $user_id)->first();
        $user = Auth::user();

        $validations = [
            'phone_number' => 'required|max:10|min:10|unique:users,phone_number,' . $user_id,
            'relationship' => 'required',
            'emergency_contact_number'  => 'required|max:10|min:10',
            'emergency_contact_name' => 'required|min:3',
            'first_name' => 'required|min:3',
            'last_name' => 'required',
            'email' => 'sometimes|nullable|email',
        ];

        if ($user->hasRole([Role::Admin, Role::Staff, Role::MaintenanceStaff])) {
            if ($userProfile->user->hasRole([Role::Recident])) {
                $validations = [
                    'first_name' => 'required|min:3',
                    'last_name' => 'required',
                    'email' => 'sometimes|nullable|email',
                    'phone_number' => 'required|max:10|min:10|unique:users,phone_number,' . $user_id,
                    // 'unit' => 'required|integer|min:1|max:1000',
                    'parking_space' => 'nullable|sometimes|decimal:0,2',
                    'birth_date' => 'required|date|before:' . now()->subYears(18)->toDateString(),
                    // 'locker' => 'required',
                    // 'staff_notes' => 'required',
                    'flat_id' => "integer",
                    'movein_date' => 'nullable|sometimes|date',
                    'income_verification' => 'nullable|sometimes|decimal:2',
                    'total_rent'  => 'nullable|sometimes|decimal:2',
                    // 'language' => 'required',
                    // 'fob' => 'required',
                    // 'special_instruction' => '',
                    'emergency_contact_email' => 'nullable|sometimes|email',
                    'base_rent' => 'nullable|sometimes|decimal:2',
                    'utilities' => 'nullable|sometimes|decimal:2',
                    'maintenance_fees' => 'nullable|sometimes|decimal:2',
                    'property_taxes' => 'nullable|sometimes|decimal:2',
                    'rental_insurance' => 'nullable|sometimes|decimal:2',
                    'parking_fees' => 'nullable|sometimes|decimal:2',
                    'service_fees' => 'nullable|sometimes|decimal:2',
                    'administrative_fees' => 'nullable|sometimes|decimal:2',
                    'storage_fees' => 'nullable|sometimes|decimal:2',
                    'cable_fees' => 'nullable|sometimes|decimal:2',
                    'wifi' => 'nullable|sometimes|decimal:2',
                ];
            } else {
                $validations = [
                    'phone_number' => 'required|max:10|min:10|unique:users,phone_number,' . $user_id,
                    'first_name' => 'required|min:3',
                    'last_name' => 'required',
                ];
            }
        }

        if ($user->id === $user_id && ($userProfile->user->hasRole([Role::Recident]))) {
            $validations['flat_id'] = 'exclude';
            $validations['birth_date'] = 'exclude';
            $validations['first_name'] = 'exclude';
            $validations['last_name'] = 'exclude';
            $validations['floor_plan'] = 'exclude';
            $validations['email'] = 'exclude';
            $validations['movein_date'] = 'exclude';
            $validations['unit'] = 'exclude';
            $validations['parking_space'] = 'exclude';
            $validations['locker'] = 'exclude';
            $validations['staff_notes'] = 'exclude';
            $validations['income_verification'] = 'exclude';
            $validations['total_rent'] = 'exclude';
            $validations['language'] = 'exclude';
            $validations['fob'] = 'exclude';
            $validations['special_instruction'] = 'exclude';
            $validations['emergency_contact_email'] = 'exclude';
            $validations['base_rent'] = 'exclude';
            $validations['utilities'] = 'exclude';
            $validations['maintenance_fees'] = 'exclude';
            $validations['property_taxes'] = 'exclude';
            $validations['rental_insurance'] = 'exclude';
            $validations['parking_fees'] = 'exclude';
            $validations['service_fees'] = 'exclude';
            $validations['administrative_fees'] = 'exclude';
            $validations['storage_fees'] = 'exclude';
            $validations['cable_fees'] = 'exclude';
            $validations['wifi'] = 'exclude';
        }

        $validated = $request->validate($validations);


        if (null === $userProfile) {
            $userProfile = new UserProfile();
            $userProfile->create($request->all());
            UserUpdated::dispatch($userProfile);
            return response()->json([
                'status' => true,
                'message' => 'User Updated Successfully',
            ]);
        }

        if (isset($validated['flat_id'])) {
            $userProfile->user->flat->update($validated);
        }
        if (null != $request->get('first_name')) {
            $userProfile->user->update($validated);
        }

        $userProfile->update($request->all());
        try {
            UserUpdated::dispatch($userProfile);
        } catch (Throwable $e) {
        }
        return response()->json([
            'status' => true,
            'message' => 'User Updated Successfully',
        ]);
    }

    public function sync(int $id)
    {
        $userProfile = UserProfile::with('user')->where('user_id', $id)->first();
        UserUpdated::dispatch($userProfile);

        if (!empty($userProfile->quickbook_id)) {
            return response()->json([
                'status' => true,
                'message' => 'Tenant Sync Succesfully'
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Error occurred'
        ]);
    }

    public function upload(Request $request, int $user_id)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:1024',
        ]);
        $userProfile = UserProfile::with('user')->where('user_id', $user_id)->first();
        if (null === $userProfile) {
            $userProfile = new UserProfile();
            $userProfile->save();
        }

        $image_path = $request->file('image')->store('images');

        $userProfile->update([
            'image_path' => $image_path
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Image Uploaded Successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(int $id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json([
            'status' => true,
            'message' => 'User Deleted Successfully',
        ]);
    }

    public function setPassword(Request $request, int $user_id): JsonResponse
    {
        $request->validate([
            'password' => 'required|string|min:8',
        ]);

        $user = User::find($user_id);

        $user->update([
            'password' => bcrypt($request->get('password')),
        ]);


        return response()->json([
            'status' => true,
            'message' => 'Password updated Successfully',
            // 'redirect' => $redirect
        ]);
    }


    public function permission(Request $request, $user_id)
    {

        $validations = [
            'role_id' => 'required|string',
        ];
        if ($request->get('role_id') == Role::Recident->value) {
            $validations['flat_id'] = 'required|unique:flat_owner,flat_id';
        }
        $currentUser = Auth::user();
        if ($currentUser->id == $user_id) {
            throw ValidationException::withMessages(['role_id' => "You can't change your own role"]);
        }

        $user = User::find($user_id);

        if ($currentUser->hasRole([Role::Staff->value]) && $user->hasRole([Role::Staff->value, Role::Admin->value])) {
            throw ValidationException::withMessages(['role_id' => "Staff can't change other admin or staff"]);
        }

        $request->validate($validations);

        $user->syncRoles($request->get('role_id'));
        if ($user->save()) {
            if ($request->get('role_id') === Role::Recident->value) {
                $flatOwner = $user->flat;
                if (!$flatOwner) {
                    $flatOwner = new FlatOwner();
                }
                $flatOwner->user_id = $user_id;
                $flatOwner->flat_id = $request->get('flat_id');
                $flatOwner->save();
            }
            if ($request->get('role_id') === Role::Admin->value) {
                $flatOwner = $user->flat;
                if ($flatOwner) {
                    $flatOwner->delete();
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'User Updated Successfully',
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'error occured',
        ]);
    }

    public function import(Request $request): JsonResponse
    {
        $request->validate([
            'users' => 'required|max:1024|mimetypes:application/csv,application/excel,application/vnd.ms-excel, application/vnd.msexcel,text/csv, text/anytext, text/plain, text/x-c,text/comma-separated-values,inode/x-empty,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ]);
        set_time_limit(3000);

        $import = new UsersImport();
        $import->import(request()->file('users'));

        $message = '';

        foreach ($import->errors()->all() as $error) {
            $message .= $error->getMessage() . "<br/>";
        }

        return response()->json([
            'status' => true,
            'message' => "Users added Successfully",
            'errors' => $message
        ]);
    }

    public function uploadDocuments(Request $request)
    {
        $request->validate([
            'licence.*' => 'mimes:jpg,jpeg,pdf,png|max:20000|min:1',
            'passport.*' => 'mimes:jpg,jpeg,pdf,png|max:20000|min:1',
            'other_document.*' => 'mimes:jpg,jpeg,pdf,png|max:20000|min:1',
            'documents.*' => 'mimes:jpg,jpeg,pdf,png|max:20000|min:1',
            'user_id' => 'exists:users,id'
        ]);

        $allTypes = ['licence', 'passport', 'other_document', 'documents'];

        foreach ($allTypes as $type => $typeValue) {
            foreach ($request->file($typeValue, []) as $document) {
                //s$document_path = $document->store($typeValue);
                $licence = new UserDocuments();
                $document_path = $document->store('documents');
                $licence->fill(['document_name' => $document->getClientOriginalName(), 'document_path' => $document_path, 'user_id' => $request->get('user_id'), 'type' => $type]);
                $licence->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Document Uploaded Successfully',
        ]);
    }

    public function deleteDocuments(int $id)
    {
        try {
            $inspection = UserDocuments::findorFail($id);
            Storage::delete($inspection->document_path);
        } catch (Exception $e) {
            throw ValidationException::withMessages(['title' => 'Document doesn\'t exists']);
        }
        $inspection->delete();

        return response()->json([
            'status' => true,
            'message' => 'Document Deleted Successfully',
        ]);
    }

    public function archive(int $id, Request $request)
    {
        $user = User::find($id);
        $request->validate([
            'reason' => 'required'
        ]);

        $flatOwner = $user->flat;
        if ($flatOwner) {
            $flatOwner->delete();
        }
        $user->is_archive = 1;
        $user->reason = $request->input('reason');
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'User Archived Successfully',
        ]);
    }
}
