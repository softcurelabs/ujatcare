<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inspection extends Model
{
    use HasFactory, SoftDeletes;

    protected $casts = [
        'inspection_date' => 'datetime:Y-m-d H:i',
        'created_at' => 'datetime:Y-m-d H:i',
        'updated_at'  => 'datetime:Y-m-d H:i',
    ];

    protected $fillable = [
        'title',
        'description',
        'notes',
        'status',
        'flat_id',
        'inspection_by',
        'inspection_date',
        'priority'
    ];

    protected $appends = [];

    public function inspectionBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'inspection_by', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function flat(): BelongsTo
    {
        return $this->belongsTo(Flat::class, 'flat_id', 'id');
    }

    public function documents(): HasMany
    {
        return $this->hasMany(InspectionDocument::class);
    }

    public function save(array $options = array())
    {
        if (auth()->id()) {
            $this->user_id = auth()->id();
        }

        parent::save($options);
    }
}
