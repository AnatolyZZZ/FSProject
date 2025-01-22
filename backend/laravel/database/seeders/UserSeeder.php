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
        if (User::count() === 0) {
            User::factory(10)->create();
            $this->command->info('Users table seeded with new data.');
        } else {
            $this->command->info('Users table already has data. Skipping seeding.');
        }
    }
}
