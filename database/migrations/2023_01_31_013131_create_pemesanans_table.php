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
        Schema::create('pemesanans', function (Blueprint $table) {

            // - pemesanan_id
            // - wisata_id
            // - kendaraan_id
            // - sopir_id
            // - pembayaran
            // - status
            $table->id('pemesanan_id');
            $table->foreignId('wisata_id');
            $table->foreignId('user_id');
            $table->foreignId('kendaraan_id');
            $table->foreignId('guide_id');
            $table->string('pembayaran');
            $table->boolean('status')->default(false);
            $table->timestamps();
        });
    }

    /*
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pemesanans');
    }
};
