<?php

namespace App\Imports;

use App\Constants\Role;
use App\Models\FlatOwner;
use App\Models\User;
use App\Models\UserProfile;
use Carbon\Carbon;
use DateTime;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Row;
use Throwable;

class UsersImport implements OnEachRow, SkipsOnError, WithHeadingRow, WithStartRow
{
    use SkipsErrors, Importable;

    public function onRow(Row $row)
    {
        // if (empty($row['firstname'])) {
        //     return;
        // }

        try {
            Log::info(json_encode($row->toArray()));
            if (!empty($row['email']) && User::where('email', $row['email'])->exists()) {
                $this->onError(ValidationException::withMessages(['email' => "Couldn't create user for {$row['email']}: Email already exists"]));
                return;
            }
            $flat = DB::table('flat')->join('apartment', 'flat.apartment_id', '=', 'apartment.id')->where('flat.name', $row['suite'])->where('apartment.id', 1)->first('flat.id');
            if (null  === $flat) {
                $this->onError(ValidationException::withMessages(['email' => "Couldn't create user for {$row['email']}: Flat Didn't exists"]));
                return;
            }
            if (FlatOwner::where('flat_id', $flat->id)->exists()) {
                $this->onError(ValidationException::withMessages(['email' => "Couldn't create user for {$row['email']}: Flat already assigned to user"]));
                return;
            }
            $user = \App\Models\User::factory()->create([
                'first_name' => $row['first_name'],
                'last_name' => $row['lastname'],
                'email' => $row['email'],
                'password' => bcrypt($row['internet_password'])
            ]);
            FlatOwner::create(['user_id' => $user->id, 'flat_id' => $flat->id]);
            $user->assignRole(Role::Recident);

            UserProfile::create([
                'user_id' => $user->id,
                'phone_number' => $row['phone'],
                'relationship' => $row['emergency_relation'],
                'emergency_contact_number'  => $row['emergency_contact_number'],
                'emergency_contact_name' => $row['emergency_contact_name'],
                // 'unit' => $row['unit'] ?? 0,
                'parking_space' => str_replace([' ', '$'], '',$row['parking_space'] ?? 0),
                'birth_date' => Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['birth_date'])),
                'locker' => $row['locker'],
                'staff_notes' => $row['staff_notes'],
                'movein_date' => Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['move_in_date'])),
                'income_verification' => str_replace([' ', '$'], '', $row['monthly_income'] ?? 0),
                'total_rent'  => str_replace([' ', '$'], '',$row['total_rent'] ?? 0),
                'language' => $row['language'],
                'fob' => $row['fob'],
                'special_instruction' => $row['special_instructions'],
                'emergency_contact_email' => $row['emergency_contact_email'],
                'base_rent' => str_replace([' ', '$'], '',empty(trim($row['base_rent'])) ? 0 : (float) $row['base_rent']),
                'utilities' => str_replace([' ', '$'], '',empty(trim($row['utilities'])) ? 0 : (float)$row['utilities']),
                'maintenance_fees' => str_replace([' ', '$'], '', empty(trim($row['maintenance_fees'])) ? 0 : (float)$row['maintenance_fees']),
                'property_taxes' => str_replace([' ', '$'], '', empty(trim($row['property_taxes'])) ? 0 : (float)$row['property_taxes']),
                'rental_insurance' => str_replace([' ', '$'], '',empty(trim($row['rental_insurance'])) ? 0 : (float)$row['rental_insurance']),
                'parking_fees' => str_replace([' ', '$'], '',empty(trim($row['parking_fees'])) ? 0 : (float)$row['parking_fees']),
                'service_fees' => str_replace([' ', '$'], '',empty(trim($row['service_fees'])) ? 0 : (float)$row['service_fees']),
                'administrative_fees' => str_replace([' ', '$'], '',empty(trim($row['administrative_fees'])) ? 0 : (float)$row['administrative_fees']),
                'storage_fees' => str_replace([' ', '$'], '',empty(trim($row['storage_fees'])) ? 0 : (float)$row['storage_fees']),
                'cable_fees' => str_replace([' ', '$'], '',empty(trim($row['cable_fees'])) ? 0 : (float)$row['cable_fees']),
                'wifi' => str_replace([' ', '$'], '',empty(trim($row['wifi_fee'])) ? 0 :(float)$row['wifi_fee']),
                'of_occupants' => $row['of_occupants'] ?? 1,
                'preferred_name' => $row['preferred_name'],
                'apt_address' => $row['apt_address'],
                'city' => $row['city'],
                'province' => $row['province'],
                'postal_code' => $row['postal_code'],
                'additional_phone' => $row['additional_phone'],
                'security_deposit' => $row['security_deposit'],
                'addtl_deposits' => $row['addtl_deposits'],
                'fob_id_2' => $row['fob_id_2'],
                'will' => $row['will'],
                'ice_name' => $row['ice_name'],
                'emergency_address' => $row['address'],
                'family_doctor' => $row['family_doctor'],
                'medical_alerts' => $row['medical_alerts'],
                'property' => $row['property'],
        ]);

            // Password::sendResetLink(
            //     ['email' => $row['email']]
            // );
        } catch (Throwable $e) {
            Log::info($e->getMessage());
            $this->onError(ValidationException::withMessages(['email' => "Couldn't create user for " . $e->getMessage()]));
            return;
        }
    }

    public function startRow(): int
    {
        return 3;
    }

    public function headingRow(): int
    {
        return 3;
    }
}
