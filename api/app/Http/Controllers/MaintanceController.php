<?php

namespace App\Http\Controllers;

use App\Constants\Role;
use App\Models\MaintananceConversation;
use App\Models\MaintananceRequest;
use App\Models\User;
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
        $queryBuilder = MaintananceRequest::select('maintanance_requests.*', 'f1.name as flat_name', 'u1.first_name as user_name', 'u2.first_name as repaired_username')
        ->join('users as u1', 'maintanance_requests.user_id', 'u1.id')
        ->join('flat as f1', 'maintanance_requests.flat_id', 'f1.id')
        ->leftJoin('users as u2', 'maintanance_requests.repaired_by', 'u2.id')
        ->orderBy('id', 'desc');
        $status = $request->get('status');
        if ($status != "" && in_array($status, [0, 1, 2])) {
            $queryBuilder->where('status', $status);
        }
        return $queryBuilder->paginate($request->get('limit', 10));
    }

    public function store(Request $request)
    {
        $validatedData = $this->validate($request, [
            'user_id' => "required",
            'flat_id' => 'exists:App\Models\Flat,id',
            'tanent_name' => 'required|max:50',
            'phone' => 'required|min:10|max:10',
            'ok_to_enter' => 'required|in:1,2',
            'work_requested' => 'required|min:5',
            // 'tanent_signature' => 'required'
        ]);
        $user = User::find($request->get('user_id'));
        $loggedInUser = Auth::user();
        if ($loggedInUser->hasRole(Role::Recident) && $user->id != Auth::id()) {
            return response()->json([
                'status' => false,
                'message' => 'You can only create ticket for yourself'
            ]);
        }

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
            // 'tanent_signature' => 'required'
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
            'repaired_by' => "required|exists:App\Models\User,id",
            'status' => 'required|in:1,2,3,4',
            'action_taken' => 'required|in:1,2,3,4',
            'chargable' => 'required|in:1,2',
            'work_done' => 'required|min:5',
            'action_date' => 'required',
            'time_in' => 'required',
            'time_out' => 'required',
            // 'service_signature' => 'required'
        ];

        $validatedData = $this->validate($request, $validation);

        $maintananceRequest = MaintananceRequest::find($id);
        $maintananceRequest->update($validatedData);
        $status = '';
        switch ($request->get('status')) {
            case 1:
                $status = 'Pending';
                break;
            case 2:
                $status = 'In Progress';
                break;
            case 3:
                $status = 'On Hold';
                break;
            case 4:
                $status = 'Done';
                break;
        }
        $chargable = '';
        switch ($request->get('chargable')) {
            case 1:
                $chargable = 'Occupant';
                break;
            case 2:
                $chargable = 'Management';
                break;
        }
        $actionTaken = '';
        switch ($request->get('action_taken')) {
            case 1:
                $actionTaken = 'Work Completed';
                break;
            case 2:
                $actionTaken = 'Repaired Temporarily';
                break;
            case 3:
                $actionTaken = 'Parts on Order';
                break;
            case 4:
                $actionTaken = 'Outside Contractor Called';
                break;
        }
        $repairedBy = User::find($request->get('repaired_by', null));
        $actionDate = date('Y-m-d', strtotime($request->get('action_date')));
        $timeIn = date('H:i', strtotime($maintananceRequest->time_in));
        $timeOut = date('H:i', strtotime($maintananceRequest->time_out));
        $message = "<strong>Status</strong>: {$status}<br/><strong>Comment</strong>: {$request->get('work_done')}<br/><strong>Action Date</strong>: {$actionDate}<br/>";
        $message .= "<strong>Time In</strong>: {$timeIn}<br/><strong>Time Out</strong>: {$timeOut}<br/>";
        $message .= "<strong>Action Taken</strong>: {$actionTaken}<br/>";
        if ($repairedBy) {
            $message .= "<strong>Assigned To</strong>: {$repairedBy->first_name}<br/>";
        }
        $message .= "<strong>Chargable</strong>: {$chargable}";

        $validatedData = [
            'message' => $message,
            'sender_id' => Auth::id()
        ];

        $validatedData['maintanance_id'] = $id;

        MaintananceConversation::create($validatedData);

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

    public function createConversation(int $id, Request $request)
    {
        $validation = [
            // 'status' => 'required|in:2,3',
            'message' => 'required',
            'sender_id' => "required|in:" . Auth::id()
        ];

        $validatedData = $this->validate($request, $validation);

        $validatedData['maintanance_id'] = $id;

        MaintananceConversation::create($validatedData);

        return response()->json([
            'status' => true,
            'message' => 'Conversation Added Successfully',
        ]);
    }

    public function conversations(int $id)
    {
        return response()->json(MaintananceConversation::with('sender')->where('maintanance_id', $id)->orderBy('id', 'desc')->get());
    }
}
