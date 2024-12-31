<?php

namespace App\Constants;

enum Role: string
{
    case Admin = "admin";
    case Staff = "staff";
    case Recident = "recident";
    case MaintenanceStaff = "maintenance-staff";
}
