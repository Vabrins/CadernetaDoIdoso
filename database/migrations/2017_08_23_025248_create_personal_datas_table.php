<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonalDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_datas_1', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'personal_datas_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'personal_datas_2_fk_elderlies')->references('id')->on('elderlies');
            $table->string('name_1', '50')->nullable(true);
            $table->string('nick_name_1', '50')->nullable(true);
            $table->string('card_number_cns_1', '15')->nullable(true);
            $table->string('photo_1', '255')->nullable(true);
            $table->string('document_rg_1', '20')->nullable(true);
            $table->string('mothers_name_1', '50')->nullable(true);
            $table->date('date_of_birth_1')->nullable(true);
            $table->char('sexuality_1', 2)->nullable(true);
            $table->string('city_of_birth_1', '2')->nullable(true);
            $table->string('nationality_1', '30')->nullable(true);
            $table->string('country_of_birth_1', '30')->nullable(true);
            $table->boolean('can_you_read_and_write_1')->nullable(true);
            $table->string('scholarity_1', '15')->nullable(true);
            $table->string('breed_color_1', '30')->nullable(true);
            $table->string('breed_color_aux_1', '30')->nullable(true);
            $table->boolean('do_you_have_a_religion_1')->nullable(true);
            $table->string('do_you_have_a_religion_aux_1', '20')->nullable(true);
            $table->string('occupation_primary_profession_1', '50')->nullable(true);
            $table->string('marital_status_1', '50')->nullable(true);
            $table->string('marital_status_aux_1', '50')->nullable(true);
            $table->string('basic_heath_unit_that_attends_1', '30')->nullable(true);
            $table->string('do_you_have_any_major_allergies_1', '50')->nullable(true);
            $table->boolean('do_you_have_any_disabilities_1')->nullable(true);
            $table->string('do_you_have_any_disabilities_aux_1', '30')->nullable(true);
            $table->string('whatdeficiency_1', '30')->nullable(true);            
            $table->string('blood_type_1', '30')->nullable(true);
            $table->string('rh_factor_1', '50')->nullable(true);
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
        Schema::dropIfExists('personal_datas_1');
    }
}
