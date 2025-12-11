<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
    ];

    public function listings(): BelongsToMany
    {
        return $this->belongsToMany(Listing::class, 'listing_categories');
    }
}
