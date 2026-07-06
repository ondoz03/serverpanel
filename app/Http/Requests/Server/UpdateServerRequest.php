<?php

namespace App\Http\Requests\Server;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['sometimes', 'string', 'max:100'],
            'hostname' => ['nullable', 'string', 'max:255'],
            'ip_address' => ['sometimes', 'string', 'max:45'],
            'ssh_port' => ['sometimes', 'integer', 'min:1', 'max:65535'],
            'provider' => ['nullable', 'string', 'max:50'],
            'datacenter' => ['nullable', 'string', 'max:50'],
            'plan_name' => ['nullable', 'string', 'max:100'],
            'os' => ['nullable', 'string', 'max:50'],
        ];
    }
}
