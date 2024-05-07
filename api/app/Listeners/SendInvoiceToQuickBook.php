<?php

namespace App\Listeners;

use App\Events\InvoiceCreated;
use App\Services\QuickBook;
use App\Traits\Logger;
use Illuminate\Support\Facades\Log;
use QuickBooksOnline\API\Facades\Invoice;

class SendInvoiceToQuickBook
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
    public function handle(InvoiceCreated $event): void
    {
        $lineItems = [];
        foreach ($event->invoice->items as $item) {
            $lineItems[] = [
                "Amount" => $item->total,
                "DetailType" => "SalesItemLineDetail",
                "SalesItemLineDetail" => [
                    "Qty" => $item->qty,
                ],
                "Description" => $item->name,
                "Id"=> $item->id,
            ];
        }

        $theResourceObj = Invoice::create([
            "Line" => $lineItems,
            "DueDate" => $event->invoice->due_date,
            "CustomerRef" => [
                "value" => $event->invoice->user->profile()->first()->quickbook_id
            ],
            "BillEmail" => [
                "Address" => $event->invoice->user->email
            ],
            "BillEmailCc" => [
                "Address" => env('ADMIN_EMAIL')
            ]
        ]);
        $dataService = $this->quickBook->getDataService();
        $resultingObj = $dataService->Add($theResourceObj);
        $error = $dataService->getLastError();
        if ($error) {
            $this->logError($error);
        } else {
            $dataService->SendEmail($resultingObj);
            $event->invoice->quickbook_id = $resultingObj->Id;
            $event->invoice->save();
            Log::info('Quickbook Synced Invoice: '.$resultingObj->Id. " ".$event->invoice->user->email. " ".$event->invoice->user->profile()->first()->quickbook_id);
        }
    }
}
