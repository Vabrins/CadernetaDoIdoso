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
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'anthropometric_data_s_2_5_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'anthropometric_data_s_2_5_2_fk_elderlies')->references('id')->on('elderlies');
            $table->float('weight_2_5', 8, 2)->nullable(true);
            $table->float('height_2_5', 8, 2)->nullable(true);
            $table->float('imc_weight_height_2_5', 8, 2)->nullable(true);
            $table->float('calf_perimeter_pp_left_2_5', 8, 2)->nullable(true);
            $table->boolean('you_have_exp_loss_uni_weight_min_body_last_year_2_5')->nullable(true);
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
        Schema::dropIfExists('anthropometric_data_s_2_5');
    }
}
