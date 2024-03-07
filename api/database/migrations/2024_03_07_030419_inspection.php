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
        Schema::create('inspections', function (Blueprint $table) {
            $table->id();
            $table->string('title', 128);
            $table->text('description');
            $table->datetime('inspection_date');
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->tinyInteger('status');
            $table->tinyInteger('priority');
            $table->foreignId('flat_id')->constrained(
                table: 'flat',
                indexName: 'inspection_flat_id'
            )->cascadeOnDelete();
            $table->foreignId('inspection_by')->constrained(
                table: 'users',
                indexName: 'staff_user_id'
            )->cascadeOnDelete();
            $table->foreignId('user_id')->constrained(
                table: 'users',
                indexName: 'created_user_id'
            )->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
