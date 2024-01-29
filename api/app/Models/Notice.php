<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notice extends Model
{
    use HasFactory;

    protected $table = "notice";

    protected $fillable = [
        'title',
        'user_id',
        'schedule_date'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function save(array $options = array())
    {
        if (auth()->id()) {
            $this->user_id = auth()->id();
        }
        if (empty($this->schedule_date)) {
            $this->schedule_date = new DateTime();
        }

        parent::save($options);
    }
}
