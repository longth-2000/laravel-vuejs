<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments("commentID");
            $table->integer('userID')->unsigned();
            $table->foreign('userID')->references('userID')->on('users')->onDelete('cascade');
            $table->integer('postID')->unsigned();
            $table->foreign('postID')->references('postID')->on('posts')->onDelete('cascade');
            $table->text('comment');
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
        Schema::dropIfExists('comments');
    }
   
}
