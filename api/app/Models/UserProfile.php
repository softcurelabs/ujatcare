<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'unit',
        'phone_number',
        'parking_space',
        'emergency_contact_number',
        'emergency_contact_name',
        'income_verification',
        'total_rent',
        'language',
        'locker',
        'special_instruction',
        'user_id',
        'relationship',
        'movein_date',
        'image_path',
        'birth_date',
        'staff_notes',
        'quickbook_id',
        'fob',
        'emergency_contact_email',
        'base_rent',
        'utilities',
        'maintenance_fees',
        'property_taxes',
        'rental_insurance',
        'parking_fees',
        'service_fees',
        'administrative_fees',
        'storage_fees',
        'cable_fees',
        'wifi',
        'of_occupants',
        'preferred_name',
        'apt_address',
        'city',
        'province',
        'postal_code',
        'additional_phone',
        'security_deposit',
        'addtl_deposits',
        'fob_id_2',
        'will',
        'ice_name',
        'emergency_address',
        'family_doctor',
        'medical_alerts',
        'property',
        'floor_plan'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
