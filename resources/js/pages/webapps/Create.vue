<script setup lang="ts">
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ArrowLeft, RefreshCw } from '@lucide/vue';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { toast } from 'vue-sonner';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Web Apps', href: '/web-apps' },
            { title: 'Create', href: '#' },
        ],
    },
});

const isCreating = ref(false);
const appName = ref('');
const domainInput = ref('');
const phpVersion = ref('8.3');
const webServer = ref('nginx');
const stackType = ref('laravel');
const environmentType = ref('production');

function handleSubmit() {
    if (!appName.value) {
        toast.error('Please enter an application name.');
        return;
    }
    if (!domainInput.value) {
        toast.error('Please enter a domain name.');
        return;
    }

    isCreating.value = true;

    // Simpan ke localStorage untuk demo frontend statis
    const newApp = {
        id: `local-${Date.now()}`,
        name: appName.value,
        domain: domainInput.value,
        php_version: phpVersion.value,
        web_server: webServer.value,
        stack: stackType.value,
        environment: environmentType.value,
        status: 'active',
        system_user: 'webapps',
        document_root: `/var/www/${domainInput.value}/public`,
        ssl: { id: `ssl-${Date.now()}`, status: 'pending', domain: domainInput.value, auto_renew: true }
    };

    try {
        const local = localStorage.getItem('local_webapps');
        const apps = local ? JSON.parse(local) : [];
        apps.push(newApp);
        localStorage.setItem('local_webapps', JSON.stringify(apps));
    } catch (e) {
        console.error('Failed to save webapp to localStorage', e);
    }

    toast.promise(
        new Promise((resolve) => {
            setTimeout(() => {
                isCreating.value = false;
                resolve(true);
                // Redirect back to Index page
                router.visit('/web-apps');
            }, 2000);
        }),
        {
            loading:
                'Provisioning system user, PHP-FPM pool, and Nginx vhost on server agent...',
            success: 'Web application created and SSL pending!',
            error: 'Failed to create web application.',
        },
    );
}
</script>

<template>
    <Head title="Add Web App" />
    <div class="mx-auto max-w-4xl p-4">
        <div class="mb-6">
            <Button variant="ghost" as-child>
                <Link href="/web-apps" class="gap-2">
                    <ArrowLeft class="h-4 w-4" />
                    Back
                </Link>
            </Button>
        </div>
        <h1 class="mb-2 text-2xl font-bold">Add New Web Application</h1>
        <p class="mb-6 text-sm text-muted-foreground">
            Configure a new web app on your server
        </p>

        <Card>
            <CardHeader>
                <CardTitle class="text-sm">Application Details</CardTitle>
                <CardDescription
                    >Basic information about your web app</CardDescription
                >
            </CardHeader>
            <CardContent class="space-y-6">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <!-- Application Name -->
                    <div class="space-y-2">
                        <Label for="appName">Application Name</Label>
                        <Input
                            id="appName"
                            v-model="appName"
                            placeholder="e.g. Company Website"
                            :disabled="isCreating"
                        />
                    </div>

                    <!-- Domain -->
                    <div class="space-y-2">
                        <Label for="domain">Domain</Label>
                        <Input
                            id="domain"
                            v-model="domainInput"
                            placeholder="example.com"
                            :disabled="isCreating"
                        />
                    </div>

                    <!-- Stack -->
                    <div class="space-y-2">
                        <Label for="stack">Stack</Label>
                        <Select v-model="stackType" :disabled="isCreating">
                            <SelectTrigger id="stack">
                                <SelectValue placeholder="Select stack" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="laravel">Laravel</SelectItem>
                                <SelectItem value="wordpress"
                                    >WordPress</SelectItem
                                >
                                <SelectItem value="nodejs">Node.js</SelectItem>
                                <SelectItem value="static"
                                    >Static HTML</SelectItem
                                >
                            </SelectContent>
                        </Select>
                    </div>

                    <!-- Environment -->
                    <div class="space-y-2">
                        <Label for="environment">Environment</Label>
                        <Select
                            v-model="environmentType"
                            :disabled="isCreating"
                        >
                            <SelectTrigger id="environment">
                                <SelectValue placeholder="Select environment" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="production"
                                    >Production</SelectItem
                                >
                                <SelectItem value="staging">Staging</SelectItem>
                                <SelectItem value="development"
                                    >Development</SelectItem
                                >
                            </SelectContent>
                        </Select>
                    </div>

                    <!-- PHP Version -->
                    <div class="space-y-2">
                        <Label for="phpVersion">PHP Version</Label>
                        <Select v-model="phpVersion" :disabled="isCreating">
                            <SelectTrigger id="phpVersion">
                                <SelectValue placeholder="Select version" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="8.4">PHP 8.4</SelectItem>
                                <SelectItem value="8.3">PHP 8.3</SelectItem>
                                <SelectItem value="8.2">PHP 8.2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <!-- Web Server -->
                    <div class="space-y-2">
                        <Label for="webServer">Web Server</Label>
                        <Select v-model="webServer" :disabled="isCreating">
                            <SelectTrigger id="webServer">
                                <SelectValue placeholder="Select server" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="nginx">Nginx</SelectItem>
                                <SelectItem value="nginx_apache"
                                    >Nginx + Apache</SelectItem
                                >
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <Button
                    class="mt-4 w-full"
                    :disabled="isCreating"
                    @click="handleSubmit"
                >
                    <RefreshCw
                        v-if="isCreating"
                        class="mr-2 h-4 w-4 animate-spin"
                    />
                    <span v-if="isCreating">Creating & Provisioning...</span>
                    <span v-else>Create Web App</span>
                </Button>
            </CardContent>
        </Card>
    </div>
</template>
