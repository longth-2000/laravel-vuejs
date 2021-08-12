<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [    
            'userID' => 1,   
            'phone' => $this->faker->phoneNumber(),
            'cost' => 1000000,
            'area' => 100,
            'live_with_host' => 'không',
            'isApproved' => 0
        ];
    }
}
