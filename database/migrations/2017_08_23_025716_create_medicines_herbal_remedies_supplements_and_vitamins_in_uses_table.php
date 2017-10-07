<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedicinesHerbalRemediesSupplementsAndVitaminsInUsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicines_herbal_remedies_suppl_vit_in_uses_2_1', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'medicines_herbal_remedies_suppl_vit_in_uses_2_1_1_fk_historys')->references('id')->on('historys');
            $table->string('name_of_the_medicinal_supplement_or_vitamin_2_1', '50')->nullable(true);
            $table->string('dose_and_frequency_2_1', '50')->nullable(true);
            $table->string('start_date_or_time_of_use_2_1')->nullable(true);
            $table->boolean('concomitant_use_of_five_or_more_medicines_2_1')->nullable(true);
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
        Schema::dropIfExists('medicines_herbal_remedies_suppl_vit_in_uses_2_1');
    }
}
