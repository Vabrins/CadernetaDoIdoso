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
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'living_habits_2_11_fk_historys')->references('id')->on('historys');
            $table->boolean('do_you_go_to_day_centers_clubs_or_social_groups_2_11');
            $table->boolean('do_you_do_any_volunteer_work_2_11');
            $table->boolean('do_you_have_any_leisure_activities_2_11');
            $table->boolean('do_you_engage_in_any_type_of_physical_activity_at_least_three_times_a_week_2_11');
            $table->boolean('would_you_like_to_start_some_physical_activity_program_2_11');
            $table->boolean('do_you_make_at_least_three_meals_a_day_2_11');
            $table->boolean('do_you_eat_fruits_and_vegetables_in_your_meals_throughout_the_day_2_11');
            $table->boolean('in_at_least_one_meal_a_day_do_you_eat_meat_fish_or_eggs_2_11');
            $table->boolean('you_have_the_custom_of_consuming_sugary_drinks_cakes_biscuits_stuffed_and_desserts_2_11');
            $table->boolean('in_the_preparation_of_your_meals_a_great_quantity_of_oils_is_used_fats_sugar_and_salt_2_11');
            $table->boolean('do_you_include_water_intake_in_your_daily_routine_2_11');
            $table->boolean('do_you_currently_smoke_any_tobacco_products_2_11');
            $table->boolean('would_you_like_to_quit_smoking_2_11');
            $table->boolean('are_you_a_former_smoker_2_11');
            $table->boolean('do_you_drink_alcohol_2_11');
            $table->boolean('have_you_ever_felt_the_need_to_reduce_or_of_alcohol_2_11');
            $table->boolean('has_anyone_ever_criticized_you_for_drinking_2_11');
            $table->boolean('feel_guilty_for_drinking_2_11');
            $table->boolean('do_you_usually_drink_in_the_morning_2_11');
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
