<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateListingRequest extends FormRequest
{
    public function rules() : array
    {
        return [
            'title' => 'sometimes|string|max:255',
            'small_description' => 'sometimes|string',
            'contact_number' => 'sometimes|string',
            'address' => 'sometimes|string',
            'description' => 'sometimes|string',

            'bg_img' => 'nullable|image|max:2048',
            'logo' => 'nullable|image|max:2048',
            'images' => 'sometimes|array',
            'images.*' => 'image|max:4096',

            'faqs' => 'nullable|array',
            'times' => 'nullable|array',
            'prices' => 'nullable|array',

            'categories' => 'nullable|array',
            'facilities' => 'nullable|array',
        ];
    }
}
