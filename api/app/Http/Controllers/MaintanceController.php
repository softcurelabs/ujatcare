<?php

namespace App\Http\Controllers;

use App\Models\MaintananceRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class MaintanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function list(Request $request)
    {
        $user = Auth::user();

        return MaintananceRequest::select('maintanance_requests.*', 'f1.name as flat_name', 'u1.first_name as user_name', 'u2.first_name as repaired_username')
            ->join('users as u1', 'maintanance_requests.user_id', 'u1.id')
            ->join('flat as f1', 'maintanance_requests.flat_id', 'f1.id')
            ->leftJoin('users as u2', 'maintanance_requests.repaired_by', 'u2.id')
            ->where('user_id', $user->id)->orderBy('id', 'desc')->paginate($request->get('limit', 10));
    }

    public function listAll(Request $request)
    {
        return MaintananceRequest::select('maintanance_requests.*', 'f1.name as flat_name', 'u1.first_name as user_name', 'u2.first_name as repaired_username')
            ->join('users as u1', 'maintanance_requests.user_id', 'u1.id')
            ->join('flat as f1', 'maintanance_requests.flat_id', 'f1.id')
            ->leftJoin('users as u2', 'maintanance_requests.repaired_by', 'u2.id')
            ->orderBy('id', 'desc')->paginate($request->get('limit', 10));
    }

    public function store(Request $request)
    {
        $validatedData = $this->validate($request, [
            'user_id' => "required|in:" . Auth::id(),
            'flat_id' => 'exists:App\Models\Flat,id',
            'tanent_name' => 'required|max:50',
            'phone' => 'required|min:10|max:10',
            'ok_to_enter' => 'required|in:1,2',
            'work_requested' => 'required|min:5',
            'tanent_signature' => 'required'
        ]);

        MaintananceRequest::create($validatedData);

        return response()->json([
            'status' => true,
            'message' => 'Maintanance Request created successfully',
        ]);
    }

    public function update(Request $request, int $id)
    {
        $validatedData = $this->validate($request, [
            'tanent_name' => 'required|max:50',
            'phone' => 'required|min:10|max:10',
            'ok_to_enter' => 'required|in:1,2',
            'work_requested' => 'required|min:5',
            'tanent_signature' => 'required'
        ]);

        $maintananceRequest = MaintananceRequest::find($id);
        if ($maintananceRequest->status != 1) {
            return response()->json([
                'status' => false,
                'message' => "You can't edit already in progress ticket"
            ]);
        }
        $maintananceRequest->update($validatedData);

        return response()->json([
            'status' => true,
            'message' => 'Maintanance Request Updated Successfully',
        ]);
    }


    public function updateAdmin(Request $request, int $id)
    {
        $validation = [
            'repaired_by' => "required|in:" . Auth::id(),
            'status' => 'required|in:1,2,3,4',
            'action_taken' => 'required|in:1,2,3,4',
            'chargable' => 'required|in:1,2',
            'work_done' => 'required|min:5',
            'action_date' => 'required',
            'time_in' => 'required',
            'time_out' => 'required',
            'service_signature' => 'required'
        ];

        $validatedData = $this->validate($request, $validation);

        $maintananceRequest = MaintananceRequest::find($id);
        $maintananceRequest->update($validatedData);

        return response()->json([
            'status' => true,
            'message' => 'Maintanance Request Updated Successfully',
        ]);
    }


    public function dashboard()
    {
        return response()->json([
            'total' => MaintananceRequest::count(),
            'close' => MaintananceRequest::where('status', 4)->count(),
            'pending' => MaintananceRequest::where('status', 1)->count(),
            'in_progress' => MaintananceRequest::where('status', 2)->count(),
        ]);
    }

    public function show(int $id)
    {
        $maintananceRequest = MaintananceRequest::find($id);
        return response()->json($maintananceRequest);
    }
}
