<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdverseReactionsOrAllergiesToMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adverse_reactions_or_allergies_to_medicines_2_4', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'adverse_reactions_or_allergies_to_medicines_2_4_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'adverse_reactions_or_allergies_to_medicines_2_4_2_fk_elderlies')->references('id')->on('elderlies');
            $table->string('medicine_2_4', '30')->nullable(true);
            $table->date('date_2_4')->nullable(true);
            $table->string('adverse_reactions_or_allergies_2_4')->nullable(true);
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
        Schema::dropIfExists('adverse_reactions_or_allergies_to_medicines_2_4');
    }
}
