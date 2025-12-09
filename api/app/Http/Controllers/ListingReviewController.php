<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use App\Models\ListingReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ListingReviewController extends Controller
{
    /**
     * Get all reviews
     */
    public function index()
    {
        return response()->json([
            'status' => true,
            'data'   => ListingReview::latest()->get(),
        ]);
    }

    /**
     * Store a new review
     */
   public function store(Request $request, $listing_id)
{
    $validated = $request->validate([
        'overall_rating'     => 'required|numeric|min:1|max:5',
        'service_rating'     => 'nullable|numeric|min:1|max:5',
        'hospitality_rating' => 'nullable|numeric|min:1|max:5',
        'pricing_rating'     => 'nullable|numeric|min:1|max:5',

        'name'   => 'required|string|max:255',
        'email'  => 'required|email',
        'review' => 'nullable|string',

        'img_url' => 'nullable|image|mimes:jpg,png,jpeg,webp|max:2048',
    ]);
    if (!Listing::where('id', $listing_id)->exists()) {
    return response()->json(['message' => 'Listing not found'], 404);
}


    // ✔ Ensure this listing id is assigned
    $validated['listing_id'] = $listing_id;

    // ✔ Upload image
    if ($request->hasFile('img_url')) {
        $validated['img_url'] = $request->file('img_url')->store('listing_reviews');
    }

    // ✔ Create review
    $review = ListingReview::create($validated);

    return response()->json([
        'status'  => true,
        'message' => 'Review Created Successfully',
        'data'    => $review,
    ], 201);
}


    /**
     * Show single review
     */
    public function show($id)
    {
        $review = ListingReview::findOrFail($id);

        return response()->json([
            'status' => true,
            'data'   => $review,
        ]);
    }

    /**
     * Update review
     */
    public function update(Request $request, $id)
    {
        $review = ListingReview::findOrFail($id);

        $validated = $request->validate([
            'listing_id' => 'sometimes|exists:listings,id',

            'overall_rating'     => 'sometimes|numeric|min:1|max:5',
            'service_rating'     => 'sometimes|numeric|min:1|max:5',
            'hospitality_rating' => 'sometimes|numeric|min:1|max:5',
            'pricing_rating'     => 'sometimes|numeric|min:1|max:5',

            'name'   => 'sometimes|string|max:255',
            'email'  => 'sometimes|email',
            'review' => 'sometimes|string',

            'img_url' => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',
        ]);

        // New image uploaded?
        if ($request->hasFile('img_url')) {
            if ($review->img_url) {
                Storage::delete($review->img_url);
            }

            $validated['img_url'] = $request->file('img_url')->store('listing_reviews');
        }

        $review->update($validated);

        return response()->json([
            'status'  => true,
            'message' => 'Review Updated Successfully',
            'data'    => $review,
        ]);
    }

    /**
     * Delete review
     */
    public function destroy($id)
    {
        $review = ListingReview::findOrFail($id);

        if ($review->img_url) {
            Storage::delete($review->img_url);
        }

        $review->delete();

        return response()->json([
            'status'  => true,
            'message' => 'Review Deleted Successfully',
        ]);
    }
}
