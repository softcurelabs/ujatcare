<?php

namespace App\Models;

use App\Constants\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use const App\Constants\Status;

class MaintananceRequest extends Model
{
    public const Status = [
        1 => "Pending",
        2 => "In Progress",
        3 => "On Hold",
        4 => "Done",
    ];
    protected $attributes = [
        'status' => 1,
    ];

    use HasFactory;
    protected $appends = ['status_name'];
    protected $casts = [
        'action_date' => 'datetime:Y-m-d H:i',
        'created_at' => 'datetime:Y-m-d H:i',
        'updated_at'  => 'datetime:Y-m-d H:i',
    ];

    protected $fillable = [
        'user_id',
        'tanent_name',
        'phone',
        'ok_to_enter',
        'work_requested',
        'tanent_signature',
        'service_signature',
        'status',
        'action_taken',
        'action_date',
        'time_in',
        'time_out',
        'work_done',
        'chargable',
        'flat_id',
        'repaired_by'
    ];

    public function getStatusNameAttribute()
    {
        return self::Status[$this->status];
    }
}
