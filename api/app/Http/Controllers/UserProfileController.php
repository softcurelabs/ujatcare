<?php

namespace App\Http\Controllers;

use App\Constants\Role;
use App\Imports\UsersImport;
use App\Models\FlatOwner;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
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
        return UserProfile::with('user')->whereHas('user.roles', static function ($query) {
            return $query->whereIn('name', ['admin', 'staff']);
        })->orderBy('id')->paginate($request->get('limit', 10));
    }

    public function recidents(Request $request)
    {
        return UserProfile::with('user')->whereHas('user.roles', static function ($query) {
            return $query->whereIn('name', ['recident']);
        })->orderBy('id')->paginate($request->get('limit', 10));
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $userProfile = UserProfile::with('user')->where('user_id', $id)->first();

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
            'unit' => 'required|integer|min:1|max:1000',
            'phone_number' => 'required|max:10|min:10',
            'parking_space' => 'required|integer|min:1|max:10000',
            'emergency_contact_number'  => 'required|max:10|min:10',
            'emergency_contact_name' => 'required|min:3',
            'income_verification' => 'required|integer|min:1|max:1000000',
            'rent_calculation'  => 'required|integer|min:1|max:1000000',
            'language' => 'required',
            'name' => 'required|min:3',
            'special_instruction' => 'min:3',
            'flat_id' => "required|integer",
            'movein_date' => 'date'
        ];

        if ($user->id === $user_id) {
            $validations['flat_id'] = 'exclude';
            $validations['movein_date'] = 'exclude';
        }

        $validated = $request->validate($validations);


        if (null === $userProfile) {
            $userProfile = new UserProfile();
            $userProfile->create($validated);

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
        if ($request->get('role_id') == Role::Renter->value) {
            $validations['flat_id'] = 'required|unique:flat_owner,flat_id';
        }
        $user = Auth::user();
        if ($user->id == $user_id) {
            throw ValidationException::withMessages(['role_id' => "You can't change your own role"]);
        }


        $request->validate($validations);

        $user = User::find($user_id);

        $user->syncRoles($request->get('role_id'));
        if ($user->save()) {
            if ($request->get('role_id') === Role::Renter->value) {
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
}
