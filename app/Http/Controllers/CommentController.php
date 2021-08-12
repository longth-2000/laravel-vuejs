<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class CommentController extends Controller
{
    public function store(Request $request){
        DB::table('comments')->insert([
            'userID' => Auth::id(),
            'postID' => $request->postID,
            'comment' => $request->content
        ]); 
        $username = DB::table('users')->where('userID', Auth::id() )->get()[0]->username;
        return response()
        ->json(['username' => $username, 'comment' => $request->content]);
    }
    public function show($id){
        $comments =DB::table('comments')
                  ->join('users', 'comments.userID', '=', 'users.userID')
                  ->select('comments.comment', 'users.username')
                  ->get();
        return $comments;
    }
}
