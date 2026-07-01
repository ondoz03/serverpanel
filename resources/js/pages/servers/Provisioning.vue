<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ArrowLeft, CheckCircle2, Circle, Terminal } from '@lucide/vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import servers from '@/routes/servers';
import type { Server } from '@/types';
import { onMounted, ref } from 'vue';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Servers', href: servers.index() },
            { title: 'Provisioning', href: '#' },
        ],
    },
});

const props = defineProps<{
    server: Server;
}>();

const logs = ref<Array<{ level: 'info' | 'success' | 'error' | 'pending'; message: string; timestamp: string }>>([]);
const progress = ref(0);
const completed = ref(false);

const provisioningSteps = [
    { message: 'Detecting operating system...', level: 'info' as const },
    { message: 'OS detected: Ubuntu 22.04.4 LTS (x86_64)', level: 'success' as const },
    { message: 'Updating package repositories...', level: 'info' as const },
    { message: 'Packages updated successfully', level: 'success' as const },
    { message: 'Installing Nginx (latest stable)...', level: 'info' as const },
    { message: 'Nginx 1.26.2 installed and configured', level: 'success' as const },
    { message: 'Adding ondrej/php PPA repository...', level: 'info' as const },
    { message: 'PHP PPA added successfully', level: 'success' as const },
    { message: 'Installing PHP 8.3...', level: 'info' as const },
    { message: 'PHP 8.3.12 installed with extensions: cli, fpm, mysql, redis, curl, mbstring, xml, bcmath, gd, zip', level: 'success' as const },
    { message: 'Configuring PHP-FPM pool...', level: 'info' as const },
    { message: 'PHP-FPM pool configured (max_children=50, memory_limit=256M)', level: 'success' as const },
    { message: 'Installing MySQL 8.0...', level: 'info' as const },
    { message: 'MySQL 8.0.39 installed and secured', level: 'success' as const },
    { message: 'Installing Redis 7...', level: 'info' as const },
    { message: 'Redis 7.4.2 installed and configured', level: 'success' as const },
    { message: 'Installing Composer 2...', level: 'info' as const },
    { message: 'Composer 2.8.6 installed globally', level: 'success' as const },
    { message: 'Setting up Node.js 22 via nvm...', level: 'info' as const },
    { message: 'Node.js 22.13.0 installed (npm 11.2.0)', level: 'success' as const },
    { message: 'Configuring firewall (UFW)...', level: 'info' as const },
    { message: 'UFW active — ports 22, 80, 443, 21000 open', level: 'success' as const },
    { message: 'Setting up fail2ban...', level: 'info' as const },
    { message: 'fail2ban configured for SSH protection', level: 'success' as const },
    { message: 'Optimizing system parameters...', level: 'info' as const },
    { message: 'System optimized (swappiness=10, max open files=65535)', level: 'success' as const },
    { message: 'Installation complete!', level: 'success' as const },
];

function addLog(entry: { level: 'info' | 'success' | 'error' | 'pending'; message: string; timestamp: string }) {
    logs.value.push(entry);
    const el = document.getElementById('log-scroll');
    if (el) setTimeout(() => { el.scrollTop = el.scrollHeight; }, 50);
}

let index = 0;

function runProvisioning() {
    index = 0;
    logs.value = [];
    progress.value = 0;
    completed.value = false;
    tick();
}

function tick() {
    if (index >= provisioningSteps.length) {
        completed.value = true;
        progress.value = 100;
        return;
    }

    const step = provisioningSteps[index];
    addLog({
        level: step.level,
        message: step.message,
        timestamp: new Date().toLocaleTimeString(),
    });

    progress.value = Math.round(((index + 1) / provisioningSteps.length) * 100);
    index++;

    const delay = step.level === 'info' ? 400 + Math.random() * 600 : 200;
    setTimeout(tick, delay);
}

onMounted(() => {
    runProvisioning();
});
</script>

<template>
    <Head title="Provisioning" />

    <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center gap-4">
            <Button variant="ghost" size="icon" as-child>
                <Link :href="servers.show(server.id)">
                    <ArrowLeft class="h-4 w-4" />
                </Link>
            </Button>
            <div class="flex-1">
                <h1 class="text-2xl font-bold tracking-tight">Provisioning</h1>
                <p class="text-sm text-muted-foreground">{{ server.name }} · Installing LEMP stack</p>
            </div>
            <div class="flex items-center gap-3">
                <Badge :variant="completed ? 'success' : 'warning'">
                    <Circle v-if="!completed" class="mr-1 h-2 w-2 animate-pulse fill-current" />
                    <CheckCircle2 v-else class="mr-1 h-3 w-3" />
                    {{ completed ? 'Completed' : 'In Progress' }}
                </Badge>
                <Button v-if="completed" variant="outline" size="sm" @click="runProvisioning">
                    Re-run
                </Button>
            </div>
        </div>

        <div class="space-y-2">
            <div class="flex items-center justify-between text-sm">
                <span class="text-muted-foreground">Progress</span>
                <span class="font-medium">{{ progress }}%</span>
            </div>
            <div class="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                    class="h-full rounded-full bg-primary transition-all duration-500"
                    :style="{ width: progress + '%' }"
                />
            </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
            <div class="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle class="flex items-center gap-2 text-sm font-medium">
                            <Terminal class="h-4 w-4" />
                            Provisioning Log
                        </CardTitle>
                        <CardDescription>Real-time output from the installation process</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div
                            id="log-scroll"
                            class="h-[500px] overflow-y-auto rounded-lg bg-black p-4 font-mono text-xs leading-relaxed"
                        >
                            <div v-if="logs.length === 0" class="text-green-400">
                                <span class="text-green-600">$</span> Initializing provisioning...
                            </div>
                            <div v-for="(log, i) in logs" :key="i" class="flex gap-2">
                                <span class="shrink-0 text-gray-600">{{ log.timestamp }}</span>
                                <span v-if="log.level === 'error'" class="text-red-400">✗</span>
                                <span v-else-if="log.level === 'success'" class="text-green-400">✓</span>
                                <span v-else-if="log.level === 'pending'" class="text-yellow-400">◌</span>
                                <span v-else class="text-gray-400">›</span>
                                <span :class="log.level === 'error' ? 'text-red-300' : log.level === 'success' ? 'text-green-300' : 'text-gray-200'">
                                    {{ log.message }}
                                </span>
                            </div>
                            <div v-if="!completed" class="mt-2 animate-pulse text-green-400">
                                <span class="text-green-600">$</span> Processing...
                            </div>
                            <div v-else class="mt-2 text-green-400 font-medium">
                                <span class="text-green-600">$</span> ✓ Provisioning completed successfully
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div class="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle class="text-sm font-medium">Installation Summary</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-3 text-sm">
                        <div class="flex items-center justify-between">
                            <span class="text-muted-foreground">Status</span>
                            <Badge :variant="completed ? 'success' : 'warning'">
                                {{ completed ? 'Completed' : 'Running' }}
                            </Badge>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-muted-foreground">Components</span>
                            <span>7</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-muted-foreground">Time Elapsed</span>
                            <span>{{ completed ? '4m 23s' : 'Running...' }}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-muted-foreground">Errors</span>
                            <span class="text-green-500">0</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle class="text-sm font-medium">Components</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-2">
                        <div v-for="comp in ['Nginx', 'PHP 8.3', 'MySQL 8.0', 'Redis 7', 'Composer 2', 'Node.js 22', 'UFW']" :key="comp"
                            class="flex items-center gap-2 rounded-lg bg-muted p-2 text-sm">
                            <CheckCircle2 v-if="completed" class="h-4 w-4 text-green-500" />
                            <Circle v-else class="h-4 w-4 text-yellow-500" />
                            <span>{{ comp }}</span>
                        </div>
                    </CardContent>
                </Card>

                <div v-if="completed" class="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
                    <p class="font-medium">Server is ready!</p>
                    <p class="mt-1 text-xs">Your server has been provisioned. You can now add web applications, databases, and configure services.</p>
                    <Button size="sm" class="mt-3" as-child>
                        <Link :href="servers.show(server.id)">
                            Go to Server
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>
