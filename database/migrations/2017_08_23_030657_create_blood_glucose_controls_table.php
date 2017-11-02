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
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'blood_glucose_controls_2_11_b_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'blood_glucose_controls_2_11_b_2_fk_elderlies')->references('id')->on('elderlies');
            $table->boolean('fasting_2_11_b')->nullable(true);
            $table->boolean('casual_2_11_b')->nullable(true);
            $table->integer('mg_dl_2_11_b')->nullable(true);
            $table->softDeletes();
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
