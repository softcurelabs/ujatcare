<?php

namespace Database\Seeders;

use App\Models\Notice;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NoticeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $user = User::find(1);

        Notice::create(['title' => "Halloween Celebration Invition on 10 Feb 2024", 'user_id' => $user->id]);

        Notice::create(['title' => "Holi Celebration Invition on 30 Feb 2024", 'user_id' => $user->id]);
    }
}
