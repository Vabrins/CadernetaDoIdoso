<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsultationAndExaminationSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_examination_schedules_2_11_e', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'consultation_examination_schedules_2_11_e_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'consultation_examination_schedules_2_11_e_2_fk_elderlies')->references('id')->on('elderlies');
            $table->date('date_2_11_e')->nullable(true);
            $table->string('hour_2_11_e', '5')->nullable(true);
            $table->string('place_2_11_e', '40')->nullable(true);
            $table->string('query_exam_2_11_e', '255')->nullable(true);
            $table->string('profissional_name_2_11_e', '40')->nullable(true);
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
        Schema::dropIfExists('consultation_and_examination_schedules_2_11_e');
    }
}
