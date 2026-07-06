<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class OAuthController extends Controller
{
    /**
     * The supported OAuth providers.
     */
    private const ALLOWED_PROVIDERS = ['github', 'google'];

    /**
     * Redirect the user to the OAuth provider.
     */
    public function redirect(string $provider): RedirectResponse
    {
        $this->validateProvider($provider);

        session(['oauth_redirect' => url()->previous()]);

        return Socialite::driver($provider)->redirect();
    }

    /**
     * Handle the OAuth callback from the provider.
     */
    public function callback(string $provider): RedirectResponse
    {
        $this->validateProvider($provider);

        try {
            $socialUser = Socialite::driver($provider)->user();
        } catch (Exception $e) {
            Inertia::flash('toast', [
                'type' => 'error',
                'message' => __('Unable to authenticate with :provider. Please try again.', [
                    'provider' => ucfirst($provider),
                ]),
            ]);

            return redirect()->route('login');
        }

        if (!$socialUser->getEmail()) {
            Inertia::flash('toast', [
                'type' => 'error',
                'message' => __('Your :provider account does not have an email address associated with it.', [
                    'provider' => ucfirst($provider),
                ]),
            ]);

            return redirect()->route('login');
        }

        // Find user by email or create a new one
        $user = User::where('email', $socialUser->getEmail())->first();

        if (!$user) {
            $user = User::create([
                'name' => $socialUser->getName() ?: $socialUser->getNickname() ?: explode('@', $socialUser->getEmail())[0],
                'email' => $socialUser->getEmail(),
                'password' => Hash::make(Str::random(32)),
                'email_verified_at' => now(),
            ]);
        } else {
            // Update the user's name if empty or from OAuth
            if (empty($user->name) && ($socialUser->getName() ?: $socialUser->getNickname())) {
                $user->update([
                    'name' => $socialUser->getName() ?: $socialUser->getNickname(),
                ]);
            }

            // Auto-verify email if not yet verified
            if (is_null($user->email_verified_at)) {
                $user->update(['email_verified_at' => now()]);
            }
        }

        // Update avatar URL if available
        if ($socialUser->getAvatar()) {
            $user->update(['avatar_url' => $socialUser->getAvatar()]);
        }

        Auth::login($user, true);

        // Clear OAuth redirect session
        $redirectPath = session()->pull('oauth_redirect');

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => __('Logged in successfully with :provider!', [
                'provider' => ucfirst($provider),
            ]),
        ]);

        return redirect()->to($redirectPath ?: route('dashboard'));
    }

    /**
     * Validate the OAuth provider is supported.
     */
    private function validateProvider(string $provider): void
    {
        if (!in_array($provider, self::ALLOWED_PROVIDERS, true)) {
            abort(404, "Provider '{$provider}' is not supported.");
        }
    }
}
