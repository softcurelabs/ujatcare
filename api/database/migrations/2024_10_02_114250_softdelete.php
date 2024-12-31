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
        foreach([
            'apartment',
            'applications',
            'documents',
            'flat',
            'flat_owner',
            'inspection_documents',
            'inspections',
            'invoice_items',
            'invoices',
            'maintanance_requests',
            'notice',
            'user_documents',
            'user_profiles',
            'users'
        ] as $table) {
            Schema::table($table, function (Blueprint $table) {
                $table->softDeletes();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
