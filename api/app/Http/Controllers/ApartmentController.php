<?php

namespace App\Http\Controllers;

use App\Models\Apartment;
use Illuminate\Http\Request;

class ApartmentController extends Controller
{
    public function index()
    {
        return response()->json(Apartment::all()->load(['flats']));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:apartment,name',
        ]);

        $apartment = new Apartment();
        $apartment->name = $request->get('name');
        $apartment->save();

        return response()->json([
            'status' => true,
            'message' => 'Apartment added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|unique:apartment,name,'.$id.',id',
        ]);

        $apartment = Apartment::find($id);
        $apartment->name = $request->get('name');
        $apartment->save();

        return response()->json([
            'status' => true,
            'message' => 'Apartment updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $apartment = Apartment::find($id);
        $apartment->delete();

        return response()->json([
            'status' => true,
            'message' => 'Apartment deleted successfully'
        ]);
    }
}
