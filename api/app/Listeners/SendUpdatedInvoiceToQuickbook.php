<?php

namespace App\Listeners;

use App\Events\InvoiceUpdated;
use App\Services\QuickBook;
use App\Traits\Logger;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use QuickBooksOnline\API\Facades\Invoice;

class SendUpdatedInvoiceToQuickbook
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
    public function handle(InvoiceUpdated $event): void
    {
        $invoice = $event->invoice;

        $dataService = $this->quickBook->getDataService();
        $lineItems = [];
        foreach ($invoice->items as $item) {
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
        try {
            $entities = $dataService->FindById("Invoice", $invoice->quickbook_id);
            $error = $dataService->getLastError();
            if ($error) {
                $this->logError($error);
                return;
            }

            if (empty($entities)) {
                $theResourceObj = Invoice::create([
                    "Line" => $lineItems,
                    "DueDate" => $invoice->due_date,
                    "CustomerRef" => [
                        "value" => $invoice->user->profile()->first()->quickbook_id
                    ],
                    "BillEmail" => [
                        "Address" => $invoice->user->email
                    ],
                    "BillEmailCc" => [
                        "Address" => env('ADMIN_EMAIL')
                    ]
                ]);
                $resultingObj = $dataService->Add($theResourceObj);
                $error = $dataService->getLastError();
                if ($error) {
                    $this->logError($error);
                } else {
                    $invoice->quickbook_id = $resultingObj->Id;
                    $invoice->update();
                    $dataService->SendEmail($resultingObj);
                    Log::info('Quickbook Synced Invoice: '.$resultingObj->Id. " ".$invoice->user->email. " ".$invoice->user->profile()->first()->quickbook_id);
                }
                return;
            }

            $invoiceObj = $entities;
            $updatedInvoice = Invoice::update($invoiceObj, [
                "sparse" => true,
                "Line" => $lineItems,
                "DueDate" => $invoice->due_date,
            ]);
            $updatedResult = $dataService->Update($updatedInvoice);
            $invoice->quickbook_id = $updatedResult->Id;
            $invoice->update();
            $error = $dataService->getLastError();
            if ($error) {
                $this->logError($error);
            }
            $dataService->SendEmail($updatedResult);
            Log::info('Quickbook Synced Invoice: '.$updatedResult->Id. " ".$invoice->user->email. " ".$invoice->user->profile()->first()->quickbook_id);
        } catch (\Throwable $e) {
            Log::error($e);
        }

    }
}
