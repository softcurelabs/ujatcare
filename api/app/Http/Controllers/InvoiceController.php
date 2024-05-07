<?php

namespace App\Http\Controllers;

use App\Constants\Role;
use App\Events\InvoiceCreated;
use App\Events\InvoiceDeleted;
use App\Events\InvoiceUpdated;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class InvoiceController extends Controller
{
    public function list(Request $request)
    {
        $invoice = Invoice::with('items', 'flat', 'flat.apartment')->orderBy('id', 'desc');
        $user = Auth::user();
        if ($user->hasRole([Role::Recident->value])) {
            $invoice->where('user_id', $user->id);
        }
        if ('' != ($request->get('filter', ''))) {
            $invoice->where('status', $request->get('filter', ''));
        }
        return $invoice->paginate($request->get('limit', 10));
    }

    public function create(Request $request): JsonResponse
    {
        $request->validate([
            'tenant' => 'required',
            'due_date' => 'required|date',
            'title' => 'required',
            'total' => 'required|numeric',
        ]);

        $user = User::find($request->get('tenant'));
        if (!$user->flat()) {
            throw ValidationException::withMessages(['Tenent doesn\'t hold any flat.']);
        }
        $invoice = new Invoice();

        $invoice->fill([
            'user_id' => $user->id,
            'flat_id' => $user->flat()->first()->id,
            'status' => 0,
            'due_date' => $request->get('due_date')
        ]);

        $item = new InvoiceItem();
        $item->fill([
            'total' => $request->get('total'),
            'name' => $request->get('title'),
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

    public function sync(int $id)
    {
        $invoice = Invoice::find($id);
        if (!$invoice) {
            throw ValidationException::withMessages(['Invoice doesn\'t exists.']);
        }
        InvoiceUpdated::dispatch($invoice);
        if (!empty($invoice->quickbook_id)) {
            return response()->json([
                'status' => true,
                'message' => 'Invoice Sync Succesfully'
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Error occurred'
        ]);

    }
    public function show(int $id)
    {
        $invoice = Invoice::with('items', 'flat', 'flat.apartment');
        $user = Auth::user();
        if ($user->hasRole([Role::Recident->value])) {
            $invoice->where('user_id', $user->id);
        }
        return $invoice->where('id', $id)->get()->first();
    }

    public function delete(int $id)
    {
        $invoice = Invoice::find($id);
        if (!$invoice) {
            throw ValidationException::withMessages(['Invoice doesn\'t exists.']);
        }

        InvoiceDeleted::dispatch($invoice);

        $invoice->delete();

        return response()->json([
            'status' => true,
            'message' => 'Invoice Deleted Succesfully'
        ]);
    }

    public function edit(int $id, Request $request)
    {
        $invoice = Invoice::find($id);
        if (!$invoice) {
            throw ValidationException::withMessages(['Invoice doesn\'t exists.']);
        }

        $request->validate([
            'invoice_status' => 'required',
            'name' => 'required',
            'due_date' => 'required|date',
            'total' => 'required|numeric',
        ]);
        $invoice->fill([
            'status' => $request->get('invoice_status'),
            'due_date' => $request->get('due_date')
        ]);

        $item = $invoice->items()->first();
        $item->fill([
            'total' => $request->get('total'),
            'name' => $request->get('name'),
            'qty' => 1
        ]);
        $invoice->update();
        $item->update();
        $invoice->refresh();

        InvoiceUpdated::dispatch($invoice);

        return response()->json([
            'status' => true,
            'message' => 'Invoice Updated Succesfully'
        ]);
    }
}
