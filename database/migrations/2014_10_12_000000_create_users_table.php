<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cpf', '11')->unique();
            $table->string('email', '35')->unique();
            $table->string('password', '255');
            $table->string('name', '30');
            $table->string('card_number_cns', '15');
            $table->enum('level', ['professional', 'super_admin']);
            $table->unsignedInteger('id_companies');
            $table->foreign('id_companies', 'users_fk_companies')->references('id')->on('companies');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
