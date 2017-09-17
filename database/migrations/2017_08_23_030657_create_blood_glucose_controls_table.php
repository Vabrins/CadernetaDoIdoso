<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBloodGlucoseControlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blood_glucose_controls_2_11_b', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'blood_glucose_controls_2_11_b_fk_historys')->references('id')->on('historys');
            $table->boolean('fasting_2_11_b');
            $table->boolean('casual_2_11_b');
            $table->integer('mg_dl_2_11_b');
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
        Schema::dropIfExists('blood_glucose_controls_2_11_b');
    }
}
