<?php

namespace Database\Seeders;

use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Profile;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
      /*   DB::table('users')->truncate(); */
       /*  DB::table('profiles')->truncate(); */
        User::factory()
        ->count(1000)
        /* ->has( 
            Profile::factory()
           
            ->count(1)
            ->state(
                function (array $attributes, User $user) { return ['userID' => $user->UserID];}
                )
            ) */
        ->create();
    }
}
