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
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->integer('cash_balance');
            $table->string('city', 128);
            $table->string('current_address', 255);
            $table->string('email', 128);
            $table->string('first_language', 128);
            $table->string('first_name_first', 128);
            $table->string('first_name_second', 128)->nullable();
            $table->tinyInteger('gender_first');
            $table->tinyInteger('gender_second')->nullable();
            $table->tinyInteger('hc_age_first', false, true);
            $table->date('hc_birth_date_first');
            $table->string('hc_disability_first', 128);
            $table->tinyInteger('hc_gender_first');
            $table->string('hc_last_name_first', 128);
            $table->string('hc_first_name_first', 128);
            $table->string('hc_relationship_first', 128);
            $table->tinyInteger('hc_wheelchair_first');
            $table->tinyInteger('hc_age_second', false, true)->nullable();
            $table->date('hc_birth_date_second')->nullable();
            $table->string('hc_disability_second', 128)->nullable();
            $table->tinyInteger('hc_gender_second')->nullable();
            $table->string('hc_last_name_second', 128)->nullable();
            $table->string('hc_first_name_second', 128)->nullable();
            $table->string('hc_relationship_second', 128)->nullable();
            $table->tinyInteger('hc_wheelchair_second')->nullable();
            $table->string('home_phone_first', 10);
            $table->string('home_phone_second', 10)->nullable();
            $table->integer('ii_income_first');
            $table->integer('ii_income_second')->nullable();
            $table->string('ii_income_source_first', 128);
            $table->string('ii_income_source_second', 128)->nullable();
            $table->string('ii_last_name_first', 128);
            $table->string('ii_last_name_second', 128)->nullable();
            $table->string('landlord_name_first', 128);
            $table->string('landlord_name_second', 128)->nullable();
            $table->string('landlord_name_third', 128)->nullable();
            $table->string('landlord_phone_first', 10);
            $table->string('landlord_phone_second', 10)->nullable();
            $table->string('landlord_phone_third', 10)->nullable();
            $table->string('last_name_first', 128);
            $table->string('last_name_second', 128)->nullable();
            $table->tinyInteger('long_term');
            $table->string('monthly_includes', 128);
            $table->integer('monthly_rent');
            $table->string('postal_code', 128);
            $table->string('prov', 128);
            $table->string('rh_address_first', 256);
            $table->string('rh_address_second', 256)->nullable();
            $table->string('rh_address_third', 256)->nullable();
            $table->date('rh_end_date_first');
            $table->date('rh_end_date_second')->nullable();
            $table->date('rh_end_date_third')->nullable();
            $table->date('rh_start_date_first');
            $table->date('rh_start_date_second')->nullable();
            $table->date('rh_start_date_third')->nullable();
            $table->string('second_language', 128)->nullable();
            $table->text('signature_first');
            $table->text('signature_second')->nullable();
            $table->integer('stock_deposit');
            $table->tinyInteger('translator_required');
            $table->tinyInteger('under_notice');
            $table->integer('value_real_estate');
            $table->integer('value_morgages');
            $table->integer('value_others');
            $table->string('accomodation', 128);
            $table->string('wish_to_move')->nullable();
            $table->tinyInteger('status')->default(0);
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
