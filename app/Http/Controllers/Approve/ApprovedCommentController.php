<?php

namespace App\Http\Controllers\Approve;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Post;
use App\Models\User;

use App\Models\Comment;
use Illuminate\Support\Collection;

class ApprovedCommentController extends Controller
{
    public function show()
    {
        $comments = Comment::with(['posts', 'users'])->get();
        $comment_infor = Collection::make(); 
        foreach($comments as $comment){
           $comment_infor->push([ 'postID'  => $comment->posts->postID,
                                  'comment' => $comment->comment,
                                  'username'=> $comment->users->username,
                                  'email'   => $comment->users->email ]);
                                 
        }
        return $comment_infor; 
    }
    public function approve(Request $request){
    }
}
