<?php

namespace App\Http\Controllers;

use App\Services\QuickBook;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class QuickbookController extends Controller
{
    public function connect(QuickBook $quickBook) : JsonResponse {
        if ($quickBook->hasValidRefreshToken()) {
            return response()->json([
                'status' => $quickBook->hasValidRefreshToken(),
            ]);
        }

        return response()->json([
            'status' => $quickBook->hasValidRefreshToken(),
            'url' => $quickBook->authorizationUri()
        ]);
    }

    public function authorise(QuickBook $quickBook, Request $request) : JsonResponse {
        $quickBook->exchangeCodeForToken($request->get('code'), $request->get('realmId'));
        return response()->json([
            'status' => $quickBook->hasValidAccessToken()
        ]);
    }
}
