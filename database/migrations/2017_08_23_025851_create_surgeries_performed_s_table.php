<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSurgeriesPerformedSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surgeries_performed_s_2_3', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'surgeries_performed_s_2_3_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'surgeries_performed_s_2_3_2_fk_elderlies')->references('id')->on('elderlies');
            $table->string('surgery_2_3', '50')->nullable(true);
            $table->string('year_2_3', '5')->nullable(true);
            $table->string('comments_2_3', '100')->nullable(true);
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
        Schema::dropIfExists('surgeries_performed_s_2_3');
    }
}
