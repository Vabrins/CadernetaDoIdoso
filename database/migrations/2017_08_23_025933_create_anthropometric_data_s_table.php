<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnthropometricDataSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anthropometric_data_s_2_5', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'anthropometric_data_s_2_5_fk_historys')->references('id')->on('historys');
            $table->float('weight_2_5', 8, 2);
            $table->float('height_2_5', 8, 2);
            $table->float('imc_weight_height_2_5', 8, 2);
            $table->float('calf_perimeter_pp_left_2_5', 8, 2);
            $table->boolean('you_have_experienced_loss_of_unintentional_weight_of_minimum_of_its_body_weight_in_the_last_year_2_5');
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
        Schema::dropIfExists('anthropometric_data_s_2_5');
    }
}
