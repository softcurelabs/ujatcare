<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MaintananceConversation extends Model
{
    use HasFactory;
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i',
        'updated_at'  => 'datetime:Y-m-d H:i',
    ];

    protected $fillable = [
        'maintanance_id',
        'sender_id',
        'message'
    ];

    public function sender(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'sender_id');
    }
}
