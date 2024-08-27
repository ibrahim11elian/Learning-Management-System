<?php

namespace App\Policies;

use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class LessonPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user,Course $course): bool
    {
        // Check if the user is an admin
        if ($user->role == 'admin') {
            return true;
        }

        // Check if the user is an instructor
        if ($user->role == 'instructor') {
            return $user->id == $course->instructor_id;
        }

        // if the user is a student
        // Find the user's enrollment in the course
        $enrollment = Enrollment::where('student_id', $user->id)
                                ->where('course_id', $course->id)
                                ->first();

        // Return true if the user is enrolled in the course, otherwise false
        return !empty($enrollment);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Lesson $lesson): bool
    {
        return $this->viewAny($user,$lesson->course);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user,Course $course): bool
    {
        return $user->role == 'instructor' && $user->id == $course->instructor_id;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user,Lesson $lesson): bool
    {
       return $user->role == 'instructor' && $user->id == $lesson->course->instructor_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Lesson $lesson): bool
    {
        return $this->update($user,$lesson);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Lesson $lesson): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Lesson $lesson): bool
    {
        //
    }
}
