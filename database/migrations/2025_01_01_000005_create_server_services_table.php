<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('server_services', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('server_id')->constrained('servers')->cascadeOnDelete();
            $table->string('name', 50);
            $table->string('status'); // active, inactive, error, unknown
            $table->string('version', 20)->nullable();
            $table->timestamp('checked_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('server_services');
    }
};
