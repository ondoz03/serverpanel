<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('organization_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('ip_address', 45);
            $table->smallInteger('ssh_port')->default(22);
            $table->string('hostname')->nullable();
            $table->string('os')->nullable();
            $table->string('arch', 10)->nullable();
            $table->string('status'); // pending, provisioning, active, error
            $table->string('agent_token', 64)->unique()->nullable();
            $table->string('agent_version', 20)->nullable();
            $table->timestamp('agent_last_seen')->nullable();
            $table->timestamp('agent_connected_at')->nullable();
            $table->text('ssh_public_key')->nullable();
            $table->string('provider', 50)->nullable();
            $table->string('datacenter', 50)->nullable();
            $table->string('plan_name', 100)->nullable();
            $table->timestamp('provisioned_at')->nullable();
            $table->longText('provisioning_log')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('servers');
    }
};
