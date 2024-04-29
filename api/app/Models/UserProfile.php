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
        'rent_calculation',
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
        'fob'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
