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
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'identif_ch_pains_intens_2_10_b_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'identif_ch_pains_intens_2_10_b_2_fk_elderlies')->references('id')->on('elderlies');
            $table->date('date_2_10_b')->nullable(true);
            $table->string('place_of_pain_2_10_b', '30')->nullable(true);
            $table->integer('intensity_2_10_b')->nullable(true);
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
        Schema::dropIfExists('identification_of_chronic_pains_intensities_2_10_b');
    }
}
