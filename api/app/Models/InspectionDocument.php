<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class InspectionDocument extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = "inspection_documents";

    protected $fillable = ['document_name', 'document_path', 'inspection_id'];

    public function inspection(): BelongsTo
    {
        return $this->belongsTo(Inspection::class, 'inspection_id', 'id');
    }
}
