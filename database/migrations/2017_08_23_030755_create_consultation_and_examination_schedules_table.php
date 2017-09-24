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
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'consultation_examination_schedules_2_11_e_fk_historys')->references('id')->on('historys');
            $table->date('date_2_11_e');
            $table->string('hour_2_11_e', '5');
            $table->string('place_2_11_e', '40');
            $table->string('query_exam_2_11_e', '255');
            $table->string('profissional_name_2_11_e', '40');
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
