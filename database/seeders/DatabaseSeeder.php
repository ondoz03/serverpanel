<?php

namespace Database\Seeders;

use App\Models\Organization;
use App\Models\Plan;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        // Create plans
        $starter = Plan::create([
            'name' => 'Starter',
            'slug' => 'starter',
            'price_idr' => 49000,
            'max_servers' => 1,
            'max_apps' => 3,
            'max_users' => 1,
            'has_backup' => false,
            'has_git' => false,
            'features' => ['basic_support', 'manual_backup'],
        ]);

        Plan::create([
            'name' => 'Pro',
            'slug' => 'pro',
            'price_idr' => 149000,
            'max_servers' => 5,
            'max_apps' => 50,
            'max_users' => 3,
            'has_backup' => true,
            'has_git' => true,
            'features' => ['priority_support', 'auto_backup', 'git_deploy', 'team_collab'],
        ]);

        Plan::create([
            'name' => 'Business',
            'slug' => 'business',
            'price_idr' => 399000,
            'max_servers' => 20,
            'max_apps' => 100,
            'max_users' => 10,
            'has_backup' => true,
            'has_git' => true,
            'features' => ['priority_support', 'auto_backup_s3', 'git_deploy', 'team_collab', 'api_access'],
        ]);

        // Create test user
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Create user's organization
        $org = Organization::create([
            'name' => 'My Project',
            'slug' => 'my-project',
            'owner_id' => $user->id,
            'plan_id' => $starter->id,
        ]);

        // Attach user to organization
        $org->members()->attach($user->id, [
            'role' => 'owner',
            'joined_at' => now(),
        ]);

        // Create sample servers with services and metrics
        \App\Models\Server::factory()
            ->count(3)
            ->sequence(
                ['name' => 'Production-01', 'status' => 'active', 'provider' => 'Vultr', 'datacenter' => 'SGP1', 'plan_name' => '1 vCPU, 2GB RAM'],
                ['name' => 'Staging-01', 'status' => 'provisioning', 'provider' => 'DigitalOcean', 'datacenter' => 'SGP1', 'plan_name' => '2 vCPU, 4GB RAM'],
                ['name' => 'Client-A-Backend', 'status' => 'error', 'provider' => 'IDCloudHost', 'datacenter' => 'JKTA', 'plan_name' => '1 vCPU, 1GB RAM'],
            )
            ->create([
                'organization_id' => $org->id,
            ]);
    }
}
