<?php

namespace App\Http\Controllers\Approve;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ApprovedPostController extends Controller
{
    public function show()
    {
        $posts = DB::table('posts')
        ->join('users', 'posts.userID', '=', 'users.userID')
        ->select('users.userID','users.username','users.email', 'posts.postID', 'posts.phone','posts.address','posts.type_room','posts.cost','posts.area', 'posts.live_with_host', 'posts.isApproved')
        ->get();
        return $posts;
    }
    public function approve(Request $request){
        DB::table('posts')
              ->where('postID', $request->postID)
              ->update(['isApproved' => 1]);
        return "success";
    }
    public function delete(){
        DB::table('posts')->where('postID', 90)->delete();
    }
}
