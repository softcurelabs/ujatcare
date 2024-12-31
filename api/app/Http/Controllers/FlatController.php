<?php

namespace App\Http\Controllers;

use App\Models\Apartment;
use App\Models\Flat;
use App\Models\FlatOwner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class FlatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $apartments = Apartment::with(['flats' => function($query) {
            $query->orderByRaw('lpad(name, 10, 0) asc');
        }])->get();
        return response()->json($apartments);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:flat,name',
            'apartment_id' => 'required|exists:apartment,id'
        ]);

        $flat = new Flat();
        $flat->apartment_id = $request->get('apartment_id');
        $flat->name = $request->get('name');
        $flat->save();

        return response()->json([
            'status' => true,
            'message' => 'Suite added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $flat = Flat::find($id);

        return response()->json($flat);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|unique:flat,name',
            'apartment_id' => 'required|exists:apartment,id'
        ]);

        $flat = Flat::find($id);
        $flat->apartment_id = $request->get('apartment_id');
        $flat->name = $request->get('name');
        $flat->save();

        return response()->json([
            'status' => true,
            'message' => 'Suite added successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $flat = Flat::find($id);
        $flat->delete();

        return response()->json([
            'status' => true,
            'message' => 'Suite deleted successfully'
        ]);
    }
}
