<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('app:test-env', function () {
    $this->info('=========================================');
    $this->info('TESTING GITHUB ACTIONS ENV VALUES:');
    $this->info('APP_ENV: ' . env('APP_ENV'));
    $this->info('APP_URL: ' . env('APP_URL'));
    $this->info('DB_CONNECTION: ' . env('DB_CONNECTION'));
    $this->info('APP_KEY IS SET: ' . (env('APP_KEY') ? 'YES' : 'NO'));
    $this->info('=========================================');
})->purpose('Display environment variables for GitHub Actions testing');
