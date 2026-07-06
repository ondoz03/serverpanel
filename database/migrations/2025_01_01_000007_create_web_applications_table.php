<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('web_applications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('server_id')->constrained('servers')->cascadeOnDelete();
            $table->string('name');
            $table->string('domain');
            $table->json('aliases')->nullable();
            $table->string('document_root');
            $table->string('php_version', 10)->default('8.3');
            $table->string('web_server', 10)->default('nginx');
            $table->string('environment', 20)->default('production');
            $table->string('system_user')->nullable();
            $table->string('public_path')->nullable();
            $table->string('stack', 20)->default('laravel');
            $table->string('status')->default('active');
            $table->longText('nginx_config')->nullable();
            $table->json('php_ini_overrides')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('web_applications');
    }
};
