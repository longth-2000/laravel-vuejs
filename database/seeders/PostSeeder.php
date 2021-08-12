<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $type_room = collect(["Chung cư","Phòng trọ mini", "Nhà nguyên căn"]);
        $address = collect(["Hà Nội","Hải Phòng", "Đà Nẵng", "Cần Thơ"]);
        $userID_comment = User::select('userID')->get();
        $userID_post = User::select('userID')->where('roleID',2)->get();
        DB::table('posts')->truncate();
        DB::table('comments')->truncate();
        Post::factory()
        ->count(5000)
        ->state(new Sequence(
            fn ($sequence) => ['userID'  => $userID_post->random()->userID,
                               'address' => $address->random(),
                               'type_room' => $type_room->random()]
        ))
        ->has( 
            Comment::factory()
            ->count(5)
            ->state(new Sequence(
                fn ($sequence) => [ 'userID' => $userID_comment->random()->userID]
            ))
        )
        ->create();
    }
}
