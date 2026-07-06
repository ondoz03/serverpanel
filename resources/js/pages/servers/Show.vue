<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { Activity, AppWindow, ArrowLeft, Database, HardDrive, MemoryStick, Play, RefreshCw, ScrollText, Server as ServerIcon, Shield, Terminal, Timer, RotateCw } from '@lucide/vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import servers from '@/routes/servers';
import webApps from '@/routes/web-apps';
import databases from '@/routes/databases';
import firewall from '@/routes/firewall';
import cronJobs from '@/routes/cron-jobs';
import type { Server } from '@/types';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Servers', href: servers.index() },
            { title: 'Production-01', href: '#' },
        ],
    },
});

const props = defineProps<{
    server: Server;
}>();

function formatBytes(bytes: number): string {
    const gb = bytes / (1024 * 1024 * 1024);
    return `${gb.toFixed(1)} GB`;
}

function formatUptime(seconds: number): string {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}h`;
}

function usageColor(percent: number): string {
    if (percent > 90) return 'bg-red-500';
    if (percent > 70) return 'bg-yellow-500';
    return 'bg-green-500';
}

function statusVariant(status: string): 'success' | 'warning' | 'destructive' | 'secondary' {
    switch (status) {
        case 'active': return 'success' as const;
        case 'provisioning': return 'warning' as const;
        case 'error': return 'destructive' as const;
        default: return 'secondary' as const;
    }
}

function serviceVariant(status: string): 'success' | 'secondary' | 'destructive' | 'outline' {
    switch (status) {
        case 'active': return 'success' as const;
        case 'inactive': return 'secondary' as const;
        case 'failed': return 'destructive' as const;
        default: return 'outline' as const;
    }
}
</script>

<template>
    <Head :title="server.name" />

    <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center gap-4">
            <Button variant="ghost" size="icon" as-child>
                <Link :href="servers.index()">
                    <ArrowLeft class="h-4 w-4" />
                </Link>
            </Button>
            <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ServerIcon class="h-5 w-5 text-primary" />
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h1 class="text-2xl font-bold tracking-tight">{{ server.name }}</h1>
                        <Badge :variant="statusVariant(server.status)">
                            {{ server.status }}
                        </Badge>
                    </div>
                    <p class="text-sm text-muted-foreground">{{ server.ip_address }} · {{ server.os }} · {{ server.provider }} {{ server.datacenter }}</p>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" as-child>
                <Link :href="servers.monitoring(server.id)">
                    <Activity class="mr-2 h-4 w-4" />
                    Monitoring
                </Link>
            </Button>
            <Button size="sm" variant="outline">
                <Terminal class="mr-2 h-4 w-4" />
                SSH Connect
            </Button>
            <Button size="sm" variant="outline">
                <RefreshCw class="mr-2 h-4 w-4" />
                Restart Agent
            </Button>
            <Button size="sm" variant="outline">
                <Play class="mr-2 h-4 w-4" />
                Run Command
            </Button>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
            <div class="space-y-6 lg:col-span-2">
                <div class="grid gap-4 sm:grid-cols-2">
                    <Card>
                        <CardHeader class="pb-2">
                            <CardTitle class="flex items-center gap-2 text-sm font-medium">
                                <Activity class="h-4 w-4" />
                                CPU
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="mb-1 text-2xl font-bold">{{ server.cpu_usage }}%</div>
                            <div class="h-2 overflow-hidden rounded-full bg-secondary">
                                <div :class="['h-full rounded-full', usageColor(server.cpu_usage)]" :style="{ width: server.cpu_usage + '%' }" />
                            </div>
                            <p class="mt-1 text-xs text-muted-foreground">Load: 0.45, 0.32, 0.28</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader class="pb-2">
                            <CardTitle class="flex items-center gap-2 text-sm font-medium">
                                <MemoryStick class="h-4 w-4" />
                                RAM
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="mb-1 text-2xl font-bold">{{ ((server.memory_used / server.memory_total) * 100).toFixed(0) }}%</div>
                            <div class="h-2 overflow-hidden rounded-full bg-secondary">
                                <div :class="['h-full rounded-full', usageColor((server.memory_used / server.memory_total) * 100)]"
                                    :style="{ width: (server.memory_used / server.memory_total) * 100 + '%' }" />
                            </div>
                            <p class="mt-1 text-xs text-muted-foreground">{{ formatBytes(server.memory_used) }} / {{ formatBytes(server.memory_total) }}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader class="pb-2">
                            <CardTitle class="flex items-center gap-2 text-sm font-medium">
                                <HardDrive class="h-4 w-4" />
                                Disk
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="mb-1 text-2xl font-bold">{{ ((server.disk_used / server.disk_total) * 100).toFixed(0) }}%</div>
                            <div class="h-2 overflow-hidden rounded-full bg-secondary">
                                <div :class="['h-full rounded-full', usageColor((server.disk_used / server.disk_total) * 100)]"
                                    :style="{ width: (server.disk_used / server.disk_total) * 100 + '%' }" />
                            </div>
                            <p class="mt-1 text-xs text-muted-foreground">{{ formatBytes(server.disk_used) }} / {{ formatBytes(server.disk_total) }}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader class="pb-2">
                            <CardTitle class="flex items-center gap-2 text-sm font-medium">
                                <Timer class="h-4 w-4" />
                                Uptime
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="mb-1 text-2xl font-bold">{{ formatUptime(server.uptime) }}</div>
                            <p class="mt-1 text-xs text-muted-foreground">Agent v{{ server.agent_version }} · Last seen {{ server.agent_last_seen }}</p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle class="text-sm font-medium">Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-3">
                            <div v-for="svc in server.services" :key="svc.name"
                                class="flex items-center justify-between rounded-lg border p-3">
                                <div class="flex items-center gap-3">
                                    <div :class="['h-2 w-2 rounded-full', svc.status === 'active' ? 'bg-green-500' : svc.status === 'failed' ? 'bg-red-500' : 'bg-yellow-500']" />
                                    <div>
                                        <div class="text-sm font-medium">{{ svc.name }}</div>
                                        <div class="text-xs text-muted-foreground">v{{ svc.version }}</div>
                                    </div>
                                </div>
                                    <div class="flex items-center gap-2">
                                        <Badge :variant="serviceVariant(svc.status)">{{ svc.status }}</Badge>
                                        <Button size="sm" variant="ghost" @click="router.post(`/servers/${server.id}/services/${svc.name}/restart`)">
                                            <RotateCw class="h-3 w-3" />
                                        </Button>
                                    </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div class="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle class="text-sm font-medium">Quick Links</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-2">
                        <Button variant="outline" class="w-full justify-start" as-child>
                            <Link :href="webApps.index()">
                                <AppWindow class="mr-2 h-4 w-4" />
                                Web Apps ({{ server.web_apps_count }})
                            </Link>
                        </Button>
                        <Button variant="outline" class="w-full justify-start" as-child>
                            <Link :href="databases.index()">
                                <Database class="mr-2 h-4 w-4" />
                                Databases ({{ server.databases_count }})
                            </Link>
                        </Button>
                        <Button variant="outline" class="w-full justify-start" as-child>
                            <Link :href="firewall.index()">
                                <Shield class="mr-2 h-4 w-4" />
                                Firewall ({{ server.firewall_rules_count }})
                            </Link>
                        </Button>
                        <Button variant="outline" class="w-full justify-start" as-child>
                            <Link :href="cronJobs.index()">
                                <Timer class="mr-2 h-4 w-4" />
                                Cron Jobs ({{ server.cron_jobs_count }})
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle class="text-sm font-medium">Server Info</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-3 text-sm">
                        <div class="flex justify-between">
                            <span class="text-muted-foreground">Hostname</span>
                            <span class="font-mono text-xs">{{ server.hostname }}</span>
                        </div>
                        <Separator />
                        <div class="flex justify-between">
                            <span class="text-muted-foreground">IP Address</span>
                            <span class="font-mono text-xs">{{ server.ip_address }}</span>
                        </div>
                        <Separator />
                        <div class="flex justify-between">
                            <span class="text-muted-foreground">OS</span>
                            <span>{{ server.os }}</span>
                        </div>
                        <Separator />
                        <div class="flex justify-between">
                            <span class="text-muted-foreground">Plan</span>
                            <span>{{ server.plan_name }}</span>
                        </div>
                        <Separator />
                        <div class="flex justify-between">
                            <span class="text-muted-foreground">Agent</span>
                            <span>v{{ server.agent_version }}</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle class="text-sm font-medium">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-3 text-sm">
                            <div class="rounded-lg bg-muted p-2">
                                <div class="text-xs font-medium">Service restarted</div>
                                <div class="text-xs text-muted-foreground">nginx restarted successfully · 2m ago</div>
                            </div>
                            <div class="rounded-lg bg-muted p-2">
                                <div class="text-xs font-medium">SSL renewed</div>
                                <div class="text-xs text-muted-foreground">client.app.com · 1h ago</div>
                            </div>
                            <div class="rounded-lg bg-muted p-2">
                                <div class="text-xs font-medium">Deployment</div>
                                <div class="text-xs text-muted-foreground">main@abc1234 deployed · 3h ago</div>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" class="mt-3 w-full">
                            <ScrollText class="mr-2 h-4 w-4" />
                            View All Activity
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>
