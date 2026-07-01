<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { Clock, Plus, Play, Trash2 } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import type { CronJob } from '@/types'

defineProps<{
  jobs: CronJob[]
}>()

defineOptions({
  breadcrumbs: [{ label: 'Cron Jobs', href: '/cron' }],
})

function humanizeSchedule(schedule: string): string {
  const map: Record<string, string> = {
    '* * * * *': 'Every minute',
    '*/5 * * * *': 'Every 5 minutes',
    '*/10 * * * *': 'Every 10 minutes',
    '*/15 * * * *': 'Every 15 minutes',
    '*/30 * * * *': 'Every 30 minutes',
    '0 * * * *': 'Every hour',
    '0 0 * * *': 'Daily at midnight',
    '0 0 * * 0': 'Weekly on Sunday',
    '0 0 1 * *': 'Monthly on the 1st',
    '@daily': 'Daily',
    '@weekly': 'Weekly',
    '@monthly': 'Monthly',
    '@yearly': 'Yearly',
    '@reboot': 'On reboot',
  }
  return map[schedule] || schedule
}
</script>

<template>
  <Head title="Cron Jobs" />

  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold tracking-tight">Cron Jobs</h1>
      <Link href="/cron/create">
        <Button>
          <Plus class="mr-2 h-4 w-4" />
          Add Cron Job
        </Button>
      </Link>
    </div>

    <div v-if="jobs.length === 0" class="flex flex-col items-center justify-center py-16 text-center">
      <Clock class="mb-4 h-12 w-12 text-muted-foreground" />
      <p class="mb-4 text-lg font-medium">No cron jobs yet</p>
      <p class="mb-6 text-sm text-muted-foreground">Schedule automated tasks for your server.</p>
      <Link href="/cron/create">
        <Button>
          <Plus class="mr-2 h-4 w-4" />
          Add Cron Job
        </Button>
      </Link>
    </div>

    <div v-else class="grid gap-4">
      <Card v-for="job in jobs" :key="job.id">
        <CardHeader class="flex flex-row items-center justify-between pb-2">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Clock class="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle class="text-sm font-mono">{{ job.command }}</CardTitle>
              <CardDescription class="mt-1">
                <code class="rounded bg-muted px-1.5 py-0.5 text-xs">{{ job.schedule }}</code>
                <span class="ml-2 text-xs">— {{ humanizeSchedule(job.schedule) }}</span>
              </CardDescription>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <Badge v-if="job.last_status" :variant="job.last_status === 'success' ? 'success' : 'destructive'">
              {{ job.last_status }}
            </Badge>
            <Switch :model-value="job.enabled" />
          </div>
        </CardHeader>
        <Separator />
        <CardContent class="pt-4">
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="text-muted-foreground">User</span>
              <p class="font-medium">{{ job.user }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">Last Run</span>
              <p class="font-medium">{{ job.last_run ?? 'Never' }}</p>
            </div>
            <div class="col-span-2">
              <span class="text-muted-foreground">Log File</span>
              <p class="font-mono text-xs">{{ job.log_file }}</p>
            </div>
          </div>
          <div class="mt-4 flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Play class="mr-1 h-3 w-3" />
              Run Now
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 class="mr-1 h-3 w-3" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
