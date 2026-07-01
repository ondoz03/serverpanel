<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Activity, AppWindow, HardDrive, Server as ServerIcon } from '@lucide/vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dashboard } from '@/routes';
import servers from '@/routes/servers';

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Dashboard', href: dashboard() }],
    },
});

defineProps<{
    stats: {
        total_servers: number;
        active_servers: number;
        total_apps: number;
        alerts: number;
    };
}>();
</script>

<template>
    <Head title="Dashboard" />

    <div class="flex flex-col gap-6 p-4">
        <div>
            <h1 class="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p class="text-sm text-muted-foreground">Overview of your infrastructure</p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardTitle class="text-sm font-medium">Total Servers</CardTitle>
                    <ServerIcon class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ stats.total_servers }}</div>
                    <p class="text-xs text-muted-foreground">{{ stats.active_servers }} active</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardTitle class="text-sm font-medium">Active Servers</CardTitle>
                    <Activity class="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ stats.active_servers }}</div>
                    <p class="text-xs text-muted-foreground">{{ stats.total_servers - stats.active_servers }} offline</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardTitle class="text-sm font-medium">Web Applications</CardTitle>
                    <AppWindow class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ stats.total_apps }}</div>
                    <p class="text-xs text-muted-foreground">across all servers</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardTitle class="text-sm font-medium">Alerts</CardTitle>
                    <HardDrive class="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ stats.alerts }}</div>
                    <p class="text-xs text-muted-foreground">need attention</p>
                </CardContent>
            </Card>
        </div>

        <div class="flex items-center justify-center rounded-xl border border-dashed py-24">
            <div class="flex flex-col items-center gap-2 text-center">
                <ServerIcon class="h-8 w-8 text-muted-foreground" />
                <h2 class="text-lg font-medium">Server Overview</h2>
                <p class="text-sm text-muted-foreground">Real-time metrics and activity will appear here</p>
                <Link :href="servers.index()" class="mt-2 text-sm text-primary hover:underline">
                    View all servers →
                </Link>
            </div>
        </div>
    </div>
</template>
