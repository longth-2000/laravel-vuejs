<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use App\Models\User;
use Laravel\Scout\Searchable;

class Post extends Model
{
    use HasFactory, Notifiable, Searchable;
    protected $primaryKey = 'postID';
    public function image()
    {
        return $this->hasMany(Image::class, 'postID', 'postID');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'userID', 'userID');
    }
    public function comment()
    {
        return $this->hasMany(Comment::class, 'postID', 'postID');
    }
   

    
}
