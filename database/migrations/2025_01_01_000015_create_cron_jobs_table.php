<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cron_jobs', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('web_app_id')->nullable()->constrained('web_applications')->nullOnDelete();
            $table->foreignUuid('server_id')->constrained('servers')->cascadeOnDelete();
            $table->string('name');
            $table->text('command');
            $table->string('expression', 100);
            $table->string('user', 50)->default('www-data');
            $table->boolean('enabled')->default(true);
            $table->timestamp('last_run_at')->nullable();
            $table->string('last_status', 20)->nullable();
            $table->text('last_output')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cron_jobs');
    }
};
