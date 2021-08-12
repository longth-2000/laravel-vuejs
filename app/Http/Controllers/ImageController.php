<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    //
   
    public function store(Request $request)
    {
        $userID = Auth::id();
        $images = $request->file;
        foreach ($images as $image) {
            $file_name = time().'_'.$image->getClientOriginalName();
            $file_path = $image->storeAs('uploads/'.$userID, $file_name, 'public');
            $link = asset('storage/uploads/'.$userID.$file_name);
            DB::table('images')->insert([
                'postID' => $request->postID,
                'link' => $link,
                'type_image' => 'post'
            ]);  
          
        }
        return "success";
    }
}
