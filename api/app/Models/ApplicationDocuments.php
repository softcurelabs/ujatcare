<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ApplicationDocuments extends Model
{
    use HasFactory;
    protected $table = 'documents';
    protected $fillable = ['document_name', 'application_id'];

    public function application(): BelongsTo
    {
        return $this->belongsTo(Application::class);
    }
}
