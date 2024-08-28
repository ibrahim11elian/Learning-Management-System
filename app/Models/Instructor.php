<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    use HasFactory;

    protected $guarded=[];

    public function user(){
        return $this->belongsTo(User::class,'id','instructor_id');
    }

    public function links(){
        return $this->hasMany(InstructorLink::class);
    }

    public function courses(){
        return $this->hasMany(Course::class);
    }


}
