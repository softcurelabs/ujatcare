<?php

namespace App\Listeners;

use App\Events\UserUpdated;
use App\Services\QuickBook;
use App\Traits\Logger;
use Illuminate\Support\Facades\Log;
use QuickBooksOnline\API\Facades\Customer;

class SendUserToQuickbook
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
    public function handle(UserUpdated $event): void
    {
        $user = $event->user;

        $dataService = $this->quickBook->getDataService();
        try {
            $entities = $dataService->Query("select * from Customer where PrimaryEmailAddr='{$user->user->email}'");
            $error = $dataService->getLastError();
            if ($error) {
                $this->logError($error);
                return;
            }

            if (empty($entities)) {
                $theCustomer = Customer::create($user->user->quickbooks);
                $resultingCustomerObj = $dataService->Add($theCustomer);
                $error = $dataService->getLastError();
                if ($error) {
                    $this->logError($error);
                    return;
                }
                $user->quickbook_id = (int) $resultingCustomerObj->Id;
                Log::info('Quickbook Synced Customer: '.$resultingCustomerObj->Id);
                $user->update();
                return;
            }

            $theCustomer = reset($entities);
            $updateCustomer = Customer::update($theCustomer, [
                //If you are going to do a full Update, set sparse to false
                'sparse' => 'false',
                ...$user->user->quickbooks
            ]);

            $updated = $dataService->Update($updateCustomer);
            $user->quickbook_id =  (int) $updated->Id;
            $user->update();
            $error = $dataService->getLastError();
            if ($error) {
                $this->logError($error);
            }
            Log::info('Quickbook Synced Customer: '.$updated->Id);
        } catch (\Throwable $e) {
            Log::error($e);
        }

        return;
    }
}
