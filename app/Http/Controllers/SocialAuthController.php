<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
class SocialAuthController extends Controller
{
    //
    public function redirectToProvider(){
        return Socialite::driver('google')->redirect();
    }
    public function handleCallbackFromProvider(){
        $user = Socialite::driver('google')->user();
        $userGoogle = new User();
        $userGoogle->username = $user->name;
        $userGoogle->email = $user->email;
        $userGoogle->provider = "google";
        $userGoogle->provider_id = $user->id;
        $userGoogle->roleID = 0;
        dd($user);
       /*  $userGoogle->save(); */
        
    }
}
