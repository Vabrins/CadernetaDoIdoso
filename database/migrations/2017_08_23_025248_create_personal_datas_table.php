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
            $table->string('name_1', '50');
            $table->string('nick_name_1', '50');
            $table->string('card_number_cns_1', '15');
            $table->string('photo_1', '255');
            $table->string('document_rg_1', '12');
            $table->string('mothers_name_1', '50');
            $table->date('date_of_birth_1');
            $table->char('sexuality_1', 2);
            $table->string('country_of_birth_1', '30');
            $table->string('nationality_1', '30');
            $table->string('birth_parents_1', '30');
            $table->boolean('can_you_read_and_write_1');
            $table->string('scholarity_1', '15');
            $table->string('breed_color_1', '30');
            $table->boolean('do_you_have_a_religion_1');
            $table->string('do_you_have_a_religion_aux_1', '20');
            $table->string('occupation_primary_profession_1', '50');
            $table->string('marital_status_1', '50');
            $table->string('basic_heath_unit_that_attends_1', '30');
            $table->string('do_you_have_any_major_allergies_1', '50');
            $table->boolean('do_you_have_any_disabilities_1');
            $table->string('do_you_have_any_disabilities_aux_1', '30');
            $table->string('blood_type_1', '30');
            $table->string('rh_factor_1', '50');
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
