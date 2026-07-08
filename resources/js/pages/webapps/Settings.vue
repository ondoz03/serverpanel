<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import {
    Trash2,
    GitBranch,
    Lock,
    Server as ServerIcon,
    Settings,
    Activity,
    Terminal,
    ShieldAlert,
} from '@lucide/vue';
import { ref, computed } from 'vue';
import { toast } from 'vue-sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface App {
    id: string | number;
    name: string;
    domain: string;
    php_version: string;
    web_server: string;
    document_root: string;
    system_user: string;
    stack: string;
    environment: string;
}

const props = defineProps<{
    app: App;
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Web Apps', href: '/web-apps' },
            { title: 'App Details', href: '#' },
            { title: 'Settings', href: '#' },
        ],
    },
});

// Resolve data dari localStorage jika ada untuk demo statis
const resolvedApp = computed(() => {
    if (String(props.app.id).startsWith('local-')) {
        try {
            const local = localStorage.getItem('local_webapps');

            if (local) {
                const parsed = JSON.parse(local) as any[];
                const found = parsed.find(
                    (a) => String(a.id) === String(props.app.id),
                );

                if (found) {
                    // Map stack/environment/php_version/web_server correctly if keys vary
                    return {
                        ...props.app,
                        ...found,
                        php_version: found.php_version || props.app.php_version,
                        web_server: found.web_server || props.app.web_server,
                        document_root:
                            found.document_root || props.app.document_root,
                    };
                }
            }
        } catch (e) {
            console.error('Failed to load local webapp in settings', e);
        }
    }

    return props.app;
});

// General Settings Form state
const isSaving = ref(false);
const appName = ref(resolvedApp.value.name);
const domainInput = ref(resolvedApp.value.domain);
const phpVersionInput = ref(resolvedApp.value.php_version);
const webServerInput = ref(resolvedApp.value.web_server);
const documentRootInput = ref(resolvedApp.value.document_root);

// Nginx Config state
const isSavingNginx = ref(false);
const nginxConfig = ref(`server {
    listen 80;
    listen [::]:80;
    server_name ${props.app.domain} www.${props.app.domain};
    root ${props.app.document_root};

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \\.php$ {
        fastcgi_pass unix:/var/run/php/php${props.app.php_version}-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\\.(?!well-known).* {
        deny all;
    }
}`);

// Delete state
const isDeleteDialogOpen = ref(false);
const isDeleting = ref(false);
const deleteConfirmationText = ref('');

function saveGeneralSettings() {
    isSaving.value = true;
    setTimeout(() => {
        isSaving.value = false;
        toast.success('General settings updated successfully!');
    }, 1000);
}

function saveNginxConfig() {
    isSavingNginx.value = true;
    setTimeout(() => {
        isSavingNginx.value = false;
        toast.success(
            'Nginx configuration updated and tested successfully on agent!',
        );
    }, 1500);
}

function confirmDelete() {
    isDeleteDialogOpen.value = true;
}

function deleteApp() {
    if (deleteConfirmationText.value !== props.app.name) {
        toast.error('Please type the application name correctly to confirm.');

        return;
    }

    isDeleting.value = true;
    setTimeout(() => {
        isDeleting.value = false;
        isDeleteDialogOpen.value = false;
        toast.success(`Application ${props.app.name} deleted successfully.`);
        // Redirect to index page
        router.visit('/web-apps');
    }, 1500);
}
</script>

<template>
    <Head title="Settings" />

    <div class="space-y-6 p-4 md:p-6">
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
                href="/web-apps"
                class="transition-colors hover:text-foreground"
                >Web Apps</Link
            >
            <span>/</span>
            <Link
                :href="`/web-apps/${resolvedApp.id}`"
                class="transition-colors hover:text-foreground"
                >{{ resolvedApp.name }}</Link
            >
            <span>/</span>
            <span class="font-medium text-foreground">Settings</span>
        </div>

        <div>
            <h1 class="text-2xl font-bold tracking-tight">{{ resolvedApp.name }}</h1>
            <p class="text-muted-foreground">{{ resolvedApp.domain }}</p>
        </div>

        <Tabs default-value="settings" class="space-y-4">
            <TabsList>
                <TabsTrigger value="overview" as-child>
                    <Link :href="`/web-apps/${resolvedApp.id}`">
                        <Activity class="mr-2 h-4 w-4" />
                        Overview
                    </Link>
                </TabsTrigger>
                <TabsTrigger
                    v-if="resolvedApp.stack === 'laravel'"
                    value="laravel"
                    as-child
                >
                    <Link :href="`/web-apps/${resolvedApp.id}`">
                        <Terminal class="mr-2 h-4 w-4" />
                        Laravel
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="ssl" as-child>
                    <Link :href="`/web-apps/${resolvedApp.id}/ssl`">
                        <Lock class="mr-2 h-4 w-4" />
                        SSL
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="env" as-child>
                    <Link :href="`/web-apps/${resolvedApp.id}/env`">
                        <ServerIcon class="mr-2 h-4 w-4" />
                        Environment Variables
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="git" as-child>
                    <Link :href="`/web-apps/${resolvedApp.id}/git`">
                        <GitBranch class="mr-2 h-4 w-4" />
                        Git
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="settings">
                    <Settings class="mr-2 h-4 w-4" />
                    Settings
                </TabsTrigger>
            </TabsList>

            <TabsContent value="settings" class="space-y-4">
                <!-- General Settings Form -->
                <Card>
                    <CardHeader>
                        <CardTitle>General Settings</CardTitle>
                        <CardDescription
                            >Update the web application
                            parameters.</CardDescription
                        >
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div class="space-y-2">
                                <Label for="appName">Application Name</Label>
                                <Input id="appName" v-model="appName" />
                            </div>
                            <div class="space-y-2">
                                <Label for="domain">Domain Name</Label>
                                <Input id="domain" v-model="domainInput" />
                            </div>
                            <div class="space-y-2">
                                <Label for="phpVersion">PHP Version</Label>
                                <Select v-model="phpVersionInput">
                                    <SelectTrigger id="phpVersion">
                                        <SelectValue
                                            placeholder="Select version"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="8.4"
                                            >PHP 8.4</SelectItem
                                        >
                                        <SelectItem value="8.3"
                                            >PHP 8.3</SelectItem
                                        >
                                        <SelectItem value="8.2"
                                            >PHP 8.2</SelectItem
                                        >
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="space-y-2">
                                <Label for="webServer">Web Server</Label>
                                <Select v-model="webServerInput">
                                    <SelectTrigger id="webServer">
                                        <SelectValue
                                            placeholder="Select server"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="nginx"
                                            >Nginx</SelectItem
                                        >
                                        <SelectItem value="nginx_apache"
                                            >Nginx + Apache</SelectItem
                                        >
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <Label for="docRoot">Document Root</Label>
                            <Input id="docRoot" v-model="documentRootInput" />
                        </div>

                        <div
                            class="grid grid-cols-3 gap-4 pt-2 text-sm text-muted-foreground"
                        >
                            <div>
                                <span class="block font-medium text-foreground"
                                    >System User</span
                                >
                                <span class="font-mono text-xs">{{
                                    resolvedApp.system_user
                                }}</span>
                            </div>
                            <div>
                                <span class="block font-medium text-foreground"
                                    >Stack Type</span
                                >
                                <Badge variant="outline">{{ resolvedApp.stack }}</Badge>
                            </div>
                            <div>
                                <span class="block font-medium text-foreground"
                                    >Environment</span
                                >
                                <Badge variant="outline">{{
                                    resolvedApp.environment
                                }}</Badge>
                            </div>
                        </div>

                        <div class="pt-2">
                            <Button
                                :disabled="isSaving"
                                @click="saveGeneralSettings"
                            >
                                <span v-if="isSaving">Saving...</span>
                                <span v-else>Save General Settings</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <!-- Nginx Config Editor -->
                <Card>
                    <CardHeader>
                        <CardTitle>Nginx Configuration</CardTitle>
                        <CardDescription
                            >Edit the virtual host file configuration for this
                            web app.</CardDescription
                        >
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <textarea
                            v-model="nginxConfig"
                            rows="12"
                            class="w-full rounded-md border border-zinc-700 bg-zinc-950 p-4 font-mono text-xs text-green-400 focus:ring-2 focus:ring-ring focus:outline-none"
                        ></textarea>
                        <div>
                            <Button
                                :disabled="isSavingNginx"
                                @click="saveNginxConfig"
                            >
                                <span v-if="isSavingNginx"
                                    >Testing & Applying Configuration...</span
                                >
                                <span v-else>Save & Reload Nginx</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <!-- Danger Zone -->
                <Card class="border-destructive/50">
                    <CardHeader>
                        <CardTitle class="text-destructive"
                            >Danger Zone</CardTitle
                        >
                        <CardDescription>
                            Irreversible actions that will permanently delete
                            this web app.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <p class="font-medium">
                                    Delete this application
                                </p>
                                <p class="text-muted-foreground">
                                    Permanently delete {{ resolvedApp.name }} and all of
                                    its data.
                                </p>
                            </div>
                            <Button
                                variant="destructive"
                                @click="confirmDelete"
                            >
                                <Trash2 class="mr-2 h-4 w-4" />
                                Delete Application
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>

        <!-- Dialog Delete App -->
        <Dialog
            :open="isDeleteDialogOpen"
            @update:open="isDeleteDialogOpen = $event"
        >
            <DialogContent class="sm:max-w-[450px]">
                <DialogHeader>
                    <DialogTitle
                        class="flex items-center gap-2 text-destructive"
                    >
                        <ShieldAlert class="h-5 w-5" />
                        Delete Application
                    </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete <strong>{{ resolvedApp.name }}</strong
                        >, its logs, and its configurations from the agent.
                    </DialogDescription>
                </DialogHeader>

                <div class="space-y-4 py-4">
                    <div class="space-y-2">
                        <Label for="confirmName"
                            >Please type
                            <span
                                class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold"
                                >{{ resolvedApp.name }}</span
                            >
                            to confirm:</Label
                        >
                        <Input
                            id="confirmName"
                            v-model="deleteConfirmationText"
                            placeholder="Type application name here"
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        :disabled="isDeleting"
                        @click="isDeleteDialogOpen = false"
                        >Cancel</Button
                    >
                    <Button
                        variant="destructive"
                        :disabled="
                            isDeleting || deleteConfirmationText !== resolvedApp.name
                        "
                        @click="deleteApp"
                    >
                        <span v-if="isDeleting">Deleting from agent...</span>
                        <span v-else>Confirm Delete</span>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
</template>
