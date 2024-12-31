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
        Schema::create('maintanance_conversations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('maintanance_id')->constrained(
                table: 'maintanance_requests'
            )->noActionOnDelete();
            $table->foreignId('sender_id')->constrained(
                table: 'users',
            )->noActionOnDelete();
            $table->text('message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('maintanance_conversations');
    }
};
