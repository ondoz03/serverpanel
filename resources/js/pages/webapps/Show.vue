<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import {
    ArrowLeft,
    Globe,
    Server as ServerIcon,
    Lock,
    GitBranch,
    Activity,
    Settings,
    Terminal,
    Cpu,
    Play,
    RefreshCw,
    Zap,
} from '@lucide/vue';
import { ref, computed } from 'vue';
import { toast } from 'vue-sonner';
import TerminalOutput from '@/components/TerminalOutput.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { WebApplication } from '@/types';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Web Apps', href: '/web-apps' },
            { title: 'App Details', href: '#' },
        ],
    },
});


const props = defineProps<{
    app: WebApplication;
}>();

const app = computed(() => {
    if (String(props.app.id).startsWith('local-')) {
        try {
            const local = localStorage.getItem('local_webapps');

            if (local) {
                const parsed = JSON.parse(local) as WebApplication[];
                const found = parsed.find(a => String(a.id) === String(props.app.id));

                if (found) {
                    return { ...props.app, ...found };
                }
            }
        } catch (e) {
            console.error('Failed to load local webapp in details', e);
        }
    }

    return props.app;
});

function statusVariant(
    status: string,
): 'default' | 'destructive' | 'secondary' {
    if (status === 'active') {
return 'default';
}

    if (status === 'suspended') {
return 'destructive';
}

    return 'secondary';
}

// Laravel Tab State
const selectedCommand = ref('migrate');
const customParams = ref('');
const commandLines = ref<string[]>([]);
const isCommandRunning = ref(false);
const commandStream = ref(true);

const queueWorkers = ref([
    {
        id: 1,
        name: 'default-worker-1',
        queue: 'default',
        connection: 'redis',
        status: 'running',
        processes: 2,
    },
    {
        id: 2,
        name: 'high-priority-worker',
        queue: 'high',
        connection: 'redis',
        status: 'running',
        processes: 1,
    },
    {
        id: 3,
        name: 'notifications-worker',
        queue: 'notifications',
        connection: 'redis',
        status: 'stopped',
        processes: 1,
    },
]);

const commandTemplates: Record<string, string[]> = {
    migrate: [
        'php artisan migrate',
        'Migrating: 2026_06_30_000001_create_plans_table',
        'Migrated:  2026_06_30_000001_create_plans_table (12.45ms)',
        'Migrating: 2026_06_30_000002_create_users_table',
        'Migrated:  2026_06_30_000002_create_users_table (18.90ms)',
        'Migrating: 2026_06_30_000003_create_servers_table',
        'Migrated:  2026_06_30_000003_create_servers_table (28.12ms)',
        'Database migration completed successfully!',
    ],
    'db:seed': [
        'php artisan db:seed',
        'Seeding: PlanSeeder',
        'Seeded:  PlanSeeder (4.20ms)',
        'Seeding: UserSeeder',
        'Seeded:  UserSeeder (9.80ms)',
        'Database seeding completed successfully!',
    ],
    'optimize:clear': [
        'php artisan optimize:clear',
        'Compiled views cleared!',
        'Application cache cleared!',
        'Route cache cleared!',
        'Configuration cache cleared!',
        'Compiled services and packages files removed!',
        'Caches cleared successfully!',
    ],
    'cache:clear': [
        'php artisan cache:clear',
        'Application cache cleared successfully!',
    ],
    'config:cache': [
        'php artisan config:cache',
        'Configuration cache cleared!',
        'Configuration cached successfully!',
    ],
    'route:cache': [
        'php artisan route:cache',
        'Route cache cleared!',
        'Routes cached successfully!',
    ],
    'storage:link': [
        'php artisan storage:link',
        'The [public/storage] link has been connected to [storage/app/public].',
    ],
};

function runArtisan() {
    if (isCommandRunning.value) {
return;
}

    isCommandRunning.value = true;
    commandLines.value = [];

    const cmd = selectedCommand.value;
    let logs = [
        ...(commandTemplates[cmd] || [
            `php artisan ${cmd} ${customParams.value}`,
            'Command executed successfully!',
        ]),
    ];

    if (cmd === 'custom' && customParams.value) {
        logs = [
            `php artisan ${customParams.value}`,
            'Running command...',
            'Output:',
            '  Success!',
            'Command completed.',
        ];
    }

    // Simulate command running
    toast.promise(
        new Promise((resolve) => {
            // Load command lines with interval
            commandLines.value = logs;
            setTimeout(() => {
                isCommandRunning.value = false;
                resolve(true);
            }, logs.length * 150);
        }),
        {
            loading: 'Running Artisan command...',
            success: `php artisan ${cmd} completed successfully!`,
            error: 'Command failed to run.',
        },
    );
}

function quickClearCache(type: string) {
    toast.promise(
        new Promise((resolve) => {
            setTimeout(() => resolve(true), 800);
        }),
        {
            loading: `Clearing ${type} cache...`,
            success: `${type.charAt(0).toUpperCase() + type.slice(1)} cache cleared successfully!`,
            error: 'Failed to clear cache.',
        },
    );
}

function toggleWorker(workerId: number) {
    const worker = queueWorkers.value.find((w) => w.id === workerId);

    if (!worker) {
return;
}

    worker.status = worker.status === 'running' ? 'stopped' : 'running';
    toast.success(
        `${worker.name} has been ${worker.status === 'running' ? 'started' : 'stopped'}!`,
    );
}

function restartWorker(workerId: number) {
    const worker = queueWorkers.value.find((w) => w.id === workerId);

    if (!worker) {
return;
}

    worker.status = 'restarting';

    setTimeout(() => {
        worker.status = 'running';
        toast.success(`${worker.name} has been restarted!`);
    }, 1000);
}

function addWorker() {
    const name = `worker-${Math.floor(Math.random() * 100) + 10}`;
    queueWorkers.value.push({
        id: queueWorkers.value.length + 1,
        name,
        queue: 'default',
        connection: 'redis',
        status: 'running',
        processes: 1,
    });
    toast.success(`New worker ${name} has been added!`);
}
</script>

<template>
    <Head title="Web Application Details" />

    <div class="space-y-6 p-4 md:p-6">
        <div>
            <Link
                href="/web-apps"
                class="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft class="mr-1 h-4 w-4" />
                Back to Web Applications
            </Link>
        </div>

        <div>
            <h1 class="text-2xl font-bold tracking-tight">{{ app.name }}</h1>
            <p class="text-muted-foreground">{{ app.domain }}</p>
        </div>

        <Tabs default-value="overview" class="space-y-4">
            <TabsList>
                <TabsTrigger value="overview">
                    <Activity class="mr-2 h-4 w-4" />
                    Overview
                </TabsTrigger>
                <TabsTrigger v-if="app.stack === 'laravel'" value="laravel">
                    <Terminal class="mr-2 h-4 w-4" />
                    Laravel
                </TabsTrigger>
                <TabsTrigger value="ssl" as-child>
                    <Link :href="`/web-apps/${app.id}/ssl`">
                        <Lock class="mr-2 h-4 w-4" />
                        SSL
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="env" as-child>
                    <Link :href="`/web-apps/${app.id}/env`">
                        <ServerIcon class="mr-2 h-4 w-4" />
                        Environment Variables
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="git" as-child>
                    <Link :href="`/web-apps/${app.id}/git`">
                        <GitBranch class="mr-2 h-4 w-4" />
                        Git
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="settings" as-child>
                    <Link :href="`/web-apps/${app.id}/settings`">
                        <Settings class="mr-2 h-4 w-4" />
                        Settings
                    </Link>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" class="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Application Information</CardTitle>
                        <CardDescription>
                            Overview of the web application configuration
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div class="space-y-1">
                                <p
                                    class="text-sm font-medium text-muted-foreground"
                                >
                                    Status
                                </p>
                                <Badge :variant="statusVariant(app.status)">
                                    {{ app.status }}
                                </Badge>
                            </div>

                            <div class="space-y-1">
                                <p
                                    class="text-sm font-medium text-muted-foreground"
                                >
                                    Domain
                                </p>
                                <div class="flex items-center gap-2">
                                    <Globe
                                        class="h-4 w-4 text-muted-foreground"
                                    />
                                    <span>{{ app.domain }}</span>
                                    <Lock
                                        v-if="app.ssl"
                                        class="h-4 w-4 text-green-500"
                                    />
                                </div>
                            </div>

                            <div class="space-y-1">
                                <p
                                    class="text-sm font-medium text-muted-foreground"
                                >
                                    PHP Version
                                </p>
                                <span>{{ app.php_version }}</span>
                            </div>

                            <div class="space-y-1">
                                <p
                                    class="text-sm font-medium text-muted-foreground"
                                >
                                    Web Server
                                </p>
                                <span>{{ app.web_server }}</span>
                            </div>

                            <div class="space-y-1">
                                <p
                                    class="text-sm font-medium text-muted-foreground"
                                >
                                    Stack
                                </p>
                                <Badge variant="secondary">{{
                                    app.stack
                                }}</Badge>
                            </div>

                            <div class="space-y-1">
                                <p
                                    class="text-sm font-medium text-muted-foreground"
                                >
                                    System User
                                </p>
                                <span>{{ app.system_user }}</span>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <p
                                class="text-sm font-medium text-muted-foreground"
                            >
                                Document Root
                            </p>
                            <code class="rounded bg-muted px-2 py-1 text-sm">
                                {{ app.document_root }}
                            </code>
                        </div>

                        <div class="space-y-1">
                            <p
                                class="text-sm font-medium text-muted-foreground"
                            >
                                Environment
                            </p>
                            <Badge
                                :variant="
                                    app.environment === 'production'
                                        ? 'default'
                                        : 'secondary'
                                "
                            >
                                {{ app.environment }}
                            </Badge>
                        </div>

                        <div
                            v-if="app.aliases && app.aliases.length > 0"
                            class="space-y-1"
                        >
                            <p
                                class="text-sm font-medium text-muted-foreground"
                            >
                                Aliases
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <Badge
                                    v-for="alias in app.aliases"
                                    :key="alias"
                                    variant="outline"
                                >
                                    {{ alias }}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Common management tasks for this web application
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-wrap gap-2">
                        <Button as-child>
                            <a
                                :href="`https://${app.domain}`"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Globe class="mr-2 h-4 w-4" />
                                Visit Site
                            </a>
                        </Button>
                        <Button variant="secondary">
                            <Activity class="mr-2 h-4 w-4" />
                            Restart
                        </Button>
                        <Button variant="secondary">
                            <ServerIcon class="mr-2 h-4 w-4" />
                            Restart PHP
                        </Button>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent
                v-if="app.stack === 'laravel'"
                value="laravel"
                class="space-y-4"
            >
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <!-- Artisan Command Runner -->
                    <Card>
                        <CardHeader>
                            <CardTitle class="flex items-center gap-2">
                                <Terminal class="h-5 w-5 text-primary" />
                                Artisan Command Runner
                            </CardTitle>
                            <CardDescription
                                >Run Laravel Artisan commands on your
                                server</CardDescription
                            >
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div class="flex gap-2">
                                <div class="flex-1">
                                    <select
                                        v-model="selectedCommand"
                                        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                                    >
                                        <option value="migrate">
                                            php artisan migrate
                                        </option>
                                        <option value="db:seed">
                                            php artisan db:seed
                                        </option>
                                        <option value="optimize:clear">
                                            php artisan optimize:clear
                                        </option>
                                        <option value="cache:clear">
                                            php artisan cache:clear
                                        </option>
                                        <option value="config:cache">
                                            php artisan config:cache
                                        </option>
                                        <option value="route:cache">
                                            php artisan route:cache
                                        </option>
                                        <option value="storage:link">
                                            php artisan storage:link
                                        </option>
                                        <option value="custom">
                                            Custom Command
                                        </option>
                                    </select>
                                </div>
                                <Button
                                    :disabled="isCommandRunning"
                                    @click="runArtisan"
                                >
                                    <Play
                                        v-if="!isCommandRunning"
                                        class="mr-2 h-4 w-4"
                                    />
                                    <RefreshCw
                                        v-else
                                        class="mr-2 h-4 w-4 animate-spin"
                                    />
                                    Run
                                </Button>
                            </div>

                            <!-- Custom Parameter input -->
                            <div
                                v-if="selectedCommand === 'custom'"
                                class="space-y-2"
                            >
                                <label
                                    class="text-xs font-medium text-muted-foreground"
                                    >Custom Command Parameters (without 'php
                                    artisan')</label
                                >
                                <input
                                    v-model="customParams"
                                    type="text"
                                    placeholder="e.g. queue:work --once"
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>

                            <div class="pt-2">
                                <TerminalOutput
                                    :lines="commandLines"
                                    :stream="commandStream"
                                    :speed="80"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Cache Management -->
                    <Card>
                        <CardHeader>
                            <CardTitle class="flex items-center gap-2">
                                <Zap class="h-5 w-5 text-primary" />
                                Cache Management
                            </CardTitle>
                            <CardDescription
                                >Clear application and configuration
                                caches</CardDescription
                            >
                        </CardHeader>
                        <CardContent class="grid grid-cols-2 gap-2">
                            <Button
                                variant="outline"
                                class="w-full justify-start gap-2"
                                @click="quickClearCache('config')"
                            >
                                <Zap class="h-4 w-4" />
                                Config Cache
                            </Button>
                            <Button
                                variant="outline"
                                class="w-full justify-start gap-2"
                                @click="quickClearCache('route')"
                            >
                                <Zap class="h-4 w-4" />
                                Route Cache
                            </Button>
                            <Button
                                variant="outline"
                                class="w-full justify-start gap-2"
                                @click="quickClearCache('view')"
                            >
                                <Zap class="h-4 w-4" />
                                View Cache
                            </Button>
                            <Button
                                variant="outline"
                                class="w-full justify-start gap-2"
                                @click="quickClearCache('application')"
                            >
                                <Zap class="h-4 w-4" />
                                App Cache
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <!-- Queue Workers -->
                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between"
                    >
                        <div>
                            <CardTitle class="flex items-center gap-2">
                                <Cpu class="h-5 w-5 text-primary" />
                                Queue Workers
                            </CardTitle>
                            <CardDescription
                                >Manage Laravel background queue worker
                                processes</CardDescription
                            >
                        </div>
                        <Button size="sm" @click="addWorker">Add Worker</Button>
                    </CardHeader>
                    <CardContent>
                        <div class="rounded-md border">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr
                                        class="border-b bg-muted/50 text-left font-medium text-muted-foreground"
                                    >
                                        <th class="p-3">Worker Name</th>
                                        <th class="p-3">Queue</th>
                                        <th class="p-3">Connection</th>
                                        <th class="p-3">Processes</th>
                                        <th class="p-3">Status</th>
                                        <th class="p-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="worker in queueWorkers"
                                        :key="worker.id"
                                        class="border-b transition-colors hover:bg-muted/50"
                                    >
                                        <td class="p-3 font-mono text-xs">
                                            {{ worker.name }}
                                        </td>
                                        <td class="p-3">
                                            <Badge variant="outline">{{
                                                worker.queue
                                            }}</Badge>
                                        </td>
                                        <td class="p-3 text-muted-foreground">
                                            {{ worker.connection }}
                                        </td>
                                        <td class="p-3">
                                            {{ worker.processes }}
                                        </td>
                                        <td class="p-3">
                                            <Badge
                                                :variant="
                                                    worker.status === 'running'
                                                        ? 'default'
                                                        : worker.status ===
                                                            'restarting'
                                                          ? 'secondary'
                                                          : 'destructive'
                                                "
                                            >
                                                {{ worker.status }}
                                            </Badge>
                                        </td>
                                        <td class="space-x-1 p-3 text-right">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                :disabled="
                                                    worker.status ===
                                                    'restarting'
                                                "
                                                @click="toggleWorker(worker.id)"
                                            >
                                                {{
                                                    worker.status === 'running'
                                                        ? 'Stop'
                                                        : 'Start'
                                                }}
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                :disabled="
                                                    worker.status ===
                                                        'restarting' ||
                                                    worker.status === 'stopped'
                                                "
                                                @click="
                                                    restartWorker(worker.id)
                                                "
                                            >
                                                Restart
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
</template>
