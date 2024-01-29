<?php

namespace App\Repositories;

use App\Models\Apartment;
use App\Models\Flat;
use App\Models\FlatOwner;
use App\Models\Inventory;
use App\Models\User;

class UserRepository
{
    protected $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function isValid(int $userId, int $flatId, int $apartmentId)
    {

        $query = $this->model->join('flat_owner', "users.id", '=', 'flat_owner.user_id')
            ->join('flat', 'flat_owner.flat_id', '=', 'flat.id')
            ->join('apartment', 'flat.apartment_id', '=', 'apartment.id')
            ->where('user_id', $userId)->where('flat_id', $flatId)->where('apartment_id', $apartmentId);
        return $query->first();
    }
}
