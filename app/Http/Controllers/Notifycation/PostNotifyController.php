<?php

namespace App\Http\Controllers\Notifycation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Notification;
use App\Events\ApprovePost;
use Pusher\Pusher;
use App\Notifications\ApprovePostNotifycation;
use Illuminate\Support\Facades\Auth;

class PostNotifyController extends Controller
{
    public function notify(Request $request)
    {
        event(new ApprovePost(['postID' => $request->postID,
                               'title' => "Thông báo phê duyệt",
                               'content' => 'Bài đăng số '.$request->postID.' của bạn đã được phê duyệt']));
        /* $user = User::find($request->userID);
        $user->notify(new ApprovePostNotifycation());   */
    }
}
