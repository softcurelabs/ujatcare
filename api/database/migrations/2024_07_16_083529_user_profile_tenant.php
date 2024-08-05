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
        Schema::table('user_profiles', function ($table) {
            $table->string('emergency_contact_email', 256)->nullable();
            $table->integer('base_rent')->nullable();
            $table->renameColumn('rent_calculation', 'total_rent');
            $table->integer('utilities')->nullable();
            $table->integer('maintenance_fees')->nullable();
            $table->integer('property_taxes')->nullable();
            $table->integer('rental_insurance')->nullable();
            $table->integer('parking_fees')->nullable();
            $table->integer('service_fees')->nullable();
            $table->integer('administrative_fees')->nullable();
            $table->integer('storage_fees')->nullable();
            $table->integer('cable_fees')->nullable();
            $table->integer('wifi')->nullable();
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
