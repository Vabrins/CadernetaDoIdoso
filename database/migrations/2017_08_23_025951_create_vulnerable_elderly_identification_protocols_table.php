<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVulnerableElderlyIdentificationProtocolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vulnerable_elderly_identification_protocols_2_6', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'vulnerable_elderly_identification_protocols_2_6_fk_historys')->references('id')->on('historys');
            $table->integer('age_2_6');
            $table->string('self_perception_of_health_2_6');
            $table->string('bending_crouching_or_kneel_down_2_6');
            $table->string('lift_or_load_heavy_objects_approximately_five_kg_2_6');
            $table->string('raise_or_extend_arms_above_level_of_the_shoulder_2_6');
            $table->string('write_or_manipulate_and_hold_small_objects_2_6');
            $table->string('walk_400_meters_about_four_blocks_2_6');
            $table->string('do_domestic_serv_heavy_rubbing_floor_clean_windows_2_6');
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
        Schema::dropIfExists('vulnerable_elderly_identification_protocols_2_6');
    }
}
