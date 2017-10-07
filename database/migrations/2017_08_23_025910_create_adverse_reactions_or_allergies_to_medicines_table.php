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
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'adverse_reactions_or_allergies_to_medicines_2_4_fk_historys')->references('id')->on('historys');
            $table->string('medicine_2_4')->nullable(true);
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
