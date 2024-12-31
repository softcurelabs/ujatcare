<?php

namespace App\Http\Controllers;

use App\Constants\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|string',
            'c_password' => 'required|same:password'
        ]);

        $user = new User([
            'name'  => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $user->sendWelcomeEmail();
        event(new Registered($user));
        if ($user->save()) {
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;

            return response()->json([
                'message' => 'Successfully created user!',
                'accessToken' => $token,
            ], 201);
        } else {
            return response()->json(['error' => 'Provide proper details']);
        }
    }

    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     */

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if (filter_var($request->get('email'), FILTER_VALIDATE_EMAIL)) {
            $credentials = request(['email', 'password']);
        } else {
            $credentials = ['phone_number' => $request->get('email'), 'password' => $request->password];
        }
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Username or password Incorrect'
            ], 401);
        }

        $user = $request->user();
        if (!($user->hasRole(Role::Admin) || $user->hasRole(Role::Staff) || $user->hasRole(Role::MaintenanceStaff))) {
            return response()->json([
                'message' => 'User is Tanent and you have used staff login go to tanent login'
            ], 401);
        }
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;

        return response()->json([
            'user_id' => $user->id,
            'user_role' => $user->getRoleNames(),
            'profile_pic' => $user->profile->image_path ? asset($user->profile->image_path) : '#',
            'username' => $user->name,
            'accessToken' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function loginRenter(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if (filter_var($request->get('email'), FILTER_VALIDATE_EMAIL)) {
            $credentials = request(['email', 'password']);
        } else {
            $credentials = ['phone_number' => $request->get('email'), 'password' => $request->password];
        }

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Username or password Incorrect'
            ], 401);
        }

        $user = $request->user();

        if (!$user->hasRole(Role::Recident)) {
            return response()->json([
                'message' => 'User is Staff and you have used tanent login go to staff login'
            ], 401);
        }
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;


        return response()->json([
            'user_id' => $user->id,
            'user_role' => $user->getRoleNames(),
            'profile_pic' => $user->profile->image_path ? asset($user->profile->image_path) : '#',
            'username' => $user->name,
            'flat' => $user->flat->flat->name,
            'accessToken' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function user()
    {
        $user = Auth::user();
        return response()->json([
            'user_id' => $user->id,
            'user_role' => $user->getRoleNames(),
            'profile_pic' => $user->profile->image_path ? asset($user->profile->image_path) : '#',
            'username' => $user->name
        ]);
    }

    public function forgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json([
                'status' => true,
                'message' => __($status),
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => __($status),
            'errors' => ['email' => __($status)],
        ], 422);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'email',
            'password' => 'required|min:8|confirmed',
        ]);
        $redirect = 'admin';
        $data = [];
        if ($request->phone_number != "") {
            $data = $request->only('phone_number', 'password', 'password_confirmation', 'token');
        } else {
            $data = $request->only('email', 'password', 'token');
        }
        
        $status = Password::reset(
            $data,
            function (User $user, string $password) use (&$redirect) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                if ($user->hasRole(Role::Recident)) {
                    $redirect = 'recident';
                }
        

                event(new PasswordReset($user));
            }
        );

        if ($status === Password::PASSWORD_RESET) {
            return response()->json([
                'status' => true,
                'message' => __($status),
                'redirect' => $redirect
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => __($status),
            'errors' => ['email' => __($status)],
        ], 422);
    }
}
