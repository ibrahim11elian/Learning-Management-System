<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enrollment>
 */
class EnrollmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'student_id'=>User::factory()->create([
                'role'=>'student',
            ]),
            'course_id'=>Course::factory(),
            'progress'=>$this->faker->randomFloat(2,0,9.0),
        ];
    }
}
