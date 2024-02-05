<?php

use App\Constants\Role;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FlatController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\VerifyEmailController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'auth'], function () {
  Route::post('login', [AuthController::class, 'login']);
  Route::post('rent-login', [AuthController::class, 'loginRenter']);
  Route::post('register', [AuthController::class, 'register']);
  Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
  Route::post('reset-password', [AuthController::class, 'resetPassword'])->name('password.reset');

  Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('profile', [AuthController::class, 'user']);
  });
});

Route::get('flats', [FlatController::class, 'index']);
Route::group(['middleware' => ['auth:sanctum', 'role:admin']], function () {
  Route::get('notice/{id}', [NoticeController::class, 'show']);
  Route::post('notice', [NoticeController::class, 'store']);
  Route::delete('notice/{id}', [NoticeController::class, 'delete']);
  Route::put('notice/{id}', [NoticeController::class, 'update']);
  Route::get('notice', [NoticeController::class, 'index']);


  Route::post('user', [UserProfileController::class, 'store']);
  Route::delete('user/{id}', [UserProfileController::class, 'delete']);

  Route::get('user', [UserProfileController::class, 'index']);

  Route::post('user/import', [UserProfileController::class, 'import']);

  Route::put('permission/{user_id}', [UserProfileController::class, 'permission']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|renter']], function () {
  Route::get('notice-highlight', [NoticeController::class, 'highlight']);
  Route::get('user/{id}', [UserProfileController::class, 'show']);
  Route::post('upload/{user_id}', [UserProfileController::class, 'upload']);
  Route::put('set-password/{user_id}', [UserProfileController::class, 'setPassword']);
  Route::put('user/{user_id}', [UserProfileController::class, 'update']);
});


Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
  ->middleware(['signed', 'throttle:6,1'])
  ->name('verification.verify');
