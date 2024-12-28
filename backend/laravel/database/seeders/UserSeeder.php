<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Seed the  user table application's database.
     */
    public function run(): void
    {
        // Truncate the users table to remove existing data
        User::truncate();
        User::factory(10)->create();
    }
}
