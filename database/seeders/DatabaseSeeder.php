<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Fasilitas::factory(10)->create();
        \App\Models\Guide::factory(10)->create();
        \App\Models\Itienerary::factory(10)->create();
        \App\Models\Kota::factory(10)->create();
        \App\Models\Pemesanan::factory(10)->create();
        \App\Models\Testi::factory(10)->create();
        \App\Models\Wisata::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
