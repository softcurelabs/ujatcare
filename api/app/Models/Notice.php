<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notice extends Model
{
    use HasFactory;

    protected $table = "notice";

    protected $fillable = [
        'title',
        'user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function save(array $options = array())
    {
        $this->user_id = auth()->id();
        parent::save($options);
    }
}
