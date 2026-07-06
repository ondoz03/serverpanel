<?php

namespace App\Http\Requests\Server;

use Illuminate\Foundation\Http\FormRequest;

class StoreServerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'ip_address' => ['required', 'string', 'max:45'],
            'ssh_port' => ['required', 'integer', 'min:1', 'max:65535'],
            'auth_method' => ['required', 'string', 'in:password,key'],
            'ssh_user' => ['nullable', 'string', 'max:50'],
            'ssh_password' => ['nullable', 'string', 'max:500'],
            'ssh_key' => ['nullable', 'string'],
            'provider' => ['nullable', 'string', 'max:50'],
            'datacenter' => ['nullable', 'string', 'max:50'],
            'os' => ['nullable', 'string', 'max:50'],
            'php_version' => ['nullable', 'string', 'max:10'],
        ];
    }
}
