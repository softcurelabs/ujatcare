<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Flat extends Model
{
    protected $table = 'flat';
    use HasFactory;
    protected $appends = ['has_occupied'];

    public function apartment(): BelongsTo
    {
        return $this->belongsTo(Apartment::class);
    }

    public function flatOwner(): HasOne
    {
        return $this->hasOne(FlatOwner::class, 'flat_id', 'id');
    }

    public function getHasOccupiedAttribute()
    {
        return $this->flatOwner()->exists();
    }
}
