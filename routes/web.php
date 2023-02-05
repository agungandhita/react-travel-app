<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/blog', function () {
    return Inertia::render('Blog');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/destination', function () {
    return Inertia::render('Destination');
});

Route::get('/privatetrip', function () {
    return Inertia::render('PrivateTrip');
});

Route::get('/masuk', function () {
    return Inertia::render('Masuk');
});

Route::get('/singletrip', function () {
    return Inertia::render('SingleTrip');
});

Route::get('/opentrip', function () {
    return Inertia::render('OpenTrip');
});

Route::get('/about', function () {
    return Inertia::render('AboutUs');
});

Route::get('/testimoni', function () {
    return Inertia::render('Testimoni');
});

Route::get('/daftar', function () {
    return Inertia::render('Register');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
