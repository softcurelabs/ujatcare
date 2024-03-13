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
        Schema::create('inspection_documents', function (Blueprint $table) {
            $table->id();
            $table->string('document_name', 128);
            $table->string('document_path', 128);
            $table->foreignId('inspection_id')->constrained(
                table: 'inspections',
                indexName: 'inspection_document_id'
            )->cascadeOnDelete();
            $table->timestamps();
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
