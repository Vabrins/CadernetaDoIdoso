<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVaccinationCalendarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vaccination_calendars_2_11_c', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'vaccination_calendars_2_11_c_fk_historys')->references('id')->on('historys');
            $table->string('name_2_11_c');
            $table->date('date_2_11_c');
            $table->string('lot_2_11_c');
            $table->string('signature_2_11_c');
            $table->string('dose_2_11_c');
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
        Schema::dropIfExists('vaccination_calendars_2_11_c');
    }
}
