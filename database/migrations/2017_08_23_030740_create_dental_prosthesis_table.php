<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDentalProsthesisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dental_prosthesis_2_11_d_a', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_historys');
            $table->foreign('id_historys', 'dental_prosthesis_2_11_d_a_fk_historys')->references('id')->on('historys');
            $table->boolean('superior_2_11_d_a');
            $table->boolean('inferior_2_11_d_a');
            $table->boolean('total_prosthesis_2_11_d_a');
            $table->boolean('partial_prosthesis_2_11_d_a');
            $table->boolean('does_not_use_and_does_not_require_prosthesis_2_11_d_a');
            $table->boolean('does_not_use_but_needs_prosthesis_2_11_d_a');
            $table->boolean('uses_adapted_without_exchange_2_11_d_a');
            $table->boolean('uses_not_adapted_needs_exchange_2_11_d_a');
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
        Schema::dropIfExists('dental_prosthesis_2_11_d_a');
    }
}
