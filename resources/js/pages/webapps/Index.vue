<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { AppWindow, Globe, Lock, Plus, Server as ServerIcon } from '@lucide/vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { WebApplication } from '@/types';

defineProps<{ apps: WebApplication[] }>();

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Web Apps', href: '/web-apps' }],
    },
});

function statusVariant(s: string) {
    switch (s) { case 'active': return 'success' as const; case 'error': return 'destructive' as const; default: return 'secondary' as const; }
}

function envVariant(e: string) {
    switch (e) { case 'production': return 'default' as const; case 'staging': return 'warning' as const; default: return 'secondary' as const; }
}
</script>

<template>
    <Head title="Web Applications" />
    <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold tracking-tight">Web Applications</h1>
                <p class="text-sm text-muted-foreground">Manage your web applications</p>
            </div>
            <Button as-child><Link :href="'/web-apps/create'"><Plus class="mr-2 h-4 w-4" />Add Web App</Link></Button>
        </div>

        <div v-if="apps.length === 0" class="flex flex-col items-center justify-center rounded-xl border border-dashed py-16">
            <AppWindow class="mb-4 h-12 w-12 text-muted-foreground" />
            <h2 class="text-lg font-medium">No web apps yet</h2>
            <p class="mb-4 text-sm text-muted-foreground">Add your first web application</p>
            <Button as-child><Link :href="'/web-apps/create'"><Plus class="mr-2 h-4 w-4" />Add Web App</Link></Button>
        </div>

        <div v-else class="space-y-3">
            <div v-for="app in apps" :key="app.id" class="rounded-xl border p-4 transition-shadow hover:shadow-md">
                <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Globe class="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <Link :href="`/web-apps/${app.id}`" class="text-base font-medium hover:underline">{{ app.name }}</Link>
                            <p class="text-sm text-muted-foreground">{{ app.domain }}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <Badge :variant="envVariant(app.environment)">{{ app.environment }}</Badge>
                        <Badge :variant="statusVariant(app.status)">{{ app.status }}</Badge>
                    </div>
                </div>
                <div class="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span class="flex items-center gap-1"><Lock class="h-3 w-3" />{{ app.ssl?.status === 'active' ? 'SSL Active' : 'No SSL' }}</span>
                    <span>PHP {{ app.php_version }}</span>
                    <span>{{ app.web_server }}</span>
                    <span>{{ app.stack }}</span>
                    <span class="flex items-center gap-1"><ServerIcon class="h-3 w-3" />{{ app.system_user }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
