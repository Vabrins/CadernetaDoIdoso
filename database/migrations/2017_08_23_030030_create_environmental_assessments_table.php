<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnvironmentalAssessmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('environmental_assessments_2_8', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'environmental_assessments_2_8_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'environmental_assessments_2_8_2_fk_elderlies')->references('id')->on('elderlies');
            $table->integer('unimpeded_walking_areas_2_8')->nullable(true);
            $table->integer('presence_of_support_bars_2_8')->nullable(true);
            $table->integer('uniform_floors_and_carpets_well_fixed_2_8')->nullable(true);
            $table->integer('enough_lighting_brighten_inside_each_room_including_steps_2_8')->nullable(true);
            $table->integer('switches_accessible_at_the_entrance_two_rooms_2_8')->nullable(true);
            $table->integer('shower_area_with_non_slip_2_8')->nullable(true);
            $table->integer('box_with_easy_opening_or_presence_of_firm_curtain_2_8')->nullable(true);
            $table->integer('low_cabinets_no_need_for_use_of_stairs_2_8')->nullable(true);
            $table->integer('non_slip_floor_2_8')->nullable(true);
            $table->integer('double_sided_and_firm_handrail_2_8')->nullable(true);
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
        Schema::dropIfExists('environmental_assessments_2_8');
    }
}
