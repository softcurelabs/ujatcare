<?php

namespace App\Http\Controllers;

use App\Constants\Role;
use App\Models\FlatOwner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Repositories\UserRepository;
use Validator;

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

        $user->assignRole(Role::Renter);

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
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Username or password Incorrect'
            ], 401);
        }

        $user = $request->user();
        if (!$user->hasRole(Role::Admin)) {
            return response()->json([
                'message' => 'User is not authorized'
            ], 401);
        }
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;

        return response()->json([
            'user_id' => $user->id,
            'user_role' => $user->getRoleNames(),
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
            'flat_id' => 'required|int',
            'apartment_id' => 'required|int',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Username or password Incorrect'
            ], 401);
        }

        $user = $request->user();

        if (!$user->hasRole(Role::Staff) && null === $this->userRepository->isValid($user->id, $request->get('flat_id'), $request->get('apartment_id'))) {
            return response()->json([
                'message' => 'User is not authorized'
            ], 401);
        }
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;

        return response()->json([
            'user_id' => $user->id,
            'user_role' => $user->getRoleNames(),
            'username' => $user->name,
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
        return [
            'email' => $user->email,
            'role' => $user->roles->pluck('id')
        ];
    }
}
