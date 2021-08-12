<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Post;

class PostController extends Controller
{
    //
    public function create(Request $request)
    {
        $userID = Auth::id();
        DB::table('posts')->insert([
                'userID' => $userID,
                'phone' => $request->phone,
                'address' => $request->address,
                'type_room' => $request->type,
                'cost' => $request->costs,
                'area' => $request->area,
                'live_with_host' => $request->host,
                'isApproved'=>false
            ]);
        return DB::table('posts')->orderBy('postID', 'desc')->first()->postID;
    }
    public function show(Request $request, $id)
    {
        $posts = DB::table('posts')->where('postID', $id)->get()[0];
        return $posts;
    }
    public function update(Request $request )
    {
        $post = new Post;
        if ($request->user()->can('update', $post)) {
            return response()->json(['status' => true]) ;
        } else {
            return response()->json(['status' => false]) ;
        }
    }
    public function showByAuthor($id){
     return  DB::table('users')
            ->join('posts', 'users.userID', '=', 'posts.userID')
            ->where('posts.userID','=', $id)
            ->select('posts.postID')
            ->get();
        
    }
}
