<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Models\User;
class LoginController extends Controller
{
    public function login(LoginRequest $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
                  $user = Auth::user(); 
                  $request->session()->put('email', $user->email);
                  $request->session()->put('username', $user->username);
                  $token = $user->createToken($request->email)->plainTextToken;
                  return response()->json(['status' => true, 'user' => $user, 'token' => $token]);
        }
        else {
            return response()->json(['status' => false, 'message' => 'Tài khoản không tồn tại']);
        }
    }
    public function index(){
        return Auth::user();
    }
    public function logout(){
        $user =  Auth::user();
        $user->tokens()->delete();
    }
}
