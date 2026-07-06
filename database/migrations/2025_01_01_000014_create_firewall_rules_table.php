<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('firewall_rules', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('server_id')->constrained('servers')->cascadeOnDelete();
            $table->string('name');
            $table->string('protocol', 10)->default('tcp');
            $table->string('port', 20)->nullable();
            $table->string('source_ip', 45)->nullable();
            $table->string('action', 10)->default('allow');
            $table->string('direction', 10)->default('inbound');
            $table->smallInteger('order')->default(0);
            $table->boolean('enabled')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('firewall_rules');
    }
};
