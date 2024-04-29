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
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;
use Nette\Utils\Random;
use PhpParser\Node\Stmt\Foreach_;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $roles = [Role::Staff->value];
        if (Auth::user()->hasRole([Role::Admin->value])) {
            $roles[] = Role::Admin->value;
        }
        return UserProfile::with('user')->whereHas('user.roles', static function ($query) use ($roles) {
            return $query->whereIn('name', $roles);
        })->orderBy('id')->paginate($request->get('limit', 10));
    }

    public function recidents(Request $request)
    {
        return UserProfile::with('user')->whereHas('user.roles', static function ($query) {
            return $query->whereIn('name', [Role::Recident->value]);
        })->orderBy('id')->paginate($request->get('limit', 10));
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
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'role_id' => 'required|string',
        ];
        if ($request->get('role_id') == Role::Recident->value) {
            $validations['flat_id'] = 'required|unique:flat_owner,flat_id';
        }

        $request->validate($validations);

        $user = new User([
            'name'  => $request->name,
            'email' => $request->email,
            'password' => bcrypt(Random::generate(10)),
        ]);

        $user->assignRole($request->get('role_id'));
        if ($user->save()) {
            if ($request->get('role_id') === Role::Recident->value) {
                FlatOwner::create(['user_id' => $user->getKey(), 'flat_id' => $request->get('flat_id')]);
            }
            UserProfile::create(['user_id' => $user->getKey()]);

            $status = Password::sendResetLink(
                $request->only('email')
            );

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
            'phone_number' => 'required|max:10|min:10',
            'relationship' => 'required',
            'birth_date' => 'required|date|before:' . now()->subYears(18)->toDateString(),
            'emergency_contact_number'  => 'required|max:10|min:10',
            'emergency_contact_name' => 'required|min:3',
            'name' => 'required|min:3',
        ];

        if ($user->hasRole([Role::Admin, Role::Staff])) {
            $validations = [
                'unit' => 'required|integer|min:1|max:1000',
                'parking_space' => 'required|integer|min:1|max:10000',
                'locker' => 'required|integer|min:1|max:10000',
                'staff_notes' => 'required',
                'flat_id' => "required|integer",
                'movein_date' => 'date',
                'income_verification' => 'required|integer|min:1|max:1000000',
                'rent_calculation'  => 'required|integer|min:1|max:1000000',
                'language' => 'required',
                'fob' => 'required',
                'special_instruction' => 'min:3',
            ];
        }

        if ($user->id === $user_id) {
            $validations['flat_id'] = 'exclude';
            $validations['movein_date'] = 'exclude';
            $validations['unit'] = 'exclude';
            $validations['parking_space'] = 'exclude';
            $validations['locker'] = 'exclude';
            $validations['staff_notes'] = 'exclude';
            $validations['income_verification'] = 'exclude';
            $validations['rent_calculation'] = 'exclude';
            $validations['language'] = 'exclude';
            $validations['fob'] = 'exclude';
            $validations['special_instruction'] = 'exclude';
        }

        $validated = $request->validate($validations);


        if (null === $userProfile) {
            $userProfile = new UserProfile();
            $userProfile->create($validated);
            UserUpdated::dispatch($userProfile);
            return response()->json([
                'status' => true,
                'message' => 'User Updated Successfully',
            ]);
        }

        if (isset($validated['flat_id'])) {
            $userProfile->user->flat->update($validated);
        }
        if (null != $request->get('name')) {
            $userProfile->user->update($validated);
        }

        $userProfile->update($validated);
        UserUpdated::dispatch($userProfile);
        return response()->json([
            'status' => true,
            'message' => 'User Updated Successfully',
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
}
