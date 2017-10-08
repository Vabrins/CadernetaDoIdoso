<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDisabilities26ATable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('disabilities_2_6_a', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'disabilities_2_6_a_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'disabilities_2_6_a_2_fk_elderlies')->references('id')->on('elderlies');
            $table->boolean('stopped_shopping_2_6_a')->nullable(true);
            $table->boolean('stop_tracking_your_money_2_6_a')->nullable(true);
            $table->boolean('stopped_walking_in_the_house_2_6_a')->nullable(true);
            $table->boolean('stopped_doing_light_household_chores_2_6_a')->nullable(true);
            $table->boolean('stop_taking_showers_alone_2_6_a')->nullable(true);
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
        Schema::dropIfExists('disabilities_2_6_a');
    }
}
