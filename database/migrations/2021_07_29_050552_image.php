<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Image extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments("imageID");
            
            $table->integer('postID')->unsigned();
            $table->foreign('postID')->references('postID')->on('posts')->onDelete('cascade');
            $table->text('link');
            $table->text('type_image');
            $table->timestamps();
        });
        /*  */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('images');
    }
}
