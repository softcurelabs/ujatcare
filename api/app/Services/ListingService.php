<?php

namespace App\Services;

use App\Http\Requests\StoreListingRequest;
use App\Http\Requests\UpdateListingRequest;
use App\Models\Listing;
use App\Models\ListingFavourite;
use App\Models\ListingImage;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * Service class responsible for managing listing operations.
 *
 * Handles business logic related to creating, retrieving, and updating listings,
 * including associated images, FAQs, times, prices, categories, and facilities.
 * Encapsulates all interactions with the Listing model and related entities,
 * ensuring transactional integrity and proper resource management.
 */
class ListingService
{
    protected $uploader;

    public function __construct(ImageUploadService $uploader)
    {
        $this->uploader = $uploader;
    }

    public function getAllListings(): Collection
    {
        return Listing::select([
            'id', 'title', 'bg_img', 'contact_number',
            'address', 'add_favorite', 'small_description', 'logo',
        ])->get();
    }

    public function getListingDetails(int $id): Listing
    {
        return Listing::with([
            'images', 'faqs', 'times', 'prices',
            'categories', 'reviews', 'facilities',
        ])->findOrFail($id);
    }

    public function createListing(StoreListingRequest $request): Listing
    {
        return DB::transaction(function () use ($request) {

            $data = $request->only([
                'title', 'small_description', 'contact_number',
                'address', 'description', 'listing_url', 'email',
            ]);

            if ($request->hasFile('bg_img')) {
                $data['bg_img'] = $this->uploader->upload($request->bg_img, 'listings/bg');
            }

            if ($request->hasFile('logo')) {
                $data['logo'] = $this->uploader->upload($request->logo, 'listings/logo');
            }

            $listing = Listing::create($data);

            // IMAGES
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $img) {
                    $path = $this->uploader->upload($img, 'listings/images');
                    ListingImage::create([
                        'listing_id' => $listing->id,
                        'url' => $path,
                    ]);
                }
            }

            // FAQs
            if ($request->faqs) {
                foreach ($request->faqs as $faq) {
                    $listing->faqs()->create($faq);
                }
            }

            // TIMES
            if ($request->times) {
                foreach ($request->times as $t) {
                    $listing->times()->create($t);
                }
            }

            // PRICES
            if ($request->prices) {
                foreach ($request->prices as $price) {
                    $listing->prices()->create($price);
                }
            }

            // MANY-TO-MANY
            if ($request->categories) {
                $listing->categories()->sync($request->categories);
            }

            if ($request->facilities) {
                $listing->facilities()->sync($request->facilities);
            }

            return $listing->load(['images', 'faqs', 'times', 'prices', 'categories', 'facilities']);
        });
    }

    public function updateListing(UpdateListingRequest $request, int $id): Listing
    {
        return DB::transaction(function () use ($request, $id) {

            $listing = Listing::findOrFail($id);

            $data = $request->except(['images', 'faqs', 'times', 'prices', 'categories', 'facilities']);

            // BG image
            if ($request->hasFile('bg_img')) {
                $this->uploader->delete($listing->bg_img);
                $data['bg_img'] = $this->uploader->upload($request->bg_img, 'listings/bg');
            }

            // Logo
            if ($request->hasFile('logo')) {
                $this->uploader->delete($listing->logo);
                $data['logo'] = $this->uploader->upload($request->logo, 'listings/logo');
            }

            $listing->update($data);

            // Replace images
            if ($request->hasFile('images')) {
                foreach ($listing->images as $img) {
                    $this->uploader->delete($img->url);
                    $img->delete();
                }

                foreach ($request->file('images') as $img) {
                    ListingImage::create([
                        'listing_id' => $listing->id,
                        'url' => $this->uploader->upload($img, 'listings/images'),
                    ]);
                }
            }

            // Replace all FAQs
            if ($request->faqs !== null) {
                $listing->faqs()->delete();
                foreach ($request->faqs as $faq) {
                    $listing->faqs()->create($faq);
                }
            }

            // Replace Times
            if ($request->times !== null) {
                $listing->times()->delete();
                foreach ($request->times as $time) {
                    $listing->times()->create($time);
                }
            }

            // Replace Prices
            if ($request->prices !== null) {
                $listing->prices()->delete();
                foreach ($request->prices as $price) {
                    $listing->prices()->create($price);
                }
            }

            // Many-to-Many
            if ($request->categories !== null) {
                $listing->categories()->sync($request->categories);
            }

            if ($request->facilities !== null) {
                $listing->facilities()->sync($request->facilities);
            }

            return $listing->load(['images', 'faqs', 'times', 'prices', 'categories', 'facilities']);
        });
    }

    public function deleteListing(int $id): void
    {
        $listing = Listing::findOrFail($id);

        // delete images
        foreach ($listing->images as $img) {
            $this->uploader->delete($img->url);
        }

        $this->uploader->delete($listing->bg_img);
        $this->uploader->delete($listing->logo);

        $listing->delete();
    }

    public function toggleFavourite(int $listingId): ListingFavourite
    {
        $user = Auth::user();

        $fav = ListingFavourite::where('user_id', $user->id)
            ->where('listing_id', $listingId)
            ->first();

        // If already exists → toggle
        if ($fav) {
            $fav->favourite = ! $fav->favourite;
            $fav->save();

            return $fav;
        }

        // If not exists → create as favourite
        return ListingFavourite::create([
            'user_id' => $user->id,
            'listing_id' => $listingId,
            'favourite' => true,
        ]);
    }
}
