<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreListingRequest extends FormRequest
{
    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'small_description' => 'nullable|string',
            'contact_number' => 'nullable|string',
            'address' => 'nullable|string',
            'description' => 'nullable|string',

            'bg_img' => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',
            'logo'   => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',
            'images' => 'sometimes|array',
            'images.*' => 'image|mimes:jpg,png,jpeg,webp|max:2048',

            'faqs' => 'sometimes|array',
            'faqs.*.question' => 'required_with:faqs|string',
            'faqs.*.answer'   => 'required_with:faqs|string',

            'times' => 'sometimes|array',
            'times.*.days' => 'required|string',
            'times.*.time' => 'required|string',

            'prices' => 'sometimes|array',
            'prices.*.price_range' => 'required|string',
            'prices.*.price' => 'required|string',

            'categories' => 'sometimes|array',
            'categories.*' => 'integer|exists:categories,id',

            'facilities' => 'sometimes|array',
            'facilities.*' => 'integer|exists:facilities,id',
        ];
    }
}
