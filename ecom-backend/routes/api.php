<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//insert user
Route::post('/register',[UserController::class,'register']);
//login user

Route::post('/login',[UserController::class,'login']);
//add record
Route::post('/addproduct',[ProductController::class,'addproduct']);

//List Record
Route::get('/getlist',[ProductController::class,'getlist']);
//delete record
Route::delete('/delete/{id}',[ProductController::class,'delete']);
//get single record
Route::get('/getproduct/{id}',[ProductController::class,'getproduct']);

//update single record
Route::put('/updproduct/{id}',[ProductController::class,'updproduct']);

//Search record api
Route::get('/search/{key}',[ProductController::class,'search']);






