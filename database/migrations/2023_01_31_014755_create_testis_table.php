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
        Schema::create('testis', function (Blueprint $table) {

            // - testi {
            //     - testi_id
            //     - user_id
            //     - wisata_id
            //     - start
            //     - deskripsi
            //     }
            $table->id('testi_id');
            $table->foreignId('user_id');
            $table->foreignId('wisata_id');
            $table->date('date');
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
        Schema::dropIfExists('testis');
    }
};
