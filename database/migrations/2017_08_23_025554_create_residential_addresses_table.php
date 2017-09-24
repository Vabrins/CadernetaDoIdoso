<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResidentialAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('residential_addresses_1_a', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'residential_addresses_1_a_fk_historys')->references('id')->on('historys');
            $table->string('street_avenue_square_1_a', '70');
            $table->integer('number_1_a');
            $table->string('complement_1_a', '20');
            $table->string('district_1_a', '50');
            $table->string('reference_point_1_a', '50');
            $table->char('county_1_a', 2);
            $table->string('zip_code_1_a', '10');
            $table->string('state_1_a', '50');
            $table->string('telephone_1_a', '15');
            $table->string('cell_phone_1_a', '15');
            $table->string('email_1_a', '50');
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
        Schema::dropIfExists('residential_addresses_1_a');
    }
}
