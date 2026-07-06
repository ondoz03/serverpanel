<?php

namespace App\Services;

use App\Models\Organization;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class OrganizationService
{
    public function create(array $data, User $owner): Organization
    {
        return DB::transaction(function () use ($data, $owner) {
            $org = Organization::create([
                'name' => $data['name'],
                'slug' => $data['slug'] ?? str($data['name'])->slug(),
                'owner_id' => $owner->id,
                'plan_id' => $data['plan_id'] ?? null,
                'billing_email' => $data['billing_email'] ?? $owner->email,
            ]);

            $org->members()->attach($owner->id, [
                'role' => 'owner',
                'joined_at' => now(),
            ]);

            return $org;
        });
    }

    public function inviteMember(Organization $organization, User $user, string $role = 'developer'): void
    {
        $organization->members()->syncWithoutDetaching([
            $user->id => [
                'role' => $role,
                'joined_at' => now(),
            ],
        ]);
    }

    public function changeMemberRole(Organization $organization, User $user, string $role): void
    {
        $organization->members()->updateExistingPivot($user->id, [
            'role' => $role,
        ]);
    }

    public function removeMember(Organization $organization, User $user): void
    {
        $organization->members()->detach($user->id);
    }

    public function getMemberCount(Organization $organization): int
    {
        return $organization->members()->count();
    }
}
