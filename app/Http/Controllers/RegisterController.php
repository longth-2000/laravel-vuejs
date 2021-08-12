<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\User;
use App\Models\Profile;
use App\Models\Post;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Exceptions\MyException;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;


class RegisterController extends Controller
{
    public function index(Request $request)
    {
        /*   DB::table('users')->upsert([
              ['email' => 'hoangngochuyen@gmail.com', 'password' => '1234567890', 'username' => 'HoangNgocHuyen', 'roleID' => 2],
          ], ['email'], ['username'], ['password'], ['roleID']); */
         /* $post = */
         $post = DB::table('comments')
         ->join('posts', 'posts.postID', '=', 'comments.postID')
         ->join('users', 'users.userID', '=', 'comments.userID')
         ->select('comments.commentID','posts.*', 'users.email', 'users.username', 'users.roleID', 'comments.comment')
         ->orderBy('comments.commentID')
         ->paginate(15);
         
        Cache::put('key', $post , $seconds = 10);
         return Cache::get('key');
    }
    
    public function store(RegisterRequest $request)
    {
        $user = new User;
        $user->email=$request->email;
        $user->username=$request->username;
        $user->password=$request->password;
        $user->role=$request->role;
        $user->save();
        return response()->json(['status' => true, 'message' => 'register successfully']);
    }
}
