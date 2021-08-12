<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Profile;
use App\Models\User;
use App\Models\Image;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function show(Request $request ){
        $userID = Auth::user()->userID;
        $profile = Profile::find($userID);
        $image = $profile->image[0]->link;
        return response()
        ->json(['name' => $profile->name, 'age' => $profile->age, 'sex' => $profile->sex, 'image' => $image]);
    }
    
    public function update(Request $request){
        $userID = Auth::user()->userID;
        DB::table('profiles')
              ->where('userID', $userID)
              ->update(['name' => $request->name, 'sex' => $request->sex, 'age' => $request->age ]);
        return "successfully";
    }
}
