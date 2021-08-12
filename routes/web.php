<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SinglePageController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\Approve\ApprovedPostController;
use App\Http\Controllers\Approve\ApprovedCommentController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\Notifycation\PostNotifyController;
use App\Http\Controllers\Notifycation\CommentNotifyController;
use App\Http\Controllers\FullTextSearch\PostSearchController;
use App\Http\Controllers\NoDraftController;
use App\Http\Middleware\AutoLogout;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/greeting', function () {
    return "hello";
});

Route::post('/api/login', [LoginController::class, 'login']);
Route::prefix('api/register')->group(function () {
    Route::post('/store', [RegisterController::class, 'store']);
    Route::get('/show', [RegisterController::class, 'index']);
});

Route::prefix('api/profile')->group(function () {
    Route::post('/create', [ProfileController::class, 'create']);
    Route::get('/show', [ProfileController::class, 'show']);
    Route::post('/update', [ProfileController::class, 'update']);
});
Route::prefix('api/post')->group(function () {
    Route::post('/create', [PostController::class, 'create']);
    Route::get('/show/{id}', [PostController::class, 'show']);
    Route::get('/update', [PostController::class, 'update']);
    Route::get('/showByAuthor/{userID}', [PostController::class, 'showByAuthor']);
    Route::post('/image', [ImageController::class, 'store']);
});
Route::post('/api/search', [SearchController::class, 'search']);
Route::get('/api/full-text-search/post', [PostSearchController::class, 'search']);
Route::prefix('api/comment')->group(function () {
    Route::post('/store', [CommentController::class, 'store']);
    Route::get('/show/{id}', [CommentController::class, 'show']);
});
Route::get('/api/draft', [NoDraftController::class, 'draft']);
Route::prefix('admin')->group(function () {
    Route::prefix('post')->group(function () {
        Route::get('/show', [ApprovedPostController::class, 'show']);
        Route::put('/approve', [ApprovedPostController::class, 'approve']);
        Route::delete('/delete', [ApprovedPostController::class, 'delete']);
    });
    Route::prefix('comment')->group(function () {
        Route::get('/show', [ApprovedCommentController::class, 'show']);
    });
});
Route::prefix('api/notifications')->group(function () {
    Route::post('/post', [PostNotifyController::class, 'notify']);
    Route::post('/comment', [CommentNotifyController::class, 'notify']);
});
Route::get('/api/logout', [LogoutController::class, 'logout']);
Route::get('/auth/{provider}', [SocialAuthController::class, 'redirectToProvider']);
Route::get('/auth/{provide}/callback', [SocialAuthController::class, 'handleCallbackFromProvider']);

Route::get('/{parent}/{id?}/{children?}', [SinglePageController::class, 'index'])->middleware('web');
