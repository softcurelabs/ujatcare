<?php

namespace App\Services;

use App\Models\Listing;
use App\Models\ListingReview;
use Illuminate\Support\Facades\Storage;

class ListingReviewService
{
    public function all()
    {
        return ListingReview::latest()->get();
    }

    public function create(array $data, int $listing_id)
    {
        if (!Listing::find($listing_id)) {
            return null;
        }

        $data['listing_id'] = $listing_id;

        if (isset($data['img_url']) && $data['img_url'] instanceof \Illuminate\Http\UploadedFile) {
            $data['img_url'] = $data['img_url']->store('listing_reviews');
        }

        return ListingReview::create($data);
    }

    public function update(ListingReview $review, array $data)
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

    public function delete(ListingReview $review)
    {
        if ($review->img_url) {
            Storage::delete($review->img_url);
        }

        return $review->delete();
    }
}
