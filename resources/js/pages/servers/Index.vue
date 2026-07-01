<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Activity, Circle, HardDrive, MemoryStick, Network, Plus, Server as ServerIcon } from '@lucide/vue';
import servers from '@/routes/servers';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Server } from '@/types';

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Servers', href: '/servers' }],
    },
});

const props = defineProps<{
    servers: Server[];
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

function statusVariant(status: string): string {
    switch (status) {
        case 'active': return 'success';
        case 'provisioning': return 'warning';
        case 'error': return 'destructive';
        default: return 'secondary';
    }
}

function usageColor(percent: number): string {
    if (percent > 90) return 'bg-red-500';
    if (percent > 70) return 'bg-yellow-500';
    return 'bg-green-500';
}
</script>

<template>
    <Head title="Servers" />

    <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold tracking-tight">Servers</h1>
                <p class="text-sm text-muted-foreground">Manage your connected servers</p>
            </div>
            <Button as-child>
                <Link :href="servers.create()">
                    <Plus class="mr-2 h-4 w-4" />
                    Add Server
                </Link>
            </Button>
        </div>

        <div v-if="servers.length === 0" class="flex flex-col items-center justify-center rounded-xl border border-dashed py-16">
            <ServerIcon class="mb-4 h-12 w-12 text-muted-foreground" />
            <h2 class="text-lg font-medium">No servers yet</h2>
            <p class="mb-4 text-sm text-muted-foreground">Connect your first server to get started</p>
            <Button as-child>
                <Link :href="servers.create()">
                    <Plus class="mr-2 h-4 w-4" />
                    Add Your First Server
                </Link>
            </Button>
        </div>

        <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="server in servers" :key="server.id">
                <Card class="overflow-hidden transition-shadow hover:shadow-md">
                    <CardHeader class="pb-3">
                        <div class="flex items-start justify-between">
                            <div class="flex items-center gap-3">
                                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <ServerIcon class="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <CardTitle class="text-base">
                                        <Link :href="`/servers/${server.id}`" class="hover:underline">
                                            {{ server.name }}
                                        </Link>
                                    </CardTitle>
                                    <p class="text-xs text-muted-foreground">{{ server.ip_address }}</p>
                                </div>
                            </div>
                            <Badge :variant="statusVariant(server.status)">
                                <Circle class="mr-1 h-2 w-2 fill-current" />
                                {{ server.status }}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex items-center gap-4 text-xs text-muted-foreground">
                            <span class="font-medium text-foreground">{{ server.os }}</span>
                            <span>{{ server.provider }}</span>
                            <span>{{ server.datacenter }}</span>
                        </div>

                        <div class="space-y-2">
                            <div class="flex items-center justify-between text-xs">
                                <span class="flex items-center gap-1">
                                    <Activity class="h-3 w-3" />
                                    CPU
                                </span>
                                <span>{{ server.cpu_usage }}%</span>
                            </div>
                            <div class="h-1.5 overflow-hidden rounded-full bg-secondary">
                                <div
                                    :class="['h-full rounded-full transition-all', usageColor(server.cpu_usage)]"
                                    :style="{ width: server.cpu_usage + '%' }"
                                />
                            </div>

                            <div class="flex items-center justify-between text-xs">
                                <span class="flex items-center gap-1">
                                    <MemoryStick class="h-3 w-3" />
                                    RAM
                                </span>
                                <span>{{ formatBytes(server.memory_used) }} / {{ formatBytes(server.memory_total) }}</span>
                            </div>
                            <div class="h-1.5 overflow-hidden rounded-full bg-secondary">
                                <div
                                    :class="['h-full rounded-full transition-all', usageColor((server.memory_used / server.memory_total) * 100)]"
                                    :style="{ width: (server.memory_used / server.memory_total) * 100 + '%' }"
                                />
                            </div>

                            <div class="flex items-center justify-between text-xs">
                                <span class="flex items-center gap-1">
                                    <HardDrive class="h-3 w-3" />
                                    Disk
                                </span>
                                <span>{{ formatBytes(server.disk_used) }} / {{ formatBytes(server.disk_total) }}</span>
                            </div>
                            <div class="h-1.5 overflow-hidden rounded-full bg-secondary">
                                <div
                                    :class="['h-full rounded-full transition-all', usageColor((server.disk_used / server.disk_total) * 100)]"
                                    :style="{ width: (server.disk_used / server.disk_total) * 100 + '%' }"
                                />
                            </div>
                        </div>

                        <div class="flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
                            <span class="flex items-center gap-1">
                                <Network class="h-3 w-3" />
                                Uptime {{ formatUptime(server.uptime) }}
                            </span>
                            <div class="flex gap-1">
                                <Badge v-for="svc in server.services" :key="svc.name" variant="outline" class="text-[10px]">
                                    {{ svc.name }}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>
