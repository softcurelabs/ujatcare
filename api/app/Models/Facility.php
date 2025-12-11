<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Facility extends Model
{
    use HasFactory;

    protected $fillable = [
        'facility',
    ];

    public function listings(): BelongsToMany
    {
        return $this->belongsToMany(Listing::class, 'listing_facilities');
    }
}
