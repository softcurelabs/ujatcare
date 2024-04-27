<?php

namespace App\Listeners;

use App\Events\InvoiceCreated;
use App\Services\QuickBook;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use QuickBooksOnline\API\Facades\QuickBookClass;
use QuickBooksOnline\API\Facades\Invoice;
use QuickBooksOnline\API\Facades\Payment;

class SendInvoiceToQuickBook
{
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
            "CustomerRef" => [
                "value" => $event->invoice->user->id
            ],
            "BillEmail" => [
                "Address" => $event->invoice->user->email
            ],
            "BillEmailCc" => [
                "Address" => "mistry.jasmin@gmail.com"
            ]
        ]);
        $dataService = $this->quickBook->getDataService();
        $resultingObj = $dataService->Add($theResourceObj);
        $error = $dataService->getLastError();
        if ($error) {
            echo "The Status code is: " . $error->getHttpStatusCode() . "\n";
            echo "The Helper message is: " . $error->getOAuthHelperError() . "\n";
            echo "The Response message is: " . $error->getResponseBody() . "\n";
        } else {
            $event->invoice->quickbook_id = $resultingObj->Id;
            $event->invoice->save();
        }
    }
}
