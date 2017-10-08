<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComplementaryInformationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complementary_informations_2_7', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'complementary_informations_2_7_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'complementary_informations_2_7_2_fk_elderlies')->references('id')->on('elderlies');
            $table->boolean('some_family_mem_fri_said_that_are_get_forg_2_7')->nullable(true);
            $table->boolean('forgetfulness_is_getting_worse_in_last_months_2_7')->nullable(true);
            $table->boolean('forgetfulness_is_preventing_of_some_daily_activity__2_7')->nullable(true);
            $table->boolean('in_the_last_mon_were_dismayed_sad_hop_2_7')->nullable(true);
            $table->boolean('in_the_last_mon_lost_int_pleas_act_form_pleas_2_7')->nullable(true);
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
        Schema::dropIfExists('complementary_informations_2_7');
    }
}
