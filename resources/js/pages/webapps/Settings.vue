<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Trash2 } from '@lucide/vue'

interface App {
  id: number
  name: string
  domain: string
  php_version: string
  web_server: string
  document_root: string
  system_user: string
  stack: string
  environment: string
}

const props = defineProps<{
  app: App
}>()

defineOptions({
  breadcrumbs: [
    { label: 'Web Apps', route: '/webapps' },
    { label: 'App', route: '#' },
    { label: 'Settings' },
  ],
})
</script>

<template>
  <Head title="Settings" />

  <div class="space-y-6">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/webapps" class="hover:text-foreground transition-colors">Web Apps</Link>
      <span>/</span>
      <Link :href="`/webapps/${app.id}`" class="hover:text-foreground transition-colors">{{ app.name }}</Link>
      <span>/</span>
      <span class="text-foreground font-medium">Settings</span>
    </div>

    <div>
      <h1 class="text-2xl font-bold tracking-tight">Settings</h1>
      <p class="text-muted-foreground mt-1">{{ app.name }}</p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
        <CardDescription>View the configuration for this web app.</CardDescription>
      </CardHeader>
      <CardContent>
        <dl class="divide-y">
          <div class="flex items-center justify-between py-3">
            <dt class="text-sm text-muted-foreground">Domain</dt>
            <dd class="text-sm font-mono">{{ app.domain }}</dd>
          </div>
          <div class="flex items-center justify-between py-3">
            <dt class="text-sm text-muted-foreground">PHP Version</dt>
            <dd class="text-sm font-mono">{{ app.php_version }}</dd>
          </div>
          <div class="flex items-center justify-between py-3">
            <dt class="text-sm text-muted-foreground">Web Server</dt>
            <dd class="text-sm font-mono">{{ app.web_server }}</dd>
          </div>
          <div class="flex items-center justify-between py-3">
            <dt class="text-sm text-muted-foreground">Document Root</dt>
            <dd class="text-sm font-mono">{{ app.document_root }}</dd>
          </div>
          <div class="flex items-center justify-between py-3">
            <dt class="text-sm text-muted-foreground">System User</dt>
            <dd class="text-sm font-mono">{{ app.system_user }}</dd>
          </div>
          <div class="flex items-center justify-between py-3">
            <dt class="text-sm text-muted-foreground">Stack</dt>
            <dd class="text-sm font-mono">{{ app.stack }}</dd>
          </div>
          <div class="flex items-center justify-between py-3">
            <dt class="text-sm text-muted-foreground">Environment</dt>
            <dd class="text-sm font-mono">{{ app.environment }}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>

    <Card class="border-destructive/50">
      <CardHeader>
        <CardTitle class="text-destructive">Danger Zone</CardTitle>
        <CardDescription>
          Irreversible actions that will permanently delete this web app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex items-center justify-between">
          <div class="text-sm">
            <p class="font-medium">Delete this application</p>
            <p class="text-muted-foreground">
              Permanently delete {{ app.name }} and all of its data.
            </p>
          </div>
          <Button variant="destructive">
            <Trash2 class="mr-2 h-4 w-4" />
            Delete Application
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
