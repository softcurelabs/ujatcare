<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class FlatOwner extends Model
{
    use HasFactory;

    protected $table = 'flat_owner';
    protected $fillable = [
        'user_id',
        'flat_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function flat(): HasOne
    {
        return $this->hasOne(Flat::class, 'id', 'flat_id');
    }
}
