<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOralHealthAssessmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oral_health_assessments_2_11_d', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'oral_health_assessments_2_11_d_fk_historys')->references('id')->on('historys');
            $table->boolean('alcohol_2_11_d');
            $table->boolean('smoke_2_11_d');
            $table->boolean('presence_of_lesion_on_the_buccal_mucosa_2_11_d');
            $table->boolean('dry_mouth_2_11_d');
            $table->boolean('white_tongue_2_11_d');
            $table->boolean('presence_of_oral_candidiasis_2_11_d');
            $table->boolean('presence_of_halitosis_2_11_d');
            $table->boolean('presence_of_bacterial_plaque_2_11_d');
            $table->boolean('plate_retentive_factors_2_11_d');
            $table->boolean('obvious_presence_of_gingivitis_2_11_d');
            $table->boolean('obvious_presence_of_periodontitis_2_11_d');
            $table->boolean('presence_of_caries_2_11_d');
            $table->boolean('dental_loss_in_last_year_2_11_d');
            $table->boolean('attendance_at_the_health_unit_2_11_d');
            $table->boolean('home_service_2_11_d');
            $table->string('forwarding_for_specialties_dental_2_11_d', '2');
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
        Schema::dropIfExists('oral_health_assessments_2_11_d');
    }
}
