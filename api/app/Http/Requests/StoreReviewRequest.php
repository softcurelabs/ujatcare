<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreReviewRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'overall_rating' => 'required|numeric|min:1|max:5',
            'service_rating' => 'nullable|numeric|min:1|max:5',
            'hospitality_rating' => 'nullable|numeric|min:1|max:5',
            'pricing_rating' => 'nullable|numeric|min:1|max:5',

            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'review' => 'nullable|string',

            'img_url' => 'nullable|image|mimes:jpg,png,jpeg,webp|max:2048',
        ];
    }
}
