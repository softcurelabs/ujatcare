<?php

namespace App\Http\Controllers;

use App\Constants\Role;
use App\Models\Application;
use App\Models\ApplicationDocuments;
use App\Models\FlatOwner;
use App\Models\User;
use App\Models\UserProfile;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Nette\Utils\Random;

class ApplicationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        //return response()->json(get_class($request->file('documents')));
        $request->validate([
            'cash_balance' => 'required|integer',
            'city' => 'required|max:128',
            'current_address' => 'required|max:255',
            'email' => 'required|email|unique:applications',
            'first_language' => 'required|max:128',
            'first_name_first' => 'required|max:128',
            'first_name_second' => 'max:128',
            'gender_first' => 'required|in:1,2,3,4',
            'hc_age_first' => 'required|integer|between:1,100',
            'hc_birth_date_first' => 'required|date|before:today',
            'hc_disability_first' => 'required|max:100',
            'hc_gender_first' => 'required|in:1,2,3,4',
            'hc_last_name_first' => 'required|max:128',
            'hc_first_name_first' => 'required|max:128',
            'hc_relationship_first' => 'required|max:128',
            'hc_wheelchair_first' => 'required|in:1,2',
            'home_phone_first' => 'required|digits:10',
            'home_phone_second' => 'nullable|digits:10',
            'ii_income_first' => 'required|integer',
            'ii_income_second' => 'nullable|integer',
            'ii_income_source_first' => 'required|max:128',
            'ii_last_name_first' => 'required|max:128',
            'landlord_name_first' => 'required|max:128',
            'accomodation' => 'required|max:128',
            'last_name_first' => 'required|max:128',
            'ii_income_source_second' => 'max:128',
            'ii_last_name_second' => 'nullable|max:128',
            'landlord_name_second' => 'nullable|max:128',
            'landlord_name_third' => 'max:128',
            'last_name_second' => 'max:128',
            'landlord_phone_first' => 'required|digits:10',
            'landlord_phone_second' => 'nullable|digits:10',
            'landlord_phone_third' => 'nullable|digits:10',
            'monthly_includes' => 'required|max:128',
            'postal_code' => 'required|max:128',
            'prov' => 'required|max:128',
            'long_term' => 'required|integer',
            'rh_address_first' => 'required|max:256',
            'rh_address_second' => 'max:256',
            'rh_address_third' => 'max:256',
            'second_language' => 'max:128',
            'wish_to_move' => 'max:256',
            'monthly_rent' => 'required|integer',
            'rh_end_date_first' => 'required|date',
            'rh_start_date_first' => 'required|date',
            'rh_end_date_second' => 'nullable|date',
            'rh_end_date_third' => 'nullable|date',
            'rh_start_date_second' => 'nullable|date',
            'rh_start_date_third' => 'nullable|date',
            'signature_first' => 'required',
            'stock_deposit' => 'required|integer',
            'translator_required' => 'required|in:1,2',
            'under_notice' => 'required|in:1,2',
            'value_real_estate' => 'required|integer',
            'value_morgages' => 'required|integer',
            'value_others' => 'required|integer',
            'documents.*' => 'required|mimes:jpg,jpeg,pdf,png|max:20000|min:1',
        ]);
        $application = Application::create($request->all());
        foreach ($request->file('documents', []) as $document) {
            $document_path = $document->store('documents');
            $applicationDocument = new ApplicationDocuments();
            $applicationDocument->fill(['document_name' => $document_path, 'application_id' => $application->id]);
            $applicationDocument->save();
        }

        return response()->json([
            'status' => true,
            'message' => 'Application Created Successfully',
        ]);
    }

    public function list(Request $request)
    {
        return Application::with('documents')->orderBy('id', 'desc')->paginate($request->get('limit', 10));
    }

    public function convertToUser(Request $request, int $id): JsonResponse
    {
        try {
            $application = Application::findOrFail($id);
        } catch (Exception $e) {
            throw ValidationException::withMessages(['flat_id' => 'Application doesn\'t exists']);
        }


        if ($application && 0 !== $application->status) {
            throw ValidationException::withMessages(['flat_id' => 'Application is already processed']);
        }

        if (User::where('email', $application->email)->exists()) {
            throw ValidationException::withMessages(['flat_id' => 'User email already exists']);
        }

        $user = new User([
            'name'  => $application->first_name_first,
            'email' => $application->email,
            'password' => bcrypt(Random::generate(10)),
        ]);

        $user->assignRole(Role::Recident->value);
        if ($user->save()) {
            FlatOwner::create(['user_id' => $user->getKey(), 'flat_id' => $request->get('flat_id')]);
            UserProfile::create(['user_id' => $user->getKey()]);
            $application->status = 1;
            $application->save();

            Password::sendResetLink(
                ['email' => $application->email]
            );

            return response()->json(['status' => true, 'message' => 'User created successfully']);
        }
    }
}
