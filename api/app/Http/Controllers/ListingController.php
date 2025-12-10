<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreListingRequest;
use App\Http\Requests\UpdateListingRequest;
use App\Services\ListingService;

class ListingController extends Controller
{
    protected $listingService;

    public function __construct(ListingService $listingService)
    {
        $this->listingService = $listingService;
    }

    public function allListingController()
    {
        return response()->json(
            $this->listingService->getAllListings()
        );
    }

    public function show(int $id)
    {
        return response()->json(
            $this->listingService->getListingDetails($id)
        );
    }

    public function store(StoreListingRequest $request)
    {
        $listing = $this->listingService->createListing($request);

        return response()->json([
            'status' => true,
            'message' => 'Listing Created Successfully',
            'data' => $listing,
        ], 201);
    }

    public function update(UpdateListingRequest $request, int $id)
    {
        $listing = $this->listingService->updateListing($request, $id);

        return response()->json([
            'status' => true,
            'message' => 'Listing Updated Successfully',
            'data' => $listing,
        ]);
    }

    public function destroy(int $id)
    {
        $this->listingService->deleteListing($id);

        return response()->json([
            'status' => true,
            'message' => 'Listing Deleted Successfully',
        ]);
    }
}
