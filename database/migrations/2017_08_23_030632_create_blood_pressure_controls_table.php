<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBloodPressureControlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blood_pressure_controls_2_11_a', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'blood_pressure_controls_2_11_a_fk_historys')->references('id')->on('historys');
            $table->date('date_2_11_a');
            $table->float('pa_2_11_a', 8, 2);
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
        Schema::dropIfExists('blood_pressure_controls_2_11_a');
    }
}
