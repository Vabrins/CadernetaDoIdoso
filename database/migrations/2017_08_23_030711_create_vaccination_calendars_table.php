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
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'vaccination_calendars_2_11_c_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'vaccination_calendars_2_11_c_2_fk_elderlies')->references('id')->on('elderlies');
            $table->string('name_2_11_c', '30')->nullable(true);
            $table->date('date_2_11_c')->nullable(true);
            $table->string('lot_2_11_c', '15')->nullable(true);
            $table->string('signature_2_11_c', '30')->nullable(true);
            $table->string('dose_2_11_c', '25')->nullable(true);
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
        Schema::dropIfExists('vaccination_calendars_2_11_c');
    }
}
