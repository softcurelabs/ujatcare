<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Notice::orderBy('id')->paginate($request->get('limit', 10));
    }

    /**
     * Display a listing of the resource.
     */
    public function highlight(Request $request)
    {
        return Notice::where('schedule_date', '<=',  \DB::raw('NOW()'))->orderBy('id', 'desc')->paginate($request->get('limit', 5));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:10',

        ]);
        Notice::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Notice Created Successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $notice = Notice::find($id);
        return response()->json($notice);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $request->validate([
            'title' => 'required|min:10'
        ]);
        $notice = Notice::find($id);
        $notice->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Notice Updated Successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(string $id)
    {
        $notice = Notice::find($id);
        $notice->delete();

        return response()->json([
            'status' => true,
            'message' => 'Notice Deleted Successfully',
        ]);
    }
}
