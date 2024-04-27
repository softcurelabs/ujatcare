<?php

namespace App\Http\Controllers;

use App\Events\InvoiceCreated;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class InvoiceController extends Controller
{
    public function list()
    {
    }

    public function create(Request $request): JsonResponse
    {
        $request->validate([
            'user_id' => 'required',
            'month' => 'required',
            'year' => 'required',
        ]);

        $date = Carbon::createFromFormat('Y-m-d', "{$request->get('year')}-{$request->get('month')}-01");

        $user = User::find($request->get('user_id'));
        if (!$user->flat()) {
            throw ValidationException::withMessages(['Tenent doesn\'t hold any flat.']);
        }
        $invoice = new Invoice();

        $invoice->fill([
            'user_id' => $user->id,
            'flat_id' => $user->flat()->first()->id,
            'status' => 0,
            'due_date' => Carbon::now()->endOfMonth()
        ]);

        $item = new InvoiceItem();
        $item->fill([
            'total' => 120,
            'name' => 'Rent for ' . $date->format('m') . ' ' . $date->format('Y'),
            'qty' => 1
        ]);
        $invoice->save();
        $invoice->items()->save($item);
        $invoice->refresh();

        InvoiceCreated::dispatch($invoice);

        return response()->json([
            'status' => true,
            'message' => 'Invoice Created Succesfully'
        ]);
    }

    public function bulkInvoice()
    {
    }

    public function show()
    {
    }

    public function edit()
    {
    }
}
