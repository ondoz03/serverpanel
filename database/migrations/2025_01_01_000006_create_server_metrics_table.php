<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('server_metrics', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('server_id')->constrained('servers')->cascadeOnDelete();
            $table->float('cpu_usage');
            $table->bigInteger('memory_used');
            $table->bigInteger('memory_total');
            $table->bigInteger('disk_used');
            $table->bigInteger('disk_total');
            $table->float('load_avg_1')->nullable();
            $table->float('load_avg_5')->nullable();
            $table->bigInteger('net_in')->nullable();
            $table->bigInteger('net_out')->nullable();
            $table->timestamp('recorded_at');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('server_metrics');
    }
};
