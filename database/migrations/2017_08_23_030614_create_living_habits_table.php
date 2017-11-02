<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLivingHabitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('living_habits_2_11', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'living_habits_2_11_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'living_habits_2_11_2_fk_elderlies')->references('id')->on('elderlies');
            $table->boolean('do_you_go_to_day_centers_clubs_or_social_groups_2_11')->nullable(true);
            $table->boolean('do_you_do_any_volunteer_work_2_11')->nullable(true);
            $table->boolean('do_you_have_any_leisure_activities_2_11')->nullable(true);
            $table->boolean('do_you_engage_type_ph_act_least_three_tm_week_2_11')->nullable(true);
            $table->boolean('would_you_like_start_some_phy_activity_program_2_11')->nullable(true);
            $table->boolean('do_you_make_at_least_three_meals_a_day_2_11')->nullable(true);
            $table->boolean('do_you_eat_fruits_veg_your_meals_thro_the_day_2_11')->nullable(true);
            $table->boolean('in_at_least_one_meal_day_you_eat_meat_fish_eggs_2_11')->nullable(true);
            $table->boolean('you_have_custom_consuming_sug_dr_cak_bis_stuf_dess_2_11')->nullable(true);
            $table->boolean('in_the_prep_your_meals_great_qt_oils_used_fats_su_salt_2_11')->nullable(true);
            $table->boolean('do_you_include_water_intake_in_your_daily_routine_2_11')->nullable(true);
            $table->boolean('do_you_currently_smoke_any_tobacco_products_2_11')->nullable(true);
            $table->boolean('would_you_like_to_quit_smoking_2_11')->nullable(true);
            $table->boolean('are_you_a_former_smoker_2_11')->nullable(true);
            $table->boolean('do_you_drink_alcohol_2_11')->nullable(true);
            $table->boolean('have_you_ever_felt_the_need_to_reduce_or_of_alcohol_2_11')->nullable(true);
            $table->boolean('has_anyone_ever_criticized_you_for_drinking_2_11')->nullable(true);
            $table->boolean('feel_guilty_for_drinking_2_11')->nullable(true);
            $table->boolean('do_you_usually_drink_in_the_morning_2_11')->nullable(true);
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
        Schema::dropIfExists('living_habits_2_11');
    }
}
