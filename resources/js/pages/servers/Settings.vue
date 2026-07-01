<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ArrowLeft, RefreshCw, Trash2 } from '@lucide/vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import servers from '@/routes/servers';
import type { Server } from '@/types';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Servers', href: servers.index() },
            { title: 'Settings', href: '#' },
        ],
    },
});

const props = defineProps<{
    server: Server;
}>();
</script>

<template>
    <Head title="Server Settings" />

    <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center gap-4">
            <Button variant="ghost" size="icon" as-child>
                <Link :href="servers.show(server.id)">
                    <ArrowLeft class="h-4 w-4" />
                </Link>
            </Button>
            <div>
                <h1 class="text-2xl font-bold tracking-tight">Server Settings</h1>
                <p class="text-sm text-muted-foreground">{{ server.name }}</p>
            </div>
        </div>

        <div class="max-w-2xl space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle class="text-sm font-medium">General</CardTitle>
                    <CardDescription>Basic server configuration</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                    <div class="space-y-2">
                        <Label for="name">Server Name</Label>
                        <Input id="name" :value="server.name" />
                    </div>
                    <div class="space-y-2">
                        <Label for="hostname">Hostname</Label>
                        <Input id="hostname" :value="server.hostname" />
                    </div>
                    <Button size="sm">Save Changes</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle class="text-sm font-medium">Agent</CardTitle>
                    <CardDescription>ServerPanel agent configuration</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-sm font-medium">Agent Version</div>
                            <div class="text-xs text-muted-foreground">v{{ server.agent_version }}</div>
                        </div>
                        <Button size="sm" variant="outline">
                            <RefreshCw class="mr-2 h-3 w-3" />
                            Update
                        </Button>
                    </div>
                    <Separator />
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-sm font-medium">Auto-update Agent</div>
                            <div class="text-xs text-muted-foreground">Automatically update to the latest version</div>
                        </div>
                        <Checkbox :default-checked="true" />
                    </div>
                    <Separator />
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-sm font-medium">Agent Token</div>
                            <div class="text-xs text-muted-foreground">Last rotated 25 days ago</div>
                        </div>
                        <Button size="sm" variant="outline">
                            <RefreshCw class="mr-2 h-3 w-3" />
                            Rotate Token
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle class="text-sm font-medium">Monitoring</CardTitle>
                    <CardDescription>Alert and monitoring preferences</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-sm font-medium">CPU Alert</div>
                            <div class="text-xs text-muted-foreground">Notify when CPU exceeds 80%</div>
                        </div>
                        <Checkbox :default-checked="true" />
                    </div>
                    <Separator />
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-sm font-medium">Disk Alert</div>
                            <div class="text-xs text-muted-foreground">Notify when disk usage exceeds 90%</div>
                        </div>
                        <Checkbox :default-checked="true" />
                    </div>
                    <Separator />
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-sm font-medium">Downtime Alert</div>
                            <div class="text-xs text-muted-foreground">Notify when server is unreachable</div>
                        </div>
                        <Checkbox :default-checked="true" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle class="text-sm font-medium">Danger Zone</CardTitle>
                    <CardDescription>Irreversible actions</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                    <div class="rounded-lg border border-red-200 p-4 dark:border-red-900">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-sm font-medium text-red-600 dark:text-red-400">Remove Server</div>
                                <div class="text-xs text-muted-foreground">Permanently remove this server from ServerPanel. The agent will be uninstalled.</div>
                            </div>
                            <Button variant="destructive" size="sm">
                                <Trash2 class="mr-2 h-3 w-3" />
                                Remove
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>
