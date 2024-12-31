<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Apartment extends Model
{
    protected $table = 'apartment';
    use HasFactory, SoftDeletes;


    public function flats(): HasMany
    {
        return $this->hasMany(Flat::class);
    }
}
