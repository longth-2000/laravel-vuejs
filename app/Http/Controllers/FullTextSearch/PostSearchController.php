<?php

namespace App\Http\Controllers\FullTextSearch;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;

class PostSearchController extends Controller
{
    //
    public function search(){
        
        $posts = Post::search('Hà Nội')->get();
        return $posts;
    } 
}
