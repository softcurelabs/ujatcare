<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateReviewRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'listing_id' => 'sometimes|exists:listings,id',

            'overall_rating' => 'sometimes|numeric|min:1|max:5',
            'service_rating' => 'sometimes|numeric|min:1|max:5',
            'hospitality_rating' => 'sometimes|numeric|min:1|max:5',
            'pricing_rating' => 'sometimes|numeric|min:1|max:5',

            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email',
            'review' => 'sometimes|string',

            'img_url' => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',
        ];
    }
}
