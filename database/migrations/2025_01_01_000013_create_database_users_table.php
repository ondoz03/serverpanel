<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('database_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('database_id')->constrained('databases')->cascadeOnDelete();
            $table->foreignUuid('server_id')->constrained('servers')->cascadeOnDelete();
            $table->string('username');
            $table->text('password')->nullable();
            $table->string('host', 45)->default('localhost');
            $table->json('privileges')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('database_users');
    }
};
