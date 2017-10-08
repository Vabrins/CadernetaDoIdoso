<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('falls_2_9', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'falls_2_9_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'falls_2_9_2_fk_elderlies')->references('id')->on('elderlies');
            $table->string('date_of_fall_month_2_9', '12');
            $table->string('date_of_fall_year_2_9', '12');
            $table->boolean('the_fall_caused_some_fracture_2_9');
            $table->string('the_fall_caused_some_fracture_extra_2_9', '30');
            $table->boolean('you_stopped_perform_some_activity_for_fear_to_fall_again_2_9');
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
        Schema::dropIfExists('falls_2_9');
    }
}
