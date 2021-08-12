<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;
use App\Models\User;

class Comment extends Model
{
    use HasFactory;
    public function posts(){
        return $this->belongsTo(Post::class, 'postID', 'postID');
    }
    public function users(){
        return $this->belongsTo(User::class, 'userID', 'userID');
    }
    
}
