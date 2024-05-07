<?php

namespace App\Traits;

use Illuminate\Support\Facades\Log;

trait Logger
{
    public function logError($error)
    {
        Log::error("QuickBook error => {$error->getHttpStatusCode()} {$error->getOAuthHelperError()} {$error->getResponseBody()}");
    }
}
