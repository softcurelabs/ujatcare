<?php

use App\Constants\Role;
use App\Http\Controllers\ApartmentController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BugController;
use App\Http\Controllers\FlatController;
use App\Http\Controllers\InspectionController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\MaintanceController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\QuickbookController;
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
    Route::post('flat', [FlatController::class, 'store']);
    Route::delete('flat/{id}', [FlatController::class, 'destroy']);
    Route::put('flat/{id}', [FlatController::class, 'update']);
    Route::get('flat/{id}', [FlatController::class, 'show']);

    Route::post('apartment', [ApartmentController::class, 'store']);
    Route::delete('apartment/{id}', [ApartmentController::class, 'destroy']);
    Route::put('apartment/{id}', [ApartmentController::class, 'update']);
});
Route::post('application', [ApplicationController::class, 'index']);
Route::group(['middleware' => ['auth:sanctum', 'role:admin|staff']], function () {
    Route::get('notice/{id}', [NoticeController::class, 'show']);
    Route::post('notice', [NoticeController::class, 'store']);
    Route::delete('notice/{id}', [NoticeController::class, 'delete']);
    Route::put('notice/{id}', [NoticeController::class, 'update']);
    Route::get('notice', [NoticeController::class, 'index']);
    Route::get('application', [ApplicationController::class, 'list']);
    Route::post('application-archive/{id}', [ApplicationController::class, 'archive']);
    Route::post('application-unarchive/{id}', [ApplicationController::class, 'unarchive']);
    Route::delete('application/{id}', [ApplicationController::class, 'remove']);
    Route::post('application-to-user/{id}', [ApplicationController::class, 'convertToUser']);

    Route::post('user', [UserProfileController::class, 'store']);
    Route::post('user/documents', [UserProfileController::class, 'uploadDocuments']);
    Route::delete('user/document/{id}', [UserProfileController::class, 'deleteDocuments']);
    Route::delete('user/{id}', [UserProfileController::class, 'delete']);
    // Route::put('user/{id}', [UserProfileController::class, 'update']);
    Route::patch('user/{id}', [UserProfileController::class, 'archive']);

    Route::get('resident', [UserProfileController::class, 'recidents']);

    Route::post('user/import', [UserProfileController::class, 'import']);

    Route::put('permission/{user_id}', [UserProfileController::class, 'permission']);

    Route::get('inspection', [InspectionController::class, 'list']);
    Route::post('inspection', [InspectionController::class, 'create']);
    Route::post('inspection/{id}', [InspectionController::class, 'update']);
    Route::get('inspection/{id}', [InspectionController::class, 'show']);
    Route::delete('inspection/{id}', [InspectionController::class, 'delete']);
    Route::delete('inspection-document/{id}', [InspectionController::class, 'deleteDocument']);
    Route::get('quickbook', [QuickbookController::class, 'connect']);
    Route::post('quickbook', [QuickbookController::class, 'authorise']);

    
    Route::post('invoice', [InvoiceController::class, 'create']);
    Route::post('bulk-invoice', [InvoiceController::class, 'bulkInvoice']);
    Route::get('invoice/sync/{id}', [InvoiceController::class, 'sync']);
    Route::get('resident/sync/{id}', [UserProfileController::class, 'sync']);

    Route::put('invoice/{id}', [InvoiceController::class, 'edit']);
    Route::delete('invoice/{id}', [InvoiceController::class, 'delete']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|staff|recident|maintenance-staff']], function () {
    Route::get('user', [UserProfileController::class, 'index']);
    Route::get('notice-highlight', [NoticeController::class, 'highlight']);
    Route::post('upload/{user_id}', [UserProfileController::class, 'upload']);
    Route::put('set-password/{user_id}', [UserProfileController::class, 'setPassword']);
    Route::put('user/{user_id}', [UserProfileController::class, 'update']);

    Route::post('bug', [BugController::class, 'index']);

    Route::get('invoice', [InvoiceController::class, 'list']);
    Route::get('invoice/{id}', [InvoiceController::class, 'show']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|staff|recident|maintenance-staff']], function () {
    Route::get('maintanance/{id}', [MaintanceController::class, 'show']);
    Route::get('user/{id}', [UserProfileController::class, 'show']);
    Route::post('maintanance-conversation/{id}', [MaintanceController::class, 'createConversation']);
    Route::get('maintanance-conversation/{id}', [MaintanceController::class, 'conversations']);
    Route::post('maintanance', [MaintanceController::class, 'store']);

});

Route::group(['middleware' => ['auth:sanctum', 'role:recident']], function () {
    Route::get('maintanance', [MaintanceController::class, 'list']);
    // Route::post('maintanance', [MaintanceController::class, 'store']);
    Route::put('maintanance/{id}', [MaintanceController::class, 'update']);
    Route::post('contact-office', [BugController::class, 'contactOffice']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|staff|maintenance-staff']], function () {
    Route::get('maintanance-admin', [MaintanceController::class, 'listAll']);
    Route::get('event-inspection', [InspectionController::class, 'events']);
    Route::get('/occupants', [UserProfileController::class, 'allOccupants']);

    Route::put('maintanance-admin/{id}', [MaintanceController::class, 'updateAdmin']);
    Route::get('maintanance-dashboard', [MaintanceController::class, 'dashboard']);

});

Route::group(['middleware' => ['auth:sanctum', 'role:maintenance-staff']], function () {
});
Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');
