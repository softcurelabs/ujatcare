<?php

namespace App\Listeners;

use App\Events\InvoiceDeleted;
use App\Services\QuickBook;
use App\Traits\Logger;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class SendDeletedInvoiceToQuickbook
{
    use Logger;
    /**
     * Create the event listener.
     */
    public function __construct(public QuickBook $quickBook)
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(InvoiceDeleted $event): void
    {
        $dataService = $this->quickBook->getDataService();

        $invoice = $dataService->FindbyId('invoice', $event->invoice->quickbook_id);
        if (!$invoice) {
            return;
        }
        $resultingObj = $dataService->Delete($invoice);
        $error = $dataService->getLastError();
        if ($error) {
            $this->logError($error);
        } else {
            Log::info("Invoice Deleted: Created Id={$resultingObj->Id}.");
        }
    }
}
