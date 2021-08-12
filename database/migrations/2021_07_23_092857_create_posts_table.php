<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('postID');
            $table->integer('userID')->unsigned();
            $table->foreign('userID')->references('userID')->on('users')->onDelete('cascade');
            $table->string('phone');
            $table->text('address');
            $table->string('type_room');
            $table->integer('cost');
            $table->integer('area');
            $table->boolean('live_with_host');
            $table->boolean('isAprroved');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
