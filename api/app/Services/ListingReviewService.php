<?php

namespace App\Services;

use App\Models\Listing;
use App\Models\ListingReview;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;

/**
 * Service class responsible for managing listing review operations.
 *
 * Handles creation, retrieval, updating, and deletion of listing reviews,
 * including associated image uploads and storage management.
 */
class ListingReviewService
{
    public function all(): Collection
    {
        return ListingReview::latest()->get();
    }

    public function create(array $data, int $listing_id): ?ListingReview
    {
        if (! Listing::find($listing_id)) {
            return null;
        }

        $data['listing_id'] = $listing_id;

        if (isset($data['img_url']) && $data['img_url'] instanceof \Illuminate\Http\UploadedFile) {
            $data['img_url'] = $data['img_url']->store('listing_reviews');
        }

        return ListingReview::create($data);
    }

    public function update(ListingReview $review, array $data): ListingReview
    {
        if (isset($data['img_url']) && $data['img_url'] instanceof \Illuminate\Http\UploadedFile) {
            if ($review->img_url) {
                Storage::delete($review->img_url);
            }
            $data['img_url'] = $data['img_url']->store('listing_reviews');
        }

        $review->update($data);

        return $review;
    }

    public function delete(ListingReview $review): void
    {
        if ($review->img_url) {
            Storage::delete($review->img_url);
        }

        $review->delete();
    }
}
