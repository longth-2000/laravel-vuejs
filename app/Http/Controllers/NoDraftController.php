<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Session;
class NoDraftController extends Controller
{
    //
    public function draft(){
      if(Auth::check()){
        return Session::get('lastActivityTime');
      }
      else {
          return "login, please";
      }
    }
}
