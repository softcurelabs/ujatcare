<?php

namespace Database\Seeders;

use App\Constants\Role as ConstantsRole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Role::create(['name' => ConstantsRole::Admin]);
        Role::create(['name' => ConstantsRole::Renter]);
        Role::create(['name' => ConstantsRole::Staff]);
    }
}
