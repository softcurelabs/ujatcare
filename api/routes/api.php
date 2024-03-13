<?php

use App\Constants\Role;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FlatController;
use App\Http\Controllers\InspectionController;
use App\Http\Controllers\MaintanceController;
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
Route::post('application', [ApplicationController::class, 'index']);
Route::group(['middleware' => ['auth:sanctum', 'role:admin|staff']], function () {
    Route::get('notice/{id}', [NoticeController::class, 'show']);
    Route::post('notice', [NoticeController::class, 'store']);
    Route::delete('notice/{id}', [NoticeController::class, 'delete']);
    Route::put('notice/{id}', [NoticeController::class, 'update']);
    Route::get('notice', [NoticeController::class, 'index']);
    Route::get('application', [ApplicationController::class, 'list']);
    Route::post('application-to-user/{id}', [ApplicationController::class, 'convertToUser']);

    Route::post('user', [UserProfileController::class, 'store']);
    Route::delete('user/{id}', [UserProfileController::class, 'delete']);

    Route::get('user', [UserProfileController::class, 'index']);
    Route::get('recident', [UserProfileController::class, 'recidents']);

    Route::post('user/import', [UserProfileController::class, 'import']);

    Route::put('permission/{user_id}', [UserProfileController::class, 'permission']);

    Route::get('inspection', [InspectionController::class, 'list']);
    Route::post('inspection', [InspectionController::class, 'create']);
    Route::post('inspection/{id}', [InspectionController::class, 'update']);
    Route::get('inspection/{id}', [InspectionController::class, 'show']);
    Route::get('event-inspection', [InspectionController::class, 'events']);
    Route::delete('inspection/{id}', [InspectionController::class, 'delete']);
    Route::delete('inspection-document/{id}', [InspectionController::class, 'deleteDocument']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|staff|recident']], function () {
    Route::get('notice-highlight', [NoticeController::class, 'highlight']);
    Route::get('user/{id}', [UserProfileController::class, 'show']);
    Route::post('upload/{user_id}', [UserProfileController::class, 'upload']);
    Route::put('set-password/{user_id}', [UserProfileController::class, 'setPassword']);
    Route::put('user/{user_id}', [UserProfileController::class, 'update']);

    Route::get('maintanance/{id}', [MaintanceController::class, 'show']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:recident']], function () {
    Route::get('maintanance', [MaintanceController::class, 'list']);
    Route::post('maintanance', [MaintanceController::class, 'store']);
    Route::put('maintanance/{id}', [MaintanceController::class, 'update']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|staff']], function () {
    Route::get('maintanance-admin', [MaintanceController::class, 'listAll']);
    Route::put('maintanance-admin/{id}', [MaintanceController::class, 'updateAdmin']);
    Route::get('maintanance-dashboard', [MaintanceController::class, 'dashboard']);
});

Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');
