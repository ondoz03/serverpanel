<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { AlertCircle, ArrowLeft, Check, ChevronRight, Copy, Globe, Key, Lock, Monitor, Server as ServerIcon, Terminal } from '@lucide/vue';
import { computed, ref } from 'vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import servers from '@/routes/servers';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Servers', href: servers.index() },
            { title: 'Add Server', href: '#' },
        ],
    },
});

const step = ref(1);
const connecting = ref(false);
const connected = ref(false);
const error = ref('');

type AuthMethod = 'password' | 'key';
const authMethod = ref<AuthMethod>('key');

const form = ref({
    name: '',
    ip_address: '',
    ssh_port: 22,
    auth_method: 'key' as AuthMethod,
    ssh_user: 'root',
    ssh_password: '',
    ssh_key: '',
    provider: 'custom',
    datacenter: '',
    os: '',
    php_version: '8.3',
});

const installScript = ref("curl -fsSL https://agent.serverpanel.id/install.sh | bash -s -- --token=sp_live_xxxxxxxxxx --endpoint=https://api.serverpanel.id");

const errors = ref<Record<string, string>>({});

function validateStep1(): boolean {
    errors.value = {};

    if (!form.value.name.trim()) {
errors.value.name = 'Server name is required';
}

    if (!form.value.ip_address.trim()) {
errors.value.ip_address = 'IP address is required';
} else if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(form.value.ip_address)) {
errors.value.ip_address = 'Invalid IP address format';
}

    if (!form.value.ssh_port || form.value.ssh_port < 1 || form.value.ssh_port > 65535) {
errors.value.ssh_port = 'Port must be 1-65535';
}

    return Object.keys(errors.value).length === 0;
}

function testConnection() {
    error.value = '';

    if (!validateStep1()) {
return;
}

    connecting.value = true;
    setTimeout(() => {
        connecting.value = false;
        connected.value = true;
    }, 2000);
}

function nextStep() {
    if (step.value === 1 && !validateStep1()) {
return;
}

    step.value++;
}

function prevStep() {
    step.value--;
}

function startProvisioning() {
    router.post('/servers', form.value);
}

async function copyScript() {
    try {
        await navigator.clipboard.writeText(installScript.value);
    } catch {
        // fallback
    }
}

const osDetected = computed(() => {
    return form.value.os || 'Not detected yet';
});
</script>

<template>
    <Head title="Add Server" />

    <div class="mx-auto max-w-3xl p-4">
        <div class="mb-6">
            <Button variant="ghost" as-child>
                <Link :href="servers.index()" class="gap-2">
                    <ArrowLeft class="h-4 w-4" />
                    Back to Servers
                </Link>
            </Button>
        </div>

        <div class="mb-8">
            <h1 class="text-2xl font-bold tracking-tight">Add New Server</h1>
            <p class="text-sm text-muted-foreground">Connect your VPS to ServerPanel</p>
        </div>

        <div class="mb-8 flex items-center justify-center gap-2">
            <div v-for="s in 4" :key="s" class="flex items-center gap-2">
                <div
                    :class="[
                        'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium',
                        step > s ? 'bg-primary text-primary-foreground' : step === s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground',
                    ]"
                >
                    <Check v-if="step > s" class="h-4 w-4" />
                    <span v-else>{{ s }}</span>
                </div>
                <span class="hidden text-sm sm:inline" :class="step === s ? 'font-medium text-foreground' : 'text-muted-foreground'">
                    {{ ['Details', 'Connect', 'Install', 'Provision'][s - 1] }}
                </span>
                <ChevronRight v-if="s < 4" class="h-4 w-4 text-muted-foreground" />
            </div>
        </div>

        <!-- Step 1: Server Details -->
        <Card v-if="step === 1">
            <CardHeader>
                <CardTitle>Server Details</CardTitle>
                <CardDescription>Enter your server connection information</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
                <div class="space-y-2">
                    <Label for="name">Server Name</Label>
                    <Input id="name" v-model="form.name" placeholder="e.g. Production-01" />
                    <p v-if="errors.name" class="flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle class="h-3 w-3" /> {{ errors.name }}
                    </p>
                </div>
                <div class="grid gap-4 sm:grid-cols-3">
                    <div class="space-y-2 sm:col-span-2">
                        <Label for="ip">IP Address</Label>
                        <Input id="ip" v-model="form.ip_address" placeholder="e.g. 152.42.12.84" />
                        <p v-if="errors.ip_address" class="flex items-center gap-1 text-xs text-red-500">
                            <AlertCircle class="h-3 w-3" /> {{ errors.ip_address }}
                        </p>
                    </div>
                    <div class="space-y-2">
                        <Label for="port">SSH Port</Label>
                        <Input id="port" v-model.number="form.ssh_port" type="number" />
                        <p v-if="errors.ssh_port" class="flex items-center gap-1 text-xs text-red-500">
                            <AlertCircle class="h-3 w-3" /> {{ errors.ssh_port }}
                        </p>
                    </div>
                </div>
                <div class="space-y-2">
                    <Label for="user">SSH User</Label>
                    <Input id="user" v-model="form.ssh_user" placeholder="root" />
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                    <div class="space-y-2">
                        <Label for="provider">Provider</Label>
                        <Select v-model="form.provider">
                            <SelectTrigger>
                                <SelectValue placeholder="Select provider" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="custom">Custom</SelectItem>
                                <SelectItem value="vultr">Vultr</SelectItem>
                                <SelectItem value="digitalocean">DigitalOcean</SelectItem>
                                <SelectItem value="hetzner">Hetzner</SelectItem>
                                <SelectItem value="linode">Linode</SelectItem>
                                <SelectItem value="upcloud">UpCloud</SelectItem>
                                <SelectItem value="idcloudhost">IDCloudHost</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="space-y-2">
                        <Label for="datacenter">Datacenter</Label>
                        <Input id="datacenter" v-model="form.datacenter" placeholder="e.g. SGP1, FSN1" />
                    </div>
                </div>
                <Separator />
                <div class="space-y-2">
                    <Label>Authentication Method</Label>
                    <div class="grid gap-4 sm:grid-cols-2">
                        <button
                            :class="[
                                'flex items-center gap-3 rounded-lg border p-4 text-left transition-colors',
                                authMethod === 'key' ? 'border-primary bg-primary/5' : 'hover:bg-muted',
                            ]"
                            @click="authMethod = 'key'"
                        >
                            <Key class="h-5 w-5 text-muted-foreground" />
                            <div>
                                <div class="text-sm font-medium">SSH Key</div>
                                <div class="text-xs text-muted-foreground">Recommended — more secure</div>
                            </div>
                        </button>
                        <button
                            :class="[
                                'flex items-center gap-3 rounded-lg border p-4 text-left transition-colors',
                                authMethod === 'password' ? 'border-primary bg-primary/5' : 'hover:bg-muted',
                            ]"
                            @click="authMethod = 'password'"
                        >
                            <Lock class="h-5 w-5 text-muted-foreground" />
                            <div>
                                <div class="text-sm font-medium">Password</div>
                                <div class="text-xs text-muted-foreground">SSH password authentication</div>
                            </div>
                        </button>
                    </div>
                </div>
                <div v-if="authMethod === 'key'" class="space-y-2">
                    <Label for="ssh_key">Private Key</Label>
                    <textarea
                        id="ssh_key"
                        v-model="form.ssh_key"
                        class="flex min-h-[120px] w-full rounded-lg border bg-muted px-3 py-2 font-mono text-sm"
                        placeholder="Paste your private SSH key..."
                    />
                </div>
                <div v-else class="space-y-2">
                    <Label for="password">SSH Password</Label>
                    <Input id="password" v-model="form.ssh_password" type="password" placeholder="Enter SSH password" />
                </div>
            </CardContent>
        </Card>

        <!-- Step 2: Connection Test -->
        <Card v-if="step === 2">
            <CardHeader>
                <CardTitle>Test Connection</CardTitle>
                <CardDescription>We'll verify we can connect to your server</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
                <div class="rounded-lg border bg-muted p-4">
                    <div class="mb-2 flex items-center gap-2 text-sm font-medium">
                        <Monitor class="h-4 w-4" />
                        {{ form.ip_address }}:{{ form.ssh_port }}
                        <Badge v-if="connected" variant="success">Connected</Badge>
                        <Badge v-else variant="secondary">Pending</Badge>
                    </div>
                    <div class="space-y-1 font-mono text-xs">
                        <div class="text-muted-foreground">$ ssh {{ form.ssh_user }}@{{ form.ip_address }} -p {{ form.ssh_port }}</div>
                        <div v-if="connecting" class="text-yellow-500">Connecting...</div>
                        <div v-if="connected" class="text-green-500">✓ Connected — Ubuntu 22.04.4 LTS detected</div>
                        <div v-if="connected" class="text-green-500">✓ ServerPanel agent compatible</div>
                        <div v-if="connected" class="text-green-500">✓ 1 vCPU, 2GB RAM, 50GB Disk</div>
                    </div>
                </div>

                <Button :disabled="connecting || connected" @click="testConnection" class="w-full">
                    {{ connecting ? 'Testing Connection...' : connected ? 'Connected ✓' : 'Test Connection' }}
                </Button>

                <div v-if="!connected" class="rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
                    <p class="font-medium">Troubleshooting Tips:</p>
                    <ul class="mt-1 list-inside list-disc text-xs">
                        <li>Ensure port {{ form.ssh_port }} is open in your firewall</li>
                        <li>Verify the IP address is correct</li>
                        <li>Make sure the SSH user exists on the server</li>
                    </ul>
                </div>
            </CardContent>
        </Card>

        <!-- Step 3: Install Agent -->
        <Card v-if="step === 3">
            <CardHeader>
                <CardTitle>Install Agent</CardTitle>
                <CardDescription>Run this command on your server to install the ServerPanel agent</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
                <div class="rounded-lg border bg-black p-4">
                    <div class="mb-2 flex items-center justify-between">
                        <span class="flex items-center gap-2 text-sm font-medium text-green-400">
                            <Terminal class="h-4 w-4" />
                            Terminal
                        </span>
                        <Button size="sm" variant="ghost" class="text-white" @click="copyScript">
                            <Copy class="mr-1 h-3 w-3" />
                            Copy
                        </Button>
                    </div>
                    <pre class="overflow-x-auto text-sm text-green-400">{{ installScript }}</pre>
                </div>

                <div class="rounded-lg border bg-muted p-4">
                    <div class="mb-2 text-sm font-medium">Installation Progress</div>
                    <div class="space-y-1 font-mono text-xs text-muted-foreground">
                        <div>Waiting for agent to connect...</div>
                        <div class="text-yellow-500 animate-pulse">⏳ Agent not yet connected</div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <!-- Step 4: Provisioning -->
        <Card v-if="step === 4">
            <CardHeader>
                <CardTitle>Provisioning</CardTitle>
                <CardDescription>Choose what to install on your server</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
                <div class="space-y-2">
                    <Label>Quick Install</Label>
                    <div class="grid gap-3 sm:grid-cols-2">
                        <div class="cursor-pointer rounded-lg border border-primary bg-primary/5 p-4">
                            <div class="flex items-center gap-2">
                                <ServerIcon class="h-4 w-4 text-primary" />
                                <div class="text-sm font-medium">LEMP Stack</div>
                            </div>
                            <div class="text-xs text-muted-foreground">Nginx + PHP {{ form.php_version }} + MySQL/MariaDB + Redis</div>
                        </div>
                        <div class="cursor-pointer rounded-lg border p-4 hover:bg-muted">
                            <div class="flex items-center gap-2">
                                <Globe class="h-4 w-4" />
                                <div class="text-sm font-medium">Custom</div>
                            </div>
                            <div class="text-xs text-muted-foreground">Choose individual components</div>
                        </div>
                    </div>
                </div>

                <Separator />

                <div class="grid gap-4 sm:grid-cols-2">
                    <div class="space-y-2">
                        <Label>PHP Version</Label>
                        <Select v-model="form.php_version">
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="8.4">PHP 8.4</SelectItem>
                                <SelectItem value="8.3">PHP 8.3</SelectItem>
                                <SelectItem value="8.2">PHP 8.2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="space-y-2">
                        <Label>Detected OS</Label>
                        <Input :value="osDetected" disabled />
                    </div>
                </div>

                <div class="rounded-lg border bg-blue-50 p-3 text-sm text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                    Provisioning will install and configure your server automatically. This typically takes 5-10 minutes.
                </div>
            </CardContent>
        </Card>

        <!-- Navigation -->
        <div class="mt-6 flex justify-between">
            <Button v-if="step > 1" variant="outline" @click="prevStep">
                Previous
            </Button>
            <div v-else />
            <Button v-if="step < 4" @click="nextStep">
                Continue
                <ChevronRight class="ml-2 h-4 w-4" />
            </Button>
            <Button v-else @click="startProvisioning">
                Start Provisioning
            </Button>
        </div>
    </div>
</template>
