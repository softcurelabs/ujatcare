<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class ImageUploadService
{
    public function upload($file, $path)
    {
        return $file->store($path);
    }

    public function delete($path)
    {
        if ($path && Storage::exists($path)) {
            Storage::delete($path);
        }
    }
}
