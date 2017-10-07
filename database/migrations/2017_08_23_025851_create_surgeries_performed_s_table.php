<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSurgeriesPerformedSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surgeries_performed_s_2_3', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'surgeries_performed_s_2_3_fk_historys')->references('id')->on('historys');
            $table->string('surgery_2_3', '50')->nullable(true);
            $table->string('year_2_3', '5')->nullable(true);
            $table->string('comments_2_3', '50')->nullable(true);
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
        Schema::dropIfExists('surgeries_performed_s_2_3');
    }
}
