<?php

use Illuminate\Support\Facades\Broadcast;
use App\Models\Post;
/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/
Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->userID === (int) $id;
});  
Broadcast::channel('posts.{postID}', function ($user, $postID) {
    return Post::find($postID)->userID === $user->userID;
});