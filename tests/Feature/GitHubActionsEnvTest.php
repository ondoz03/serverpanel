<?php

namespace Tests\Feature;

use Tests\TestCase;

class GitHubActionsEnvTest extends TestCase
{
    public function test_github_actions_env_values()
    {
        // Output to standard error so it is printed directly in the GitHub Actions workflow logs
        fwrite(STDERR, "\n=========================================\n");
        fwrite(STDERR, "TESTING GITHUB ACTIONS ENV VALUES IN TEST:\n");
        fwrite(STDERR, "APP_ENV: " . env('APP_ENV') . "\n");
        fwrite(STDERR, "APP_URL: " . env('APP_URL') . "\n");
        fwrite(STDERR, "DB_CONNECTION: " . env('DB_CONNECTION') . "\n");
        fwrite(STDERR, "APP_KEY IS SET: " . (env('APP_KEY') ? 'YES' : 'NO') . "\n");
        fwrite(STDERR, "=========================================\n\n");

        $this->assertTrue(true);
    }
}
