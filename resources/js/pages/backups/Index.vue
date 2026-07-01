<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { HardDrive, Plus, Download, RefreshCw, Trash2, Settings } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Backup } from '@/types'

defineProps<{
  backups: Backup[]
}>()

defineOptions({
  breadcrumbs: [{ label: 'Backups', href: '/backups' }],
})

function statusVariant(status: string): string {
  if (status === 'completed') return 'success'
  if (status === 'running') return 'warning'
  if (status === 'failed') return 'destructive'
  return 'secondary'
}
</script>

<template>
  <Head title="Backups" />

  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold tracking-tight">Backups</h1>
      <div class="flex items-center gap-2">
        <Link href="/backups/settings">
          <Button variant="outline">
            <Settings class="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
        <Link href="/backups/create">
          <Button>
            <Plus class="mr-2 h-4 w-4" />
            Create Backup
          </Button>
        </Link>
      </div>
    </div>

    <div v-if="backups.length === 0" class="flex flex-col items-center justify-center py-16 text-center">
      <HardDrive class="mb-4 h-12 w-12 text-muted-foreground" />
      <p class="mb-4 text-lg font-medium">No backups yet</p>
      <p class="mb-6 text-sm text-muted-foreground">Create your first backup to protect your data.</p>
      <Link href="/backups/create">
        <Button>
          <Plus class="mr-2 h-4 w-4" />
          Create Backup
        </Button>
      </Link>
    </div>

    <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card v-for="backup in backups" :key="backup.id">
        <CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <HardDrive class="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle class="text-base">{{ backup.name }}</CardTitle>
              <CardDescription>
                <Badge variant="secondary" class="mr-1">{{ backup.type }}</Badge>
                {{ backup.size_mb }} MB
              </CardDescription>
            </div>
          </div>
          <Badge :variant="statusVariant(backup.status)">
            <span v-if="backup.status === 'running'" class="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-current"></span>
            {{ backup.status }}
          </Badge>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="text-muted-foreground">Storage</span>
              <p class="font-medium">{{ backup.storage }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">Retention</span>
              <p class="font-medium">{{ backup.retention_days }} days</p>
            </div>
            <div class="col-span-2">
              <span class="text-muted-foreground">Created</span>
              <p class="font-medium">{{ backup.created_at }}</p>
            </div>
          </div>
          <div class="mt-4 flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download class="mr-1 h-3 w-3" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw class="mr-1 h-3 w-3" />
              Restore
            </Button>
            <Button variant="ghost" size="sm" class="ml-auto">
              <Trash2 class="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
