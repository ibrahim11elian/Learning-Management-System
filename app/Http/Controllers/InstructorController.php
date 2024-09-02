<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;


class InstructorController extends Controller
{

    private $paginationCount;

    public function __construct()
    {
        $this->paginationCount = env('PAGINATION_COUNT', 10);
    }

    public function courses(User $user){
        $courses = $user->instructor->courses()
    ->with([
        'category',
        'instructor',
    ])
    ->withCount('enrollments')
    ->paginate($this->paginationCount);
        $enrolledCourses =  $user->enrollments()->first();
        $hasEnrollments = !empty($enrolledCourses);

        return Inertia::render('Profile/Instructor/Courses',[
            'courses' => $courses,
            'user' => $user->load('instructor.links'),
            'hasEnrollments' => $hasEnrollments,
        ]);
    }

    public function enrollments(User $user){
        $enrollments = $user->enrollments()
            ->with([
                'course' => function($query) {
                    $query->with(['category', 'instructor'])
                        ->withCount('enrollments');
                }
            ])
            ->paginate($this->paginationCount);

        return Inertia::render('Profile/Instructor/Enrollments',[
            'enrollments' => $enrollments,
            'hasEnrollments' => true,
             'user' => $user->load('instructor.links'),
            ]);
    }
}
