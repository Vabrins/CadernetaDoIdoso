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
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'identification_of_chronic_pains_2_10_fk_historys')->references('id')->on('historys');
            $table->boolean('do_you_have_any_pain_lasting_the_same_or_more_than_3_months_2_10');
            $table->boolean('the_pain_is_like_a_shock_or_a_burning_2_10');
            $table->boolean('does_the_pain_get_worse_when_walking_2_10');
            $table->boolean('does_pain_improve_with_rest_2_10');
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
