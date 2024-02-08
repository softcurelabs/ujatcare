<?php

namespace App\Constants;

enum Status: string
{
    case PENDING = 'Pending';
    case IN_PROGRESS = 'In Progress';
    case ON_HOLD = 'On';
};
