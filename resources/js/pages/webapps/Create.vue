<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ArrowLeft } from '@lucide/vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Web Apps', href: '/web-apps' }, { title: 'Create', href: '#' }],
    },
});
</script>

<template>
    <Head title="Add Web App" />
    <div class="mx-auto max-w-2xl p-4">
        <div class="mb-6">
            <Button variant="ghost" as-child><Link :href="'/web-apps'" class="gap-2"><ArrowLeft class="h-4 w-4" />Back</Link></Button>
        </div>
        <h1 class="mb-2 text-2xl font-bold">Add New Web Application</h1>
        <p class="mb-6 text-sm text-muted-foreground">Configure a new web app on your server</p>

        <Card>
            <CardHeader><CardTitle class="text-sm">Application Details</CardTitle><CardDescription>Basic information about your web app</CardDescription></CardHeader>
            <CardContent class="space-y-4">
                <div class="space-y-2"><Label>Application Name</Label><Input placeholder="e.g. Company Website" /></div>
                <div class="space-y-2"><Label>Domain</Label><Input placeholder="example.com" /></div>
                <div class="space-y-2"><Label>PHP Version</Label><Select><SelectTrigger><SelectValue placeholder="Select version" /></SelectTrigger><SelectContent><SelectItem value="8.4">PHP 8.4</SelectItem><SelectItem value="8.3">PHP 8.3</SelectItem><SelectItem value="8.2">PHP 8.2</SelectItem></SelectContent></Select></div>
                <div class="space-y-2"><Label>Web Server</Label><Select><SelectTrigger><SelectValue placeholder="Select server" /></SelectTrigger><SelectContent><SelectItem value="nginx">Nginx</SelectItem><SelectItem value="nginx_apache">Nginx + Apache</SelectItem></SelectContent></Select></div>
                <Separator />
                <div class="space-y-2"><Label>Stack</Label><Select><SelectTrigger><SelectValue placeholder="Select stack" /></SelectTrigger><SelectContent><SelectItem value="laravel">Laravel</SelectItem><SelectItem value="wordpress">WordPress</SelectItem><SelectItem value="nodejs">Node.js</SelectItem><SelectItem value="static">Static HTML</SelectItem></SelectContent></Select></div>
                <div class="space-y-2"><Label>Environment</Label><Select><SelectTrigger><SelectValue placeholder="Select environment" /></SelectTrigger><SelectContent><SelectItem value="production">Production</SelectItem><SelectItem value="staging">Staging</SelectItem><SelectItem value="development">Development</SelectItem></SelectContent></Select></div>
                <Button class="mt-4">Create Web App</Button>
            </CardContent>
        </Card>
    </div>
</template>
