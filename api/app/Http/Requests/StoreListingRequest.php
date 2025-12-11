<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreListingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules() : array
    {
        return [
            'title' => 'required|string|max:255',
            'small_description' => 'nullable|string',
            'contact_number' => 'nullable|string',
            'address' => 'nullable|string',
            'description' => 'nullable|string',

            'bg_img' => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',
            'logo' => 'sometimes|image|mimes:jpg,png,jpeg,webp|max:2048',
            'images' => 'sometimes|array',
            'images.*' => 'image|mimes:jpg,png,jpeg,webp|max:2048',

            'faqs' => 'sometimes|array',
            'faqs.*.question' => 'required|string',
            'faqs.*.answer' => 'required|string',

            'times' => 'sometimes|array',
            'times.*.days' => 'required|integer|min:1|max:7',
            'times.*.time' => 'required|date_format:H:i',

            'prices' => 'sometimes|array',
            'prices.*.price_range' => 'required|string',
            'prices.*.price' => 'required|numeric|min:0|max:99999999.99',

            'categories' => 'sometimes|array',
            'categories.*' => 'integer|exists:categories,id',

            'facilities' => 'sometimes|array',
            'facilities.*' => 'integer|exists:facilities,id',
        ];
    }
}
