<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreListingRequest;
use App\Http\Requests\UpdateListingRequest;
use App\Services\ListingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ListingController extends Controller
{
    protected $listingService;

    public function __construct(ListingService $listingService)
    {
        $this->listingService = $listingService;
    }

    public function allListingController(): JsonResponse
    {
        return response()->json(
            $this->listingService->getAllListings()
        );
    }

    public function show(int $id): JsonResponse
    {
        return response()->json(
            $this->listingService->getListingDetails($id)
        );
    }

    public function store(StoreListingRequest $request): JsonResponse
    {
        $listing = $this->listingService->createListing($request);

        return response()->json([
            'status' => true,
            'message' => 'Listing Created Successfully',
            'data' => $listing,
        ], 201);
    }

    public function update(UpdateListingRequest $request, int $id): JsonResponse
    {
        $listing = $this->listingService->updateListing($request, $id);

        return response()->json([
            'status' => true,
            'message' => 'Listing Updated Successfully',
            'data' => $listing,
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->listingService->deleteListing($id);

        return response()->json([
            'status' => true,
            'message' => 'Listing Deleted Successfully',
        ]);
    }

    public function toggleFavourite(int $listingId): JsonResponse
    {
        Log::info('Listing ID: '.$listingId.' User ID: '.Auth::user()->id);
        $favourite = $this->listingService->toggleFavourite($listingId);

        return response()->json([
            'status' => true,
            'message' => $favourite->favourite
                ? 'Listing added to favourites'
                : 'Listing removed from favourites',
            'data' => $favourite,
        ]);
    }
}
