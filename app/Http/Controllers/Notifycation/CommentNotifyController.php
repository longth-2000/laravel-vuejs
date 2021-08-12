<?php

namespace App\Http\Controllers\Notifycation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentNotifyController extends Controller
{
    public function notify(){
        return "Message has been sent";
    }
}
