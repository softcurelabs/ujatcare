<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Constants\Role;
use App\Models\Apartment;
use App\Models\FlatOwner;
use App\Models\Notice;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = \App\Models\User::factory()->create([
            'name' => 'Admin user',
            'email' => 'admin@example.com',
            'password' => bcrypt('p@ssword')
        ]);
        $user->assignRole(Role::Admin);

        $user = \App\Models\User::factory()->create([
            'name' => 'Mark Hewet',
            'email' => 'mark@example.com',
            'password' => bcrypt('p@ssword')
        ]);
        $flat = DB::table('flat')->join('apartment', 'flat.apartment_id', '=', 'apartment.id')->where('flat.name', '101')->where('apartment.name', 'North Park Manor')->first();
        FlatOwner::create(['user_id' => $user->id, 'flat_id' => $flat->id]);
        $user->assignRole(Role::Renter);

        $user = \App\Models\User::factory()->create([
            'name' => 'Damian huff',
            'email' => 'demian@example.com',
            'password' => bcrypt('p@ssword')
        ]);
        $flat = DB::table('flat')->join('apartment', 'flat.apartment_id', '=', 'apartment.id')->where('flat.name', '101')->where('apartment.name', 'Fisgard House')->first();
        FlatOwner::create(['user_id' => $user->id, 'flat_id' => $flat->id]);
        $user->assignRole(Role::Renter);
    }
}
