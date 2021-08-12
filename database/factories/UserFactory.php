<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function suspended()
    {
        return $this->state(function (array $attributes) {
            return [
                
            ];
        });
    }
    public function definition()
    {
        return [       
            'username' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            /* 'email_verified_at' => now(), */
            'password' => '123456789', // password
          /*   'remember_token' => Str::random(10), */
            'roleID' => 0,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
