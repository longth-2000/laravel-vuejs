<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Image;
class Profile extends Model
{
    use HasFactory;
    protected $primaryKey='profileID';
    public function image()
    {
        return $this->hasMany(Image::class,'profileID','profileID');
    }
}
