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
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'residential_addresses_1_a_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'residential_addresses_1_a_2_fk_elderlies')->references('id')->on('elderlies');
            $table->string('street_avenue_square_1_a', '70')->nullable(true);
            $table->integer('number_1_a')->nullable(true);
            $table->string('complement_1_a', '20')->nullable(true);
            $table->string('district_1_a', '50')->nullable(true);
            $table->string('reference_point_1_a', '50')->nullable(true);
            $table->char('county_1_a', 2)->nullable(true);
            $table->string('zip_code_1_a', '10')->nullable(true);
            $table->string('state_1_a', '50')->nullable(true);
            $table->string('telephone_1_a', '15')->nullable(true);
            $table->string('cell_phone_1_a', '15')->nullable(true);
            $table->string('email_1_a', '50')->nullable(true);
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
