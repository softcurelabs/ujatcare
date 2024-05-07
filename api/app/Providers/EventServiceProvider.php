<?php

namespace App\Providers;

use App\Events\InvoiceCreated;
use App\Events\InvoiceDeleted;
use App\Events\InvoiceUpdated;
use App\Events\UserUpdated;
use App\Listeners\SendDeletedInvoiceToQuickbook;
use App\Listeners\SendInvoiceToQuickBook;
use App\Listeners\SendUpdatedInvoiceToQuickbook;
use App\Listeners\SendUserToQuickbook;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        InvoiceCreated::class => [
            SendInvoiceToQuickBook::class,
        ],
        InvoiceUpdated::class => [
            SendUpdatedInvoiceToQuickbook::class,
        ],
        InvoiceDeleted::class => [
            SendDeletedInvoiceToQuickbook::class,
        ],
        UserUpdated::class => [
            SendUserToQuickbook::class,
        ]
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
