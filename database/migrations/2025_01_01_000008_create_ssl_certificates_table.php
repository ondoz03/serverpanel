<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ssl_certificates', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('web_app_id')->constrained('web_applications')->cascadeOnDelete();
            $table->string('type', 20)->default('letsencrypt');
            $table->string('domain');
            $table->text('cert_path')->nullable();
            $table->text('key_path')->nullable();
            $table->text('chain_path')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->boolean('wildcard')->default(false);
            $table->string('status')->default('active');
            $table->timestamp('renewed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ssl_certificates');
    }
};
