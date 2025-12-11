<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

/**
 * Service for handling image uploads and deletions.
 *
 * This class provides methods to upload images to a specified storage path
 * and to delete images from storage. It uses Laravel's Storage facade for
 * file operations.
 *
 * Usage notes:
 * - The `upload` method expects a file object (e.g., an instance of UploadedFile)
 *   and a target path. It returns the stored file path.
 * - The `delete` method removes the file at the given path if it exists.
 * - Ensure proper validation of files before uploading.
 */
class ImageUploadService
{
    public function upload($file, $path) : string|false
    {
        return $file->store($path);
    }

    public function delete($path) : void
    {
        if ($path && Storage::exists($path)) {
            Storage::delete($path);
        }
    }
}
