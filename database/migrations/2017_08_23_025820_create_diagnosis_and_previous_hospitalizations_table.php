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
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'diagnosis_and_previous_hospitalizations_2_2_fk_historys')->references('id')->on('historys');
            $table->string('anemia_2_2');
            $table->string('stroke_2_2');
            $table->string('asthma_2_2');
            $table->string('mellitus_diabetes_2_2');
            $table->string('arterial_disease_coronary_2_2');
            $table->string('pulmonary_disease_obstructive_disease_dpoc_2_2');
            $table->string('epilepsy_2_2');
            $table->string('arterial_hypertension_2_2');
            $table->string('cardiac_insufficiency_2_2');
            $table->string('arterial_hypertension_2_2');
            $table->string('peptic_ulcer_2_2');
            $table->string('depression_2_2');
            $table->string('urinary_incontinence_2_2');
            $table->string('fecal_incontinence_2_2');
            $table->string('cognitive_impairment_insanity_2_2');
            $table->string('anemia_2_2');
            $table->string('stroke_2_2');
            $table->string('asthma_2_2');
            $table->string('arterial_disease_coronary_2_2');
            $table->string('mellitus_diabetes_2_2');
            $table->string('pulmonary_disease_obstructive_disease_dpoc_2_2');
            $table->string('epilepsy_2_2');
            $table->string('arterial_hypertension_2_2');
            $table->string('cardiac_insufficiency_2_2');
            $table->string('arterial_hypertension_2_2');
            $table->string('peptic_ulcer_2_2');
            $table->string('depression_2_2');
            $table->string('urinary_incontinence_2_2');
            $table->string('fecal_incontinence_2_2');
            $table->string('cognitive_impairment_insanity_2_2');
            $table->string('other_conditions_2_2');
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
