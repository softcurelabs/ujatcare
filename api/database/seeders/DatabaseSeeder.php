<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Constants\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $this->call([
            RoleSeeder::class
        ]);
        $user = \App\Models\User::factory()->create([
            'name' => 'Admin user',
            'email' => 'admin@example.com',
            'password' => bcrypt('p@ssword')
        ]);
        $user->assignRole(Role::Admin);
    }
}
