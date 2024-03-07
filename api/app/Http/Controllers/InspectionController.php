<?php

namespace App\Http\Controllers;

use App\Models\Inspection;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class InspectionController extends Controller
{
    public function list(Request $request): LengthAwarePaginator
    {
        return Inspection::with(['user:id,name,email', 'inspectionBy:id,name,email', 'flat:id,name'])
            ->orderBy('id')
            ->paginate($request->get('limit', 10));
    }

    public function create(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|max:128',
            'description' => 'required',
            'inspection_date' => 'required',
            'status' => 'required|in:1,2,3',
            'priority' => 'required|in:1,2,3',
            'flat_id' => 'required|exists:flat,id',
            'inspection_by' => 'required|exists:users,id',
            // 'note' => 'required',
        ]);

        Inspection::create($request->all());

        return response()->json(['status' => true, 'message' => 'Inspection Created successfully']);
    }


    public function show(int $id)
    {
        try {
            $inspection = Inspection::findorFail($id);
        } catch (Exception $e) {
            throw ValidationException::withMessages(['title' => 'Inspection doesn\'t exists']);
        }

        return response()->json($inspection);
    }

    public function update(Request $request, int $id)
    {
        try {
            $inspection = Inspection::findorFail($id);
        } catch (Exception $e) {
            throw ValidationException::withMessages(['title' => 'Inspection doesn\'t exists']);
        }

        $validations = [
            'title' => 'required|max:128',
            'description' => 'required',
            'inspection_date' => 'required',
            'status' => 'required|in:1,2,3',
            'priority' => 'required|in:1,2,3',
            'flat_id' => 'required|exists:flat,id',
            // 'note' => 'required',
        ];

        if ('3' == $request->get('status')) {
            $validations = array_merge($validations, ['notes' => 'required']);
        }

        $request->validate($validations);
        $inspection->update($request->all());

        return response()->json(['status' => true, 'message' => 'Inspection updated successfully']);
    }

    public function delete(int $id)
    {
        try {
            $inspection = Inspection::findorFail($id);
        } catch (Exception $e) {
            throw ValidationException::withMessages(['title' => 'Inspection doesn\'t exists']);
        }
        $inspection->delete();

        return response()->json([
            'status' => true,
            'message' => 'Inspection Deleted Successfully',
        ]);
    }
}
