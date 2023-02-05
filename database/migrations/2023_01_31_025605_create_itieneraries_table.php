<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('itieneraries', function (Blueprint $table) {
            // - itenerary_id
            // - wisata_id
            // - agenda
            // - deskripsi

            $table->id('itenerary_id');
            $table->foreignId('wisata_id');
            $table->string('agenda');
            $table->text('deskripsi');
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
        Schema::dropIfExists('itieneraries');
    }
};
