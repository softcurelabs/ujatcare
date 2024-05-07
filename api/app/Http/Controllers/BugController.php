<?php

namespace App\Http\Controllers;

use App\Mail\BugCreated;
use App\Mail\OfficeContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class BugController extends Controller
{
    public function index(Request $request)
    {
        $validations = [
            'title' => 'required|max:128',
            'description' => 'required',
            'documents.*' => 'mimes:jpg,jpeg,png|max:4096'
        ];

        $request->validate($validations);
        Mail::to(explode(",", env('SENDER_EMAIL')))->send((new BugCreated($request->get('title'), $request->get('description'), $request->file('documents', []), Auth::user()->email)));

        return response()->json(['status' => true, 'message' => "Bug has been reported"]);

    }

    public function contactOffice(Request $request)
    {
        $validations = [
            'subject' => 'required|max:128',
            'description' => 'required',
        ];

        $request->validate($validations);
        Mail::to(explode(",", env('ADMIN_EMAIL')))->send((new OfficeContact($request->get('subject'), $request->get('description'), Auth::user()->email)));

        return response()->json(['status' => true, 'message' => "Request has been sent. Office admin may contact soon."]);
    }
}
