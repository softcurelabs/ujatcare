<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use App\Models\ListingFaq;
use App\Models\ListingImage;
use App\Models\ListingPrice;
use App\Models\ListingTime;
use Illuminate\Http\Request;
use Storage;

class ListingController extends Controller
{
    /**
     * Display all listings with basic data only.
     */
    public function allListingController()
    {
        $listings = Listing::select([
            'id',
            'title',
            'bg_img',
            'contact_number',
            'address',
            'add_favorite',
            'small_description',
            'logo'
        ])->get();
        
        return response()->json($listings);
    }

    /**
     * Display specific listing with all relationships.
     */
    public function show(int $id)
    {
        $listing = Listing::with([
            'images',
            'faqs',
            'times',
            'prices',
            'categories',
            'reviews',
            'facilities'
        ])->findOrFail($id);

        return response()->json($listing);
    }

    /**
     * Store a newly created listing in storage.
     */
    public function store(Request $request)
{
    $request->validate([
    'title' => 'sometimes|string|max:255',
    'small_description' => 'sometimes|string',
    'contact_number' => 'sometimes|string',
    'address' => 'sometimes|string',
    'description' => 'sometimes|string',

    'bg_img' => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',
    'logo'  => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',
    'images.*' => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',

    'faqs' => 'sometimes|array',
    'faqs.*.question' => 'required_with:faqs|string',
    'faqs.*.answer' => 'required_with:faqs|string',

    'times' => 'sometimes|array',
    'times.*.days' => 'required_with:times|string',
    'times.*.time' => 'required_with:times|string',

    'prices' => 'sometimes|array',
    'prices.*.price_range' => 'required|string',
    'prices.*.price' => 'required|string',

    'categories' => 'sometimes|array',
    'categories.*' => 'integer|exists:categories,id',

    'facilities' => 'sometimes|array',
    'facilities.*' => 'integer|exists:facilities,id',
]);


    // ------------------------------------------
    // 1) STORE LISTING BASIC FIELDS
    // ------------------------------------------

    $listingData = $request->only([
        'title', 'small_description', 'contact_number',
        'address', 'description', 'listing_url', 'email'
    ]);

    // bg image
    if ($request->hasFile('bg_img')) {
        $listingData['bg_img'] = $request->file('bg_img')->store('listings/bg');
    }

    // logo
    if ($request->hasFile('logo')) {
        $listingData['logo'] = $request->file('logo')->store('listings/logo');
    }

    $listing = Listing::create($listingData);

    // ------------------------------------------
    // 2) MULTIPLE IMAGES
    // ------------------------------------------
    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $image) {
            $path = $image->store('listings/images');

            $listing->images()->create([
                'url' => $path
            ]);
        }
    }

    // ------------------------------------------
    // 3) FAQ
    // ------------------------------------------
    if ($request->filled('faqs')) {
        foreach ($request->faqs as $faq) {
            $listing->faqs()->create($faq);
        }
    }

    // ------------------------------------------
    // 4) TIMES
    // ------------------------------------------
    if ($request->filled('times')) {
        foreach ($request->times as $time) {
            $listing->times()->create($time);
        }
    }

    // ------------------------------------------
    // 5) PRICES
    // ------------------------------------------
    if ($request->filled('prices')) {
        foreach ($request->prices as $price) {
            $listing->prices()->create($price);
        }
    }

    // ------------------------------------------
    // 6) CATEGORIES (MANY-TO-MANY)
    // ------------------------------------------
    if ($request->filled('categories')) {
        $listing->categories()->sync($request->categories);
    }

    // ------------------------------------------
    // 7) FACILITIES (MANY-TO-MANY)
    // ------------------------------------------
    if ($request->filled('facilities')) {
        $listing->facilities()->sync($request->facilities);
    }

    // ------------------------------------------
    // FINAL RESPONSE
    // ------------------------------------------

    return response()->json([
        'status' => true,
        'message' => 'Listing Created Successfully',
        'data' => $listing->load([
            'images', 'faqs', 'times', 'prices', 'categories', 'facilities'
        ]),
    ], 201);
}


    /**
     * Update the specified listing in storage.
     */
     public function update(Request $request, int $id)
    {
        $request->validate([
            'title' => 'sometimes|string|max:255',
            'small_description' => 'sometimes|string',
            'contact_number' => 'sometimes|string',
            'address' => 'sometimes|string',
            'description' => 'sometimes|string',

            'bg_img' => 'nullable|image|max:2048',
            'logo'  => 'nullable|image|max:2048',
            'images.*' => 'nullable|image|max:4096',
        ]);

        $listing = Listing::findOrFail($id);

        $data = $request->except(['images', 'faqs', 'times', 'prices', 'categories', 'facilities']);

        // ----------------------------
        //  Update bg image & logo
        // ----------------------------
        if ($request->hasFile('bg_img')) {
            if ($listing->bg_img) Storage::delete($listing->bg_img);
            $data['bg_img'] = $request->file('bg_img')->store('listing_bg');
        }

        if ($request->hasFile('logo')) {
            if ($listing->logo) Storage::delete($listing->logo);
            $data['logo'] = $request->file('logo')->store('listing_logo');
        }

        $listing->update($data);

        // ----------------------------
        //  Replace gallery images (only if new images provided)
        // ----------------------------
        if ($request->hasFile('images')) {
            // delete old
            foreach ($listing->images as $oldImg) {
                Storage::delete($oldImg->url);
                $oldImg->delete();
            }

            // upload new
            foreach ($request->file('images') as $imageFile) {
                ListingImage::create([
                    'listing_id' => $listing->id,
                    'url' => $imageFile->store('listing_images'),
                ]);
            }
        }

        // ----------------------------
        //  Replace FAQs
        // ----------------------------
        if ($request->faqs !== null) {
            $listing->faqs()->delete();
            foreach ($request->faqs as $faq) {
                ListingFaq::create([
                    'listing_id' => $listing->id,
                    'question' => $faq['question'],
                    'answer' => $faq['answer'],
                ]);
            }
        }

        // ----------------------------
        //  Replace Times
        // ----------------------------
        if ($request->times !== null) {
            $listing->times()->delete();
            foreach ($request->times as $time) {
                ListingTime::create([
                    'listing_id' => $listing->id,
                    'days' => $time['days'],
                    'time' => $time['time'],
                ]);
            }
        }

        // ----------------------------
        //  Replace Prices
        // ----------------------------
        if ($request->prices !== null) {
            $listing->prices()->delete();
            foreach ($request->prices as $price) {
                ListingPrice::create([
                    'listing_id' => $listing->id,
                    'price_range' => $price['price_range'] ?? null,
                    'price'       => $price['price'] ?? null,
                ]);
            }
        }

        // ----------------------------
        //  Sync Categories + Facilities
        // ----------------------------
        if ($request->categories !== null) {
            $listing->categories()->sync($request->categories);
        }

        if ($request->facilities !== null) {
            $listing->facilities()->sync($request->facilities);
        }

        return response()->json([
            'status' => true,
            'message' => 'Listing Updated Successfully',
            'data' => $listing->load(['images', 'faqs', 'times', 'prices', 'categories', 'facilities']),
        ]);
    }

    /**
     * Remove the specified listing from storage.
     */
    public function destroy(int $id)
    {
        $listing = Listing::findOrFail($id);
        $listing->delete();

        return response()->json([
            'status' => true,
            'message' => 'Listing Deleted Successfully',
        ]);
    }
    
}
