<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Activity, ArrowLeft, HardDrive, MemoryStick, Network, Timer } from '@lucide/vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import servers from '@/routes/servers';
import type { Server } from '@/types';
import { ref } from 'vue';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Servers', href: servers.index() },
            { title: 'Production-01', href: '/servers/prod-1' },
            { title: 'Monitoring', href: '#' },
        ],
    },
});

defineProps<{
    server: Server;
}>();

type Period = '1h' | '6h' | '24h' | '7d' | '30d';
const period = ref<Period>('1h');

const cpuHistory = [23, 45, 12, 67, 34, 56, 23, 45, 67, 34, 23, 56, 45, 34, 67, 23, 45, 56, 34, 23, 45, 67, 34, 56];
const memHistory = [45, 48, 52, 55, 50, 47, 44, 48, 52, 55, 50, 47, 45, 48, 52, 55, 50, 47, 44, 48, 52, 55, 50, 47];
const diskHistory = [40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51];
const netInHistory = [1.2, 2.4, 0.8, 3.1, 1.5, 2.2, 1.8, 2.9, 1.1, 2.7, 0.5, 1.9, 2.1, 1.4, 2.8, 0.9, 2.5, 1.7, 2.3, 1.3, 2.6, 1.0, 2.0, 1.6];

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
</script>

<template>
    <Head title="Monitoring" />

    <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center gap-4">
            <Button variant="ghost" size="icon" as-child>
                <Link :href="`/servers/${server.id}`">
                    <ArrowLeft class="h-4 w-4" />
                </Link>
            </Button>
            <div>
                <h1 class="text-2xl font-bold tracking-tight">Monitoring</h1>
                <p class="text-sm text-muted-foreground">{{ server.name }} · Real-time metrics</p>
            </div>
            <div class="ml-auto">
                <Select v-model="period">
                    <SelectTrigger class="w-24">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1h">1 Hour</SelectItem>
                        <SelectItem value="6h">6 Hours</SelectItem>
                        <SelectItem value="24h">24 Hours</SelectItem>
                        <SelectItem value="7d">7 Days</SelectItem>
                        <SelectItem value="30d">30 Days</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader class="pb-2">
                    <CardTitle class="flex items-center gap-2 text-sm font-medium">
                        <Activity class="h-4 w-4 text-blue-500" />
                        CPU
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ server.cpu_usage }}%</div>
                    <div class="mt-2 flex items-end gap-[2px]">
                        <div v-for="(val, i) in cpuHistory.slice(-12)" :key="i"
                            class="h-16 w-full rounded-sm bg-blue-500/20"
                            :style="{ height: (val / 100) * 64 + 'px' }" />
                    </div>
                    <p class="mt-1 text-xs text-muted-foreground">Avg: 38% · Max: 67%</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="pb-2">
                    <CardTitle class="flex items-center gap-2 text-sm font-medium">
                        <MemoryStick class="h-4 w-4 text-green-500" />
                        RAM
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ ((server.memory_used / server.memory_total) * 100).toFixed(0) }}%</div>
                    <div class="mt-2 flex items-end gap-[2px]">
                        <div v-for="(val, i) in memHistory.slice(-12)" :key="i"
                            class="h-16 w-full rounded-sm bg-green-500/20"
                            :style="{ height: (val / 100) * 64 + 'px' }" />
                    </div>
                    <p class="mt-1 text-xs text-muted-foreground">{{ formatBytes(server.memory_used) }} / {{ formatBytes(server.memory_total) }}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="pb-2">
                    <CardTitle class="flex items-center gap-2 text-sm font-medium">
                        <HardDrive class="h-4 w-4 text-yellow-500" />
                        Disk
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ ((server.disk_used / server.disk_total) * 100).toFixed(0) }}%</div>
                    <div class="mt-2 flex items-end gap-[2px]">
                        <div v-for="(val, i) in diskHistory.slice(-12)" :key="i"
                            class="h-16 w-full rounded-sm bg-yellow-500/20"
                            :style="{ height: (val / 100) * 64 + 'px' }" />
                    </div>
                    <p class="mt-1 text-xs text-muted-foreground">{{ formatBytes(server.disk_used) }} / {{ formatBytes(server.disk_total) }}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="pb-2">
                    <CardTitle class="flex items-center gap-2 text-sm font-medium">
                        <Network class="h-4 w-4 text-purple-500" />
                        Network
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">2.4 Mbps</div>
                    <div class="mt-2 flex items-end gap-[2px]">
                        <div v-for="(val, i) in netInHistory.slice(-12)" :key="i"
                            class="h-16 w-full rounded-sm bg-purple-500/20"
                            :style="{ height: (val / 3.5) * 64 + 'px' }" />
                    </div>
                    <p class="mt-1 text-xs text-muted-foreground">In: 2.4 Mbps · Out: 1.2 Mbps</p>
                </CardContent>
            </Card>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle class="text-sm font-medium">CPU Usage History</CardTitle>
                    <CardDescription>Last {{ period }} of CPU utilization</CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="relative h-48">
                        <svg class="h-full w-full" viewBox="0 0 240 120" preserveAspectRatio="none">
                            <polyline
                                :points="cpuHistory.map((v, i) => `${(i / (cpuHistory.length - 1)) * 240},${120 - (v / 100) * 120}`).join(' ')"
                                fill="none" stroke="currentColor" stroke-width="2"
                                class="text-blue-500" />
                        </svg>
                    </div>
                    <div class="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>{{ period === '1h' ? '1 hour ago' : period === '24h' ? '24 hours ago' : '7 days ago' }}</span>
                        <span>Now</span>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle class="text-sm font-medium">Memory Usage History</CardTitle>
                    <CardDescription>Last {{ period }} of RAM utilization</CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="relative h-48">
                        <svg class="h-full w-full" viewBox="0 0 240 120" preserveAspectRatio="none">
                            <polyline
                                :points="memHistory.map((v, i) => `${(i / (memHistory.length - 1)) * 240},${120 - (v / 100) * 120}`).join(' ')"
                                fill="none" stroke="currentColor" stroke-width="2"
                                class="text-green-500" />
                        </svg>
                    </div>
                    <div class="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>{{ period === '1h' ? '1 hour ago' : period === '24h' ? '24 hours ago' : '7 days ago' }}</span>
                        <span>Now</span>
                    </div>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle class="text-sm font-medium">Service Status</CardTitle>
                <CardDescription>Current state of server services</CardDescription>
            </CardHeader>
            <CardContent>
                <div class="space-y-2">
                    <div v-for="svc in server.services" :key="svc.name"
                        class="flex items-center justify-between rounded-lg border p-3">
                        <div class="flex items-center gap-3">
                            <div :class="['h-2 w-2 rounded-full', svc.status === 'active' ? 'bg-green-500' : 'bg-red-500']" />
                            <span class="text-sm font-medium">{{ svc.name }}</span>
                            <span class="text-xs text-muted-foreground">v{{ svc.version }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Badge :variant="svc.status === 'active' ? 'success' : 'destructive'">{{ svc.status }}</Badge>
                            <span class="text-xs text-muted-foreground">{{ svc.status === 'active' ? 'Running' : 'Stopped' }}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
