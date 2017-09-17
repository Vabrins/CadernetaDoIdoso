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
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'personal_datas_1_fk_historys')->references('id')->on('historys');
            $table->string('name_1');
            $table->string('nick_name_1');
            $table->string('card_number_cns_1');
            $table->string('photo_1');
            $table->string('document_rg_1');
            $table->string('mothers_name_1');
            $table->date('date_of_birth_1');
            $table->char('sexuality_1', 2);
            $table->string('country_of_birth_1');
            $table->string('nationality_1');
            $table->string('birth_parents_1');
            $table->boolean('can_you_read_and_write_1');
            $table->string('scholarity_1');
            $table->string('breed_color_1');
            $table->boolean('do_you_have_a_religion_1');
            $table->string('do_you_have_a_religion_aux_1');
            $table->string('occupation_primary_profession_1');
            $table->string('marital_status_1');
            $table->string('basic_heath_unit_that_attends_1');
            $table->string('do_you_have_any_major_allergies_1');
            $table->boolean('do_you_have_any_disabilities_1');
            $table->string('do_you_have_any_disabilities_aux_1');
            $table->string('blood_type_1');
            $table->string('rh_factor_1');
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
