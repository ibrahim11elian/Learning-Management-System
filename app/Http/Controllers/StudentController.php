<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function dashboard(){
        return Inertia::render('Profile/Student/Dashboard', [
            'stats' => $this->getUserDashboardStats()
        ]);
    }

    public function settings(Request $request){
        return Inertia::render('Profile/Student/Settings',[
             'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function courses(){
         $user = Auth::user();

        // Retrieve the courses directly via enrollments
        $enrollments = $user->enrollments()->with(['course.category','course.instructor','course.enrollments'])->paginate(10);
        return Inertia::render('Profile/Student/Courses',[
            'enrollments' => $enrollments
        ]);
    }

    public function wishList(){
        return Inertia::render('Profile/Student/WishList');
    }

    public function getUserDashboardStats(){
        $user = Auth::user();

        $stats = [
             'enrolled_courses' => $user->enrollments()->count(),
            'active_courses' => $user->enrollments()->whereNull('completed_at')->count(),
            'completed_courses' => $user->enrollments()->whereNotNull('completed_at')->count(),
        ];

        return $stats;
    }
}
