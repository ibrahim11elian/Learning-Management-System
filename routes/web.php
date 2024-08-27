<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\RestrictedTo;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Route::get('/admin',function(){
//     return Inertia::render('Admin');
// })->middleware(['auth', 'restricted_to:student']);

Route::controller(CourseController::class)->group(function(){
    Route::get('/courses', 'index')->name('courses.index');
    Route::get('/courses/{course}', 'show')->name('courses.show');

    Route::middleware(['auth','restricted_to:instructor'])->group(function(){

        Route::get('/courses/create', 'create')->can('create')->name('courses.create');
        Route::post('/courses', 'store')->can('create')->name('courses.store');


        Route::get('/courses/{course}/edit', 'edit')->can('update')->name('courses.edit');
        Route::patch('/courses/{course}', 'update')->can('update')->name('courses.update');

        Route::delete('/courses/{course}', 'destroy')->can('delete')->name('courses.destroy');
    });

});

require __DIR__.'/auth.php';
