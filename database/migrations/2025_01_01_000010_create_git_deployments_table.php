<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('git_deployments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('web_app_id')->constrained('web_applications')->cascadeOnDelete();
            $table->string('provider', 30)->nullable();
            $table->string('repo_url');
            $table->string('branch', 100)->default('main');
            $table->text('deploy_script')->nullable();
            $table->string('webhook_secret', 64)->nullable();
            $table->boolean('auto_deploy')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('git_deployments');
    }
};
