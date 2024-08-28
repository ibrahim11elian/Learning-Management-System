<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\RestrictedTo;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',function(){
    return redirect('/home');
});

Route::get('/home', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

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


        Route::get('/courses/{course}/edit', 'edit')->can('update',Course::class)->name('courses.edit');
        Route::patch('/courses/{course}', 'update')->can('update',Course::class)->name('courses.update');

        Route::delete('/courses/{course}', 'destroy')->can('delete',Course::class)->name('courses.destroy');
    });

});


Route::middleware('auth')->controller(LessonController::class)->group(function () {
    Route::get('/courses/{course}/lessons', 'index')->can('view',Course::class)->name('lessons.index');
    Route::get('/courses/lessons/{lesson}', 'show')->can('view',Lesson::class)->name('lessons.show');

    Route::get('/courses/{course}/lessons/create', 'create')->can('create',Course::class)->name('lessons.create');
    Route::post('/courses/{course}/lessons', 'store')->can('create',Course::class)->name('lessons.store');

    Route::get('/courses/lessons/{lesson}/edit', 'edit')->can('update',Lesson::class)->name('lessons.edit');
    Route::patch('/courses/lessons/{lesson}', 'update')->can('update',Lesson::class)->name('lessons.update');

    Route::delete('/courses/lessons/{lesson}', 'destroy')->can('delete',Lesson::class)->name('lessons.destroy');

});

require __DIR__.'/auth.php';
