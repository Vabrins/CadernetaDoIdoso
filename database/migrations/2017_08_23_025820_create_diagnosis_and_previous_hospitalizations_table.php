<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDiagnosisAndPreviousHospitalizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diagnosis_and_previous_hospitalizations_2_2_1', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'diagnosis_and_previous_hospitalizations_2_2_1_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'diagnosis_and_previous_hospitalizations_2_2_1_2_fk_elderlies')->references('id')->on('elderlies');
            $table->string('diagnostics_2_2', '30')->nullable(true);
            $table->string('diagnostics_year_2_2', '5')->nullable(true);
            $table->string('hospitalization_2_2', '30')->nullable(true);
            $table->string('other_conditions_2_2', '50')->nullable(true);
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
        Schema::dropIfExists('diagnosis_and_previous_hospitalizations_2_2_1');
    }
}
