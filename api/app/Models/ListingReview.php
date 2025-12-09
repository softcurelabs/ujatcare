<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ListingReview extends Model
{
    use HasFactory;

    protected $fillable = [
        'listing_id',
        'overall_rating',
        'service_rating',
        'hospitality_rating',
        'pricing_rating',
        'name',
        'email',
        'review',
        'img_url',
    ];

    public function listing(): BelongsTo
    {
        return $this->belongsTo(Listing::class);
    }
}
