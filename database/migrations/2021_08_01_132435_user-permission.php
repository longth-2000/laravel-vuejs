<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserPermission extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user-permission', function (Blueprint $table) {
            $table->integer('userID')->unsigned();
            $table->integer('permissionID')->unsigned();
            $table->foreign('userID')->references('userID')->on('users')->onDelete('cascade');
            $table->foreign('permissionID')->references('permissionID')->on('permissions')->onDelete('cascade');
            $table->primary(['userID','permissionID']);
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
