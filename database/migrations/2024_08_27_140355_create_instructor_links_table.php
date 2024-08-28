<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('instructor_links', function (Blueprint $table) {
            $table->id();
            $table->foreignId('instructor_id')->references('id')->on('instructors')->cascadeOnDelete();
            $table->enum('social_network',['facebook','x','instagram','youtube','whatsapp','website']);
            $table->string('url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructor_links');
    }
};
