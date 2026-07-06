<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('deployments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('git_deployment_id')->nullable()->constrained('git_deployments')->nullOnDelete();
            $table->foreignUuid('web_app_id')->constrained('web_applications')->cascadeOnDelete();
            $table->string('triggered_by', 30)->default('manual');
            $table->foreignId('triggered_user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('commit_hash', 40)->nullable();
            $table->text('commit_message')->nullable();
            $table->string('branch', 100)->nullable();
            $table->string('status')->default('pending');
            $table->longText('log')->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('finished_at')->nullable();
            $table->integer('duration_seconds')->nullable();
            $table->uuid('rollback_of')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('deployments');
    }
};
