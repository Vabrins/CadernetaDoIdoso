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
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'social_and_family_informations_1_b_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'social_and_family_informations_1_b_2_fk_elderlies')->references('id')->on('elderlies');
            $table->boolean('do_you_live_alone_1_b')->nullable(true);
            $table->boolean('do_you_live_with_relatives_1_b')->nullable(true);
            $table->boolean('do_you_live_with_your_spouse_or_partne_1_b')->nullable(true);
            $table->boolean('you_live_long_term_inst_eld_ilpi_shelter_or_nursing_home_1_b')->nullable(true);
            $table->boolean('in_the_last_30_days_you_have_met_friends_1_b')->nullable(true);
            $table->boolean('in_case_of_need_you_have_some_to_acc_the_health_fac_query_1_b')->nullable(true);
            $table->boolean('have_you_easy_access_pharmacy_services_bakery_supermarket_1_b')->nullable(true);
            $table->boolean('have_you_easy_access_to_transportation_1_b')->nullable(true);
            $table->boolean('do_you_currently_work_1_b')->nullable(true);
            $table->boolean('do_you_receive_retirement_or_pension_1_b')->nullable(true);
            $table->boolean('you_receive_benefit_of_benefit_continued_bpc_1_b')->nullable(true);
            $table->boolean('do_you_receive_benefits_from_the_exchange_1_b')->nullable(true);
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
        Schema::dropIfExists('social_and_family_informations_1_b');
    }
}
