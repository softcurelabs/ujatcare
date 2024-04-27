<?php

namespace App\Traits;

use App\Models\Token;
use Illuminate\Database\Eloquent\Relations\HasOne;

trait HasQuickBooksToken
{
    /**
     * Have a quickBooksToken.
     */
    public function quickBooksToken(): HasOne
    {
        return $this->hasOne(Token::class);
    }
}
