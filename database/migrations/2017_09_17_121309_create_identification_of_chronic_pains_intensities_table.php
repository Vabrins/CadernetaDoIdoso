<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIdentificationOfChronicPainsIntensitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('identification_of_chronic_pains_intensities_2_10_b', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'identification_of_chronic_pains_intensities_2_10_b_fk_historys')->references('id')->on('historys');
            $table->date('date_2_10_b')->nullable(true);
            $table->integer('place_of_pain_2_10_b')->nullable(true);
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
        Schema::dropIfExists('identification_of_chronic_pains_intensities_2_10_b');
    }
}
