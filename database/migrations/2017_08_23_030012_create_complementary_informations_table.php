<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComplementaryInformationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complementary_informations_2_7', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'complementary_informations_2_7_fk_historys')->references('id')->on('historys');
            $table->integer('some_family_member_or_friend_said_that_you_are_getting_forgotten_2_7');
            $table->integer('forgetfulness_is_getting_worse_in_last_months_2_7');
            $table->integer('forgetfulness_is_preventing_of_some_daily_activity__2_7');
            $table->integer('in_the_last_month_you_were_dismayed_sadness_or_hopelessness_2_7');
            $table->integer('in_the_last_month_you_lost_interest_or_pleasure_for_activities_formerly_pleasurable_2_7');
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
        Schema::dropIfExists('complementary_informations_2_7');
    }
}
