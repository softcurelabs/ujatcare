<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Flat extends Model
{
    protected $table = 'flat';
    use HasFactory;

    public function apartment(): BelongsTo
    {
        return $this->belongsTo(Apartment::class);
    }
}
