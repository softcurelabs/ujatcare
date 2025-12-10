<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use App\Models\ListingReview;
use App\Services\ListingReviewService;

class ListingReviewController extends Controller
{
    protected $service;

    public function __construct(ListingReviewService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return response()->json([
            'status' => true,
            'data' => $this->service->all(),
        ]);
    }

    public function store(StoreReviewRequest $request, int $listing_id)
    {
        $review = $this->service->create($request->validated(), $listing_id);

        if (!$review) {
            return response()->json(['message' => 'Listing not found'], 404);
        }

        return response()->json([
            'status' => true,
            'message' => 'Review Created Successfully',
            'data' => $review,
        ], 201);
    }

    public function show(int $id)
    {
        $review = ListingReview::findOrFail($id);

        return response()->json([
            'status' => true,
            'data' => $review,
        ]);
    }

    public function showAll(int $listing_id)
    {
        $reviews = ListingReview::where('listing_id', $listing_id)->get();

        return response()->json([
            'status' => true,
            'data' => $reviews,
        ]);
    }

    public function update(UpdateReviewRequest $request, int $id)
    {
        $review = ListingReview::findOrFail($id);

        $updated = $this->service->update($review, $request->validated());

        return response()->json([
            'status' => true,
            'message' => 'Review Updated Successfully',
            'data' => $updated,
        ]);
    }

    public function destroy(int $id)
    {
        $review = ListingReview::findOrFail($id);
        $this->service->delete($review);

        return response()->json([
            'status' => true,
            'message' => 'Review Deleted Successfully',
        ]);
    }
}
