<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { GitBranch, GitCommit, RefreshCw, Lock, Server as ServerIcon, Settings, Activity, Terminal } from '@lucide/vue'
import { ref, computed } from 'vue'
import { toast } from 'vue-sonner'
import DeploymentLog from '@/components/DeploymentLog.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

interface Deployment {
  id: string | number
  provider: string
  repo_url: string
  branch: string
  auto_deploy: boolean
}

interface RecentDeployment {
  id: string | number
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
  id: string | number
  name: string
  stack?: string
}

const props = defineProps<{
  deployment: Deployment
  app: App
  recent_deployments: RecentDeployment[]
}>()

defineOptions({
  layout: {
    breadcrumbs: [
      { title: 'Web Apps', href: '/web-apps' },
      { title: 'App Details', href: '#' },
      { title: 'Git Deployment', href: '#' },
    ],
  },
})

const app = computed(() => {
  if (String(props.app.id).startsWith('local-')) {
    try {
      const local = localStorage.getItem('local_webapps')

      if (local) {
        const parsed = JSON.parse(local) as any[]
        const found = parsed.find(a => String(a.id) === String(props.app.id))

        if (found) {
          return { ...props.app, ...found }
        }
      }
    } catch (e) {
      console.error('Failed to load local webapp in git details', e)
    }
  }

  return props.app
})

// Git Deployment State
const repoConfig = ref<Deployment>({ ...props.deployment })
const deployHistory = ref<RecentDeployment[]>([...props.recent_deployments])
const isChangeRepoOpen = ref(false)
const isSavingRepo = ref(false)

const providerInput = ref<'github' | 'gitlab' | 'bitbucket'>(props.deployment.provider as any || 'github')
const repoUrlInput = ref(props.deployment.repo_url)
const branchInput = ref(props.deployment.branch)
const autoDeployInput = ref(props.deployment.auto_deploy)

// Log Modal state
const isLogOpen = ref(false)
const selectedDeployment = ref<RecentDeployment | null>(null)
const logLines = ref<string[]>([])
const logStream = ref(false)

const mockLogLines = [
  "git clone git@github.com:company/website.git .",
  "Cloning into '.'...",
  "Checking out files: 100% (21045/21045), done.",
  "Running deploy script...",
  "composer install --no-interaction --prefer-dist --optimize-autoloader",
  "Installing dependencies from lock file",
  "Package operations: 14 installs, 0 updates, 0 removals",
  "  - Installing laravel/framework (v11.5.0): Extracting archive",
  "Generating optimized autoload files",
  "npm install && npm run build",
  "added 342 packages in 12s",
  "vite v5.2.11 building for production...",
  "transforming (24) resources/js/app.ts",
  "✓ 142 modules transformed.",
  "public/build/manifest.json             0.28 kB │ gzip:  0.12 kB",
  "public/build/assets/app-C9aD2d3.css  148.20 kB │ gzip: 24.50 kB",
  "public/build/assets/app-B8aE1c2.js   212.44 kB │ gzip: 68.32 kB",
  "✓ built in 4.88s",
  "php artisan migrate --force",
  "Nothing to migrate.",
  "php artisan optimize",
  "Configuration cache cleared!",
  "Configuration cached successfully!",
  "Route cache cleared!",
  "Routes cached successfully!",
  "Files cached successfully!",
  "Deployment completed successfully!"
]

function openChangeRepo() {
  isChangeRepoOpen.value = true
}

function saveRepoConfig() {
  isSavingRepo.value = true
  setTimeout(() => {
    repoConfig.value = {
      ...repoConfig.value,
      provider: providerInput.value,
      repo_url: repoUrlInput.value,
      branch: branchInput.value,
      auto_deploy: autoDeployInput.value
    }
    isChangeRepoOpen.value = false
    isSavingRepo.value = false
    toast.success('Git repository configuration updated successfully!')
  }, 1000)
}

function triggerDeploy() {
  // Add new deployment as deploying
  const newDepId = `dep-${Date.now()}`
  const newDep: RecentDeployment = {
    id: newDepId,
    commit_hash: 'a1b2c3d4e5f67890abcdef1234567890abcdef12',
    commit_message: 'manual: manual trigger deployment',
    branch: repoConfig.value.branch,
    status: 'deploying',
    triggered_by: 'manual',
    started_at: new Date().toISOString(),
    finished_at: null,
    duration_seconds: null
  }
  
  deployHistory.value.unshift(newDep)
  
  // Auto open log
  viewLog(newDep, true)
  
  // Simulate log output streaming
  let currentLine = 0
  logLines.value = []
  logStream.value = true
  
  const interval = setInterval(() => {
    if (currentLine < mockLogLines.length) {
      logLines.value.push(mockLogLines[currentLine])
      currentLine++
    } else {
      clearInterval(interval)
      logStream.value = false
      
      // Update deployment status in history
      const dep = deployHistory.value.find(d => d.id === newDepId)

      if (dep) {
        dep.status = 'success'
        dep.finished_at = new Date().toISOString()
        dep.duration_seconds = 12
      }
      
      toast.success('Deployment completed successfully!')
    }
  }, 250)
}

function viewLog(dep: RecentDeployment, isNew = false) {
  selectedDeployment.value = dep
  isLogOpen.value = true

  if (isNew) {
    logLines.value = []
  } else {
    // Just show full log immediately
    logLines.value = mockLogLines
    logStream.value = false
  }
}

function statusVariant(status: string): 'default' | 'destructive' | 'secondary' | 'outline' {
  if (status === 'success' || status === 'successful') {
return 'default'
}

  if (status === 'failed' || status === 'failure') {
return 'destructive'
}

  if (status === 'deploying' || status === 'pending') {
return 'secondary'
}

  return 'outline'
}

const statusLabel = (status: string): string => {
  if (status === 'success' || status === 'successful') {
return 'Success'
}

  if (status === 'failed' || status === 'failure') {
return 'Failed'
}

  if (status === 'deploying') {
return 'Deploying'
}

  if (status === 'pending') {
return 'Pending'
}

  return status
}

function isInProgress(status: string): boolean {
  return status === 'deploying' || status === 'pending'
}
</script>

<template>
  <Head title="Git Deployment" />

  <div class="space-y-6 p-4 md:p-6">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/web-apps" class="hover:text-foreground transition-colors">Web Apps</Link>
      <span>/</span>
      <Link :href="`/web-apps/${app.id}`" class="hover:text-foreground transition-colors">{{ app.name }}</Link>
      <span>/</span>
      <span class="text-foreground font-medium">Git Deployment</span>
    </div>

    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold tracking-tight">{{ app.name }}</h1>
        <p class="text-muted-foreground">{{ repoConfig.repo_url }}</p>
      </div>
      <div class="flex items-center gap-3">
        <Button variant="outline" @click="openChangeRepo">Change Repository</Button>
        <Button :disabled="deployHistory.some(d => isInProgress(d.status))" @click="triggerDeploy">
          <RefreshCw class="mr-2 h-4 w-4" :class="{ 'animate-spin': deployHistory.some(d => isInProgress(d.status)) }" />
          Deploy Now
        </Button>
      </div>
    </div>

    <Tabs default-value="git" class="space-y-4">
      <TabsList>
        <TabsTrigger value="overview" as-child>
          <Link :href="`/web-apps/${app.id}`">
            <Activity class="h-4 w-4 mr-2" />
            Overview
          </Link>
        </TabsTrigger>
        <TabsTrigger v-if="app.stack === 'laravel'" value="laravel" as-child>
          <Link :href="`/web-apps/${app.id}`">
            <Terminal class="h-4 w-4 mr-2" />
            Laravel
          </Link>
        </TabsTrigger>
        <TabsTrigger value="ssl" as-child>
          <Link :href="`/web-apps/${app.id}/ssl`">
            <Lock class="h-4 w-4 mr-2" />
            SSL
          </Link>
        </TabsTrigger>
        <TabsTrigger value="env" as-child>
          <Link :href="`/web-apps/${app.id}/env`">
            <ServerIcon class="h-4 w-4 mr-2" />
            Environment Variables
          </Link>
        </TabsTrigger>
        <TabsTrigger value="git">
          <GitBranch class="h-4 w-4 mr-2" />
          Git
        </TabsTrigger>
        <TabsTrigger value="settings" as-child>
          <Link :href="`/web-apps/${app.id}/settings`">
            <Settings class="h-4 w-4 mr-2" />
            Settings
          </Link>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="git" class="space-y-4">
        <Card>
          <CardHeader class="pb-3">
            <CardTitle class="text-base flex items-center gap-2">
              <GitBranch class="h-4 w-4 text-muted-foreground" />
              {{ repoConfig.provider.toUpperCase() }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-2 text-sm">
              <div class="flex items-center gap-2">
                <span class="text-muted-foreground w-28">Repository</span>
                <span class="font-mono">{{ repoConfig.repo_url }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-muted-foreground w-28">Branch</span>
                <span class="font-mono flex items-center gap-1.5">
                  <GitBranch class="h-3.5 w-3.5 text-muted-foreground" />
                  {{ repoConfig.branch }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-muted-foreground w-28">Auto Deploy</span>
                <Badge :variant="repoConfig.auto_deploy ? 'default' : 'secondary'">
                  {{ repoConfig.auto_deploy ? 'Enabled' : 'Disabled' }}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 class="text-lg font-semibold mb-3">Recent Deployments (Click row to view logs)</h2>
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
              <TableRow 
                v-for="dep in deployHistory" 
                :key="dep.id" 
                class="cursor-pointer transition-colors hover:bg-muted/50"
                @click="viewLog(dep)"
              >
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
      </TabsContent>
    </Tabs>

    <!-- Dialog Change Repository -->
    <Dialog :open="isChangeRepoOpen" @update:open="isChangeRepoOpen = $event">
      <DialogContent class="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Change Git Repository</DialogTitle>
          <DialogDescription>
            Connect a different Git repository to this web application.
          </DialogDescription>
        </DialogHeader>

        <div class="space-y-4 py-4">
          <div class="space-y-2">
            <Label>Git Provider</Label>
            <Select v-model="providerInput">
              <SelectTrigger>
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="github">GitHub</SelectItem>
                <SelectItem value="gitlab">GitLab</SelectItem>
                <SelectItem value="bitbucket">Bitbucket</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="space-y-2">
            <Label for="repo_url">Repository URL</Label>
            <Input id="repo_url" v-model="repoUrlInput" placeholder="github.com/username/repository" />
          </div>
          <div class="space-y-2">
            <Label for="branch">Default Branch</Label>
            <Input id="branch" v-model="branchInput" placeholder="main" />
          </div>
          <div class="flex items-center space-x-2 pt-2">
            <input type="checkbox" id="auto_deploy" v-model="autoDeployInput" class="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
            <Label for="auto_deploy" class="text-sm font-medium">Auto Deploy (push-to-deploy webhook)</Label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" :disabled="isSavingRepo" @click="isChangeRepoOpen = false">Cancel</Button>
          <Button :disabled="isSavingRepo" @click="saveRepoConfig">
            <span v-if="isSavingRepo">Saving...</span>
            <span v-else>Save Changes</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <!-- Dialog View Logs -->
    <Dialog :open="isLogOpen" @update:open="isLogOpen = $event">
      <DialogContent class="sm:max-w-[700px] border-zinc-800 bg-zinc-950 text-zinc-100">
        <DialogHeader>
          <DialogTitle class="text-zinc-100">Deployment Logs</DialogTitle>
          <DialogDescription class="text-zinc-400">
            Commit: {{ selectedDeployment?.commit_message }} ({{ selectedDeployment?.commit_hash.slice(0, 7) }})
          </DialogDescription>
        </DialogHeader>

        <div class="py-4">
          <DeploymentLog 
            v-if="selectedDeployment" 
            :deployment="(selectedDeployment as any)" 
            :logs="logLines" 
          />
        </div>

        <DialogFooter>
          <Button variant="outline" class="border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100" @click="isLogOpen = false">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
