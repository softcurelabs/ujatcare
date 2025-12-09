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
        Schema::create('listing_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('listing_id')->constrained('listings');
            $table->integer('overall_rating')->nullable();
            $table->integer('service_rating')->nullable();
            $table->integer('hospitality_rating')->nullable();
            $table->integer('pricing_rating')->nullable();
            $table->string('name');
            $table->string('email')->nullable();
            $table->text('review')->nullable();
            $table->string('img_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listing_reviews');
    }
};
