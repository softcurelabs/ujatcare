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
        Schema::create('maintanance_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained(
                table: 'users',
                indexName: 'user_maintanance_user_id'
            )->noActionOnDelete();
            $table->integer('flat_id')->constrained(
                table: 'flat',
                indexName: 'maintanance_flat_id'
            )->noActionOnDelete();
            $table->tinyInteger('status')->nullable();
            $table->string('tanent_name', 50);
            $table->string('phone', 20);
            $table->tinyInteger('ok_to_enter');
            $table->text('work_requested');
            $table->text('tanent_signature');
            $table->text('service_signature')->nullable();
            $table->tinyInteger('action_taken')->nullable();
            $table->date('action_date')->nullable();
            $table->time('time_in')->nullable();
            $table->time('time_out')->nullable();
            $table->text('work_done')->nullable();
            $table->tinyInteger('chargable')->nullable();
            $table->integer('repaired_by')->nullable()->index("maintanance_repaired_by");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('maintanance_requests');
    }
};
