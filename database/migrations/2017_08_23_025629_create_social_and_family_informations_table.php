<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSocialAndFamilyInformationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_and_family_informations_1_b', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'social_and_family_informations_1_b_fk_historys')->references('id')->on('historys');
            $table->boolean('do_you_live_alone_1_b');
            $table->boolean('do_you_live_with_relatives_1_b');
            $table->boolean('do_you_live_with_your_spouse_or_Partne_1_b');
            $table->boolean('you_live_in_a_long_term_institution_for_the_elderly_ilpi_shelter_or_nursing_home_1_b');
            $table->boolean('in_the_last_30_days_you_have_met_friends_1_b');
            $table->boolean('in_case_of_need_you_have_someone_to_accompany_you_to_the_health_facility_or_to_a_query_1_b');
            $table->boolean('have_you_easy_access_to_pharmacy_services_bakery_or_supermarket_1_b');
            $table->boolean('have_you_easy_access_to_transportation_1_b');
            $table->boolean('do_you_currently_work_1_b');
            $table->boolean('do_you_receive_retirement_or_pension_1_b');
            $table->boolean('you_receive_benefit_of_benefit_continued_bpc_1_b');
            $table->boolean('do_you_receive_benefits_from_the_exchange_1_b');
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
        Schema::dropIfExists('social_and_family_informations_1_b');
    }
}
