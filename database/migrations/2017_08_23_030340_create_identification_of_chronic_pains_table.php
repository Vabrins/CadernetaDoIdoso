<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIdentificationOfChronicPainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('identification_of_chronic_pains_2_10', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'identification_of_chronic_pains_2_10_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'identification_of_chronic_pains_2_10_2_fk_elderlies')->references('id')->on('elderlies');
            $table->boolean('do_you_have_pain_last_same_more_than_3_mon_2_10')->nullable(true);
            $table->boolean('the_pain_is_like_a_shock_or_a_burning_2_10')->nullable(true);
            $table->boolean('does_the_pain_get_worse_when_walking_2_10')->nullable(true);
            $table->boolean('does_pain_improve_with_rest_2_10')->nullable(true);
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
        Schema::dropIfExists('identification_of_chronic_pains_2_10');
    }
}
