<?php

use App\Models\Fasilitas;
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
        Schema::create('fasilitas', function (Blueprint $table) {
            // - fasilitas_id
            // - wisata_id 
            // - inclusion
            // - exclusions
            // }
            $table->id('fasilitas_id');
            $table->foreignId('wisata_id');
            $table->text('inclusion');
            $table->text('exclusions');
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
        Schema::dropIfExists('fasilitas');
    }
};
