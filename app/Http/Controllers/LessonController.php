<?php

namespace App\Http\Controllers;

use App\Http\Requests\LessonRequest;
use App\Models\Course;
use App\Models\Lesson;
use Inertia\Inertia;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Course $course)
    {
        return Inertia::render('Lessons/Index',[
            'lessons' => Lesson::where('course',$course->id)->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Lessons/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LessonRequest $request,Course $course)
    {

        $validated = $request->validated();
        $lesson = Lesson::create([
            ...$validated,
            'course_id' => $course->id,
        ]);


        return redirect()->route('lesson.show',[
            'lesson' => $lesson
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Lesson $lesson)
    {

        return Inertia::render('Lessons/Show',[
            'lesson' => $lesson
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lesson $lesson)
    {
        return Inertia::render('Lessons/Edit',[
            'lesson' => $lesson
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LessonRequest $request, Lesson $lesson)
    {

        $validated = $request->validated();
        $lesson->update([
            ...$validated
        ]);

        return redirect()->route('lesson.show',[
            'lesson' => $lesson
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lesson $lesson)
    {
        $lesson->delete();
        return redirect()->route('lessons.index');
    }
}
