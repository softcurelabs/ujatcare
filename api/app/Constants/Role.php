<?php
namespace App\Constants;

enum Role: string {
    case Admin="admin";
    case Staff="staff";
    case Renter="renter";
}