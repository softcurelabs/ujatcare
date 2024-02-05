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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->integer('unit')->nullable();
            $table->string('phone_number', 20)->nullable();
            $table->integer('parking_space')->nullable();
            $table->string('emergency_contact_number', 20)->nullable();
            $table->string('emergency_contact_name', 50)->nullable();
            $table->integer('income_verification')->nullable();
            $table->integer('rent_calculation')->nullable();
            $table->string('language', 10)->nullable();
            $table->string('relationship', 10)->nullable();
            $table->date('movein_date')->nullable();
            $table->text('special_instruction')->nullable();
            $table->string('image_path')->nullable();
            $table->foreignId('user_id')->constrained(
                table: 'users',
                indexName: 'user_profile_user_id'
            )->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
