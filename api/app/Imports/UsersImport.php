<?php

namespace App\Imports;

use App\Constants\Role;
use App\Models\FlatOwner;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Row;
use Throwable;

class UsersImport implements OnEachRow, SkipsOnError, WithHeadingRow
{
    use SkipsErrors, Importable;

    public function onRow(Row $row)
    {
        if (empty($row['name'])) {
            return;
        }

        try {
            // print_r($row);
            if (User::where('email', $row['email'])->exists()) {
                $this->onError(ValidationException::withMessages(['email' => "Couldn't create user for {$row['email']}: Email already exists"]));
                return;
            }
            $flat = DB::table('flat')->join('apartment', 'flat.apartment_id', '=', 'apartment.id')->where('flat.name', $row['flat'])->where('apartment.name', $row['apartment'])->first('flat.id');
            if (null  === $flat) {
                $this->onError(ValidationException::withMessages(['email' => "Couldn't create user for {$row['email']}: Flat Didn't exists"]));
                return;
            }
            if (FlatOwner::where('flat_id', $flat->id)->exists()) {
                $this->onError(ValidationException::withMessages(['email' => "Couldn't create user for {$row['email']}: Flat already assigned to user"]));
                return;
            }
            $user = \App\Models\User::factory()->create([
                'name' => $row['name'],
                'email' => $row['email'],
                'password' => bcrypt('p@ssword')
            ]);
            if (strtolower($row['role']) == 'recident') {
                FlatOwner::create(['user_id' => $user->id, 'flat_id' => $flat->id]);
                $user->assignRole(Role::Recident);
            } else {
                $user->assignRole(Role::Admin);
            }

            UserProfile::create(['user_id' => $user->id, 'unit' => 0]);

            Password::sendResetLink(
                ['email' => $row['email']]
            );
        } catch (Throwable $e) {
            $this->onError(ValidationException::withMessages(['email' => "Couldn't create user for {$row['name']}" . $e->getMessage()]));
            return;
        }
    }
}
