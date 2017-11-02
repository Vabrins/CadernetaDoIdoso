<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonsReferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persons_references_1_1', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_history');
            $table->foreign('id_history', 'persons_references_1_1_1_fk_historys')->references('id')->on('historys');
            $table->unsignedInteger('id_elderly');
            $table->foreign('id_elderly', 'persons_references_1_1_2_fk_elderlies')->references('id')->on('elderlies');
            $table->string('name_1_1', '50')->nullable(true);
            $table->date('date_of_birth_1_1')->nullable(true);
            $table->string('link_1_1', '30')->nullable(true);
            $table->string('address_1_1', '50')->nullable(true);
            $table->string('telephone_1_1', '15')->nullable(true);
            $table->string('cell_phone_1_1', '15')->nullable(true);
            $table->boolean('does_this_person_live_with_you_1_1')->nullable(true);
            $table->date('date_of_this_information_1_1')->nullable(true);
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
        Schema::dropIfExists('persons_references_1_1');
    }
}
