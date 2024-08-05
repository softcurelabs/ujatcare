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
        Schema::table('user_profiles', function (Blueprint $table) {
            $table->decimal('parking_space', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('income_verification', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('total_rent', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->string('locker', 255)->nullable(true)->change();
            $table->decimal('base_rent', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('utilities', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('maintenance_fees', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('property_taxes', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('rental_insurance', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('parking_fees', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('service_fees', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('administrative_fees', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('storage_fees', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('cable_fees', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->decimal('wifi', $precision = 10, $scale = 2)->nullable(true)->change();
            $table->unsignedInteger('of_occupants')->nullable(true);
            $table->string('preferred_name', 255)->nullable(true);
            $table->string('apt_address', 255)->nullable(true);
            $table->string('city', 255)->nullable(true);
            $table->string('province', 255)->nullable(true);
            $table->string('postal_code', 255)->nullable(true);
            $table->string('additional_phone', 20)->nullable(true);
            $table->decimal('security_deposit', $precision = 10, $scale = 2)->nullable(true);
            $table->decimal('addtl_deposits', $precision = 10, $scale = 2)->nullable(true);
            $table->string('fob_id_2', 255)->nullable(true);
            $table->string('will', 255)->nullable(true);
            $table->string('ice_name', 255)->nullable(true);
            $table->string('emergency_address', 255)->nullable(true);
            $table->string('family_doctor', 255)->nullable(true);
            $table->string('medical_alerts', 255)->nullable(true);
            $table->string('property', 255)->nullable(true);
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
