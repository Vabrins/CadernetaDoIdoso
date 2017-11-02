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
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'oral_health_assessments_2_11_d_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'oral_health_assessments_2_11_d_2_fk_elderlies')->references('id')->on('elderlies');
            $table->boolean('alcohol_2_11_d')->nullable(true);
            $table->boolean('smoke_2_11_d')->nullable(true);
            $table->boolean('presence_of_lesion_on_the_buccal_mucosa_2_11_d')->nullable(true);
            $table->boolean('dry_mouth_2_11_d')->nullable(true);
            $table->boolean('white_tongue_2_11_d')->nullable(true);
            $table->boolean('presence_of_oral_candidiasis_2_11_d')->nullable(true);
            $table->boolean('presence_of_halitosis_2_11_d')->nullable(true);
            $table->boolean('presence_of_bacterial_plaque_2_11_d')->nullable(true);
            $table->boolean('plate_retentive_factors_2_11_d')->nullable(true);
            $table->boolean('obvious_presence_of_gingivitis_2_11_d')->nullable(true);
            $table->boolean('obvious_presence_of_periodontitis_2_11_d')->nullable(true);
            $table->boolean('presence_of_caries_2_11_d')->nullable(true);
            $table->boolean('dental_loss_in_last_year_2_11_d')->nullable(true);
            $table->boolean('attendance_at_the_health_unit_2_11_d')->nullable(true);
            $table->boolean('home_service_2_11_d')->nullable(true);
            $table->string('forwarding_for_specialties_dental_2_11_d', '2')->nullable(true);
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
        Schema::dropIfExists('oral_health_assessments_2_11_d');
    }
}
