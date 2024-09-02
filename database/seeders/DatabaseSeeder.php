<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Certificate;
use App\Models\Enrollment;
use App\Models\Lesson;
use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(20)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $roles = [
            'admin',
            'instructor',
            'student',
        ];

        foreach ($roles as $role) {
            Role::create(['name' => $role]);
        }

        Answer::factory(10)->create();
        Lesson::factory(10)->create();
        Certificate::factory(10)->create();
    }
}
