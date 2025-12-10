<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'small_description',
        'contact_number',
        'address',
        'description',
        'listing_url',
        'email',
        'add_favorite',
        'bg_img',
        'logo',
    ];

    public function images(): HasMany
    {
        return $this->hasMany(ListingImage::class);
    }

    public function faqs(): HasMany
    {
        return $this->hasMany(ListingFaq::class);
    }

    public function times(): HasMany
    {
        return $this->hasMany(ListingTime::class);
    }

    public function prices(): HasMany
    {
        return $this->hasMany(ListingPrice::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'listing_categories');
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(ListingReview::class);
    }

    public function facilities(): BelongsToMany
    {
        return $this->belongsToMany(Facility::class, 'listing_facilities');
    }
}
