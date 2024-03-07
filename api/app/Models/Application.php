<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Application extends Model
{
    use HasFactory;
    protected $fillable = [
        'cash_balance',
        'city',
        'current_address',
        'email',
        'first_language',
        'first_name_first',
        'first_name_second',
        'gender_first',
        'gender_second',
        'hc_age_first',
        'hc_birth_date_first',
        'hc_disability_first',
        'hc_gender_first',
        'hc_last_name_first',
        'hc_relationship_first',
        'hc_wheelchair_first',
        'home_phone_first',
        'home_phone_second',
        'ii_income_first',
        'ii_income_second',
        'ii_income_source_first',
        'ii_last_name_first',
        'landlord_name_first',
        'last_name_first',
        'ii_income_source_second',
        'ii_last_name_second',
        'landlord_name_second',
        'landlord_name_third',
        'last_name_second',
        'landlord_phone_first',
        'landlord_phone_second',
        'landlord_phone_third',
        'monthly_includes',
        'postal_code',
        'prov',
        'long_term',
        'rh_address_first',
        'rh_address_second',
        'rh_address_third',
        'second_language',
        'wish_to_move',
        'monthly_rent',
        'rh_end_date_first',
        'rh_start_date_first',
        'rh_end_date_second',
        'rh_end_date_third',
        'rh_start_date_second',
        'rh_start_date_third',
        'signature_first',
        'stock_deposit',
        'translator_required',
        'under_notice',
        'value_real_estate',
        'hc_first_name_first',
        'accomodation',
        'value_morgages',
        'value_others',
        'hc_first_name_second',
        'hc_last_name_second',
        'hc_age_second',
        'hc_gender_second',
        'hc_relationship_second',
        'hc_disability_second',
        'hc_birth_date_second',
        'hc_wheelchair_second',
        'signature_second'
    ];

    public function documents(): HasMany
    {
        return $this->hasMany(ApplicationDocuments::class, 'application_id', 'id');
    }
}
