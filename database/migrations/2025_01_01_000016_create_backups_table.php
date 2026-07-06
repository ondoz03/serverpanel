<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('backups', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('server_id')->constrained('servers')->cascadeOnDelete();
            $table->foreignUuid('web_app_id')->nullable()->constrained('web_applications')->nullOnDelete();
            $table->foreignId('database_id')->nullable()->constrained('databases')->nullOnDelete();
            $table->string('type', 20)->default('full');
            $table->string('storage_type', 20)->default('local');
            $table->string('storage_path');
            $table->bigInteger('size_bytes')->nullable();
            $table->string('status')->default('pending');
            $table->string('triggered_by', 20)->default('manual');
            $table->string('checksum', 64)->nullable();
            $table->boolean('encrypted')->default(false);
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('backups');
    }
};
