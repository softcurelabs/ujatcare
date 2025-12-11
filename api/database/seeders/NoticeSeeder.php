<?php

namespace Database\Seeders;

use App\Models\Notice;
use App\Models\User;
use Illuminate\Database\Seeder;

class NoticeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first(); // safer than find(1)

        if (! $user) {
            throw new \Exception('No users found. Run UserSeeder first.');
        }

        Notice::create([
            'title' => 'Halloween Celebration Invitation on 10 Feb 2024',
            'user_id' => $user->id,
        ]);

        Notice::create([
            'title' => 'Holi Celebration Invitation on 30 Feb 2024',
            'user_id' => $user->id,
        ]);
    }
}
