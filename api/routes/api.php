<?php

use App\Constants\Role;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoticeController;
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
  Route::post('register', [AuthController::class, 'register']);

  Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'user']);
  });
});
Route::group(['middleware' => ['auth:sanctum', 'role:admin']], function () {
  Route::get('notice', [NoticeController::class, 'index']);
  Route::get('notice/{id}', [NoticeController::class, 'show']);
  Route::post('notice', [NoticeController::class, 'store']);
  Route::delete('notice/{id}', [NoticeController::class, 'delete']);
  Route::put('notice/{id}', [NoticeController::class, 'update']);
});
