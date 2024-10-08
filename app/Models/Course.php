<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function instructor(){
        return $this->belongsTo(Instructor::class,'instructor_id','id');
    }

    public function lessons(){
        return $this->hasMany(Lesson::class);
    }

    public function quizzes(){
        return $this->hasMany(Quiz::class);
    }

    public function enrollments(){
        return $this->hasMany(Enrollment::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
