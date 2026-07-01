<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Separator } from '@/components/ui/separator'
import { GitBranch, GitCommit, GitPullRequest, ArrowLeft, RefreshCw } from '@lucide/vue'

interface Deployment {
  id: number
  provider: string
  repo_url: string
  branch: string
  auto_deploy: boolean
}

interface RecentDeployment {
  id: number
  commit_hash: string
  commit_message: string
  branch: string
  status: string
  triggered_by: string
  started_at: string
  finished_at: string | null
  duration_seconds: number | null
}

interface App {
  id: number
  name: string
}

const props = defineProps<{
  deployment: Deployment
  app: App
  recent_deployments: RecentDeployment[]
}>()

defineOptions({
  breadcrumbs: [
    { label: 'Web Apps', route: '/webapps' },
    { label: 'App', route: '#' },
    { label: 'Git Deployment' },
  ],
})

const providerIcon = (provider: string) => {
  return GitBranch
}

function statusVariant(status: string): string {
  if (status === 'success' || status === 'successful') return 'default'
  if (status === 'failed' || status === 'failure') return 'destructive'
  if (status === 'deploying' || status === 'pending') return 'secondary'
  return 'outline'
}

const statusLabel = (status: string): string => {
  if (status === 'success' || status === 'successful') return 'Success'
  if (status === 'failed' || status === 'failure') return 'Failed'
  if (status === 'deploying') return 'Deploying'
  if (status === 'pending') return 'Pending'
  return status
}

function isInProgress(status: string): boolean {
  return status === 'deploying' || status === 'pending'
}
</script>

<template>
  <Head title="Git Deployment" />

  <div class="space-y-6">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/webapps" class="hover:text-foreground transition-colors">Web Apps</Link>
      <span>/</span>
      <Link :href="`/webapps/${app.id}`" class="hover:text-foreground transition-colors">{{ app.name }}</Link>
      <span>/</span>
      <span class="text-foreground font-medium">Git Deployment</span>
    </div>

    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold tracking-tight">Git Deployment</h1>
        <p class="text-muted-foreground mt-1">{{ app.name }}</p>
      </div>
      <div class="flex items-center gap-3">
        <Button variant="outline">Change Repository</Button>
        <Button>
          <RefreshCw class="mr-2 h-4 w-4" />
          Deploy Now
        </Button>
      </div>
    </div>

    <Card>
      <CardHeader class="pb-3">
        <CardTitle class="text-base flex items-center gap-2">
          <GitBranch class="h-4 w-4 text-muted-foreground" />
          {{ deployment.provider }}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-2 text-sm">
          <div class="flex items-center gap-2">
            <span class="text-muted-foreground w-28">Repository</span>
            <span class="font-mono">{{ deployment.repo_url }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-muted-foreground w-28">Branch</span>
            <span class="font-mono flex items-center gap-1.5">
              <GitBranch class="h-3.5 w-3.5 text-muted-foreground" />
              {{ deployment.branch }}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-muted-foreground w-28">Auto Deploy</span>
            <Badge :variant="deployment.auto_deploy ? 'default' : 'secondary'">
              {{ deployment.auto_deploy ? 'Enabled' : 'Disabled' }}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>

    <div>
      <h2 class="text-lg font-semibold mb-3">Recent Deployments</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Commit</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Triggered By</TableHead>
            <TableHead>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="dep in recent_deployments" :key="dep.id">
            <TableCell>
              <div class="flex items-center gap-1.5">
                <GitCommit class="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <code class="font-mono text-xs">{{ dep.commit_hash.slice(0, 7) }}</code>
              </div>
            </TableCell>
            <TableCell class="max-w-[280px] truncate">{{ dep.commit_message }}</TableCell>
            <TableCell>
              <div class="flex items-center gap-1.5">
                <GitBranch class="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <span class="font-mono text-xs">{{ dep.branch }}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                :variant="statusVariant(dep.status)"
                :class="{ 'animate-pulse': isInProgress(dep.status) }"
              >
                <template v-if="isInProgress(dep.status)">
                  <RefreshCw class="mr-1 h-3 w-3 animate-spin" />
                </template>
                {{ statusLabel(dep.status) }}
              </Badge>
            </TableCell>
            <TableCell class="text-sm text-muted-foreground">{{ dep.triggered_by }}</TableCell>
            <TableCell class="font-mono text-sm">
              <template v-if="dep.duration_seconds !== null">
                {{ dep.duration_seconds }}s
              </template>
              <span v-else class="text-muted-foreground">—</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
