<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import {
  Globe,
  Lock,
  RefreshCw,
  Plus,
  GitBranch,
  Activity,
  Settings,
  Server as ServerIcon,
  Terminal,
} from '@lucide/vue'
import { ref, computed } from 'vue'
import { toast } from 'vue-sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

interface Certificate {
  id: string | number
  domain: string
  type: 'letsencrypt' | 'custom'
  issuer: string
  expires_at: string
  status: 'active' | 'expired' | 'error'
  wildcard: boolean
  auto_renew: boolean
}

interface App {
  id: string | number
  name: string
  domain: string
  stack?: string
}

const props = defineProps<{
  certificates: Certificate[]
  app: App
}>()

defineOptions({
  layout: {
    breadcrumbs: [
      { title: 'Web Apps', href: '/web-apps' },
      { title: 'App Details', href: '#' },
      { title: 'SSL Certificates', href: '#' },
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
      console.error('Failed to load local webapp in ssl details', e)
    }
  }

  return props.app
})

// SSL State
const certList = ref<Certificate[]>([...props.certificates])
const isAddDialogOpen = ref(false)
const isIssuing = ref(false)

const sslType = ref<'letsencrypt' | 'custom'>('letsencrypt')
const domainInput = ref(props.app.domain)
const emailInput = ref('')
const wildcardInput = ref(false)
const autoRenewInput = ref(true)

const customCert = ref('')
const customKey = ref('')

function openAddDialog() {
  isAddDialogOpen.value = true
}

function issueSsl() {
  if (isIssuing.value) {
return
}

  isIssuing.value = true

  toast.promise(
    new Promise((resolve) => {
      setTimeout(() => {
        const newCert: Certificate = {
          id: `ssl-${Date.now()}`,
          domain: domainInput.value || props.app.domain,
          type: sslType.value,
          issuer: sslType.value === 'letsencrypt' ? "Let's Encrypt" : 'Custom SSL Upload',
          expires_at: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          status: 'active',
          wildcard: wildcardInput.value,
          auto_renew: autoRenewInput.value,
        }
        certList.value.unshift(newCert)
        isAddDialogOpen.value = false
        isIssuing.value = false
        resolve(true)
      }, 1500)
    }),
    {
      loading: 'Issuing SSL certificate via Certbot agent...',
      success: 'SSL certificate issued and Nginx reloaded successfully!',
      error: 'Failed to issue SSL certificate.',
    }
  )
}
</script>

<template>
  <Head title="SSL Certificates" />

  <div class="space-y-6 p-4 md:p-6">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/web-apps" class="hover:text-foreground transition-colors">Web Apps</Link>
      <span>/</span>
      <Link :href="`/web-apps/${app.id}`" class="hover:text-foreground transition-colors">{{ app.name }}</Link>
      <span>/</span>
      <span class="text-foreground font-medium">SSL Certificates</span>
    </div>

    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold tracking-tight">{{ app.name }}</h1>
        <p class="text-muted-foreground">{{ app.domain }}</p>
      </div>
      <Button @click="openAddDialog">
        <Plus class="mr-2 h-4 w-4" />
        Add Certificate
      </Button>
    </div>

    <Tabs default-value="ssl" class="space-y-4">
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
        <TabsTrigger value="ssl">
          <Lock class="h-4 w-4 mr-2" />
          SSL
        </TabsTrigger>
        <TabsTrigger value="env" as-child>
          <Link :href="`/web-apps/${app.id}/env`">
            <ServerIcon class="h-4 w-4 mr-2" />
            Environment Variables
          </Link>
        </TabsTrigger>
        <TabsTrigger value="git" as-child>
          <Link :href="`/web-apps/${app.id}/git`">
            <GitBranch class="h-4 w-4 mr-2" />
            Git
          </Link>
        </TabsTrigger>
        <TabsTrigger value="settings" as-child>
          <Link :href="`/web-apps/${app.id}/settings`">
            <Settings class="h-4 w-4 mr-2" />
            Settings
          </Link>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="ssl" class="space-y-4">
        <div class="grid gap-4">
          <Card v-for="cert in certList" :key="cert.id">
            <CardHeader class="pb-3">
              <div class="flex items-start justify-between">
                <div class="space-y-1">
                  <CardTitle class="text-base flex items-center gap-2">
                    <Globe class="h-4 w-4 text-muted-foreground" />
                    {{ cert.domain }}
                  </CardTitle>
                  <CardDescription>{{ cert.issuer }}</CardDescription>
                </div>
                <div class="flex items-center gap-2">
                  <Badge
                    v-if="cert.type === 'letsencrypt'"
                    class="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-0"
                  >
                    Let's Encrypt
                  </Badge>
                  <Badge v-else variant="outline">Custom</Badge>
                  <Badge
                    :variant="cert.status === 'active' ? 'default' : 'destructive'"
                    :class="cert.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-0' : ''"
                  >
                    {{ cert.status === 'active' ? 'Active' : 'Expired' }}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div class="flex items-center gap-6 text-sm">
                <div class="flex items-center gap-1.5 text-muted-foreground">
                  <Lock class="h-3.5 w-3.5" />
                  <span>Expires {{ cert.expires_at }}</span>
                </div>
                <Badge v-if="cert.wildcard" variant="secondary" class="text-xs">Wildcard</Badge>
                <Badge v-if="cert.auto_renew" variant="secondary" class="text-xs">
                  <RefreshCw class="mr-1 h-3 w-3" />
                  Auto-renew
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>

    <!-- Dialog Add Certificate -->
    <Dialog :open="isAddDialogOpen" @update:open="isAddDialogOpen = $event">
      <DialogContent class="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add SSL Certificate</DialogTitle>
          <DialogDescription>
            Secure your web application with Let's Encrypt or upload a custom certificate.
          </DialogDescription>
        </DialogHeader>

        <div class="space-y-4 py-4">
          <div class="space-y-2">
            <Label>Certificate Type</Label>
            <Select v-model="sslType">
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="letsencrypt">Let's Encrypt (Free, Auto-renewed)</SelectItem>
                <SelectItem value="custom">Custom Certificate (Manual Upload)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <!-- Let's Encrypt Fields -->
          <div v-if="sslType === 'letsencrypt'" class="space-y-3">
            <div class="space-y-2">
              <Label for="domains">Domain Names (Comma separated)</Label>
              <Input id="domains" v-model="domainInput" placeholder="example.com, www.example.com" />
            </div>
            <div class="space-y-2">
              <Label for="email">Notification Email</Label>
              <Input id="email" v-model="emailInput" type="email" placeholder="admin@example.com" />
            </div>
            <div class="flex items-center space-x-2 pt-2">
              <input type="checkbox" id="wildcard" v-model="wildcardInput" class="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
              <Label for="wildcard" class="text-sm font-medium">Issue Wildcard Certificate (requires DNS challenge)</Label>
            </div>
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="auto_renew" v-model="autoRenewInput" class="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
              <Label for="auto_renew" class="text-sm font-medium">Enable Automatic Renewal (every 60 days)</Label>
            </div>
          </div>

          <!-- Custom Certificate Fields -->
          <div v-if="sslType === 'custom'" class="space-y-3">
            <div class="space-y-2">
              <Label for="custom_domain">Domain</Label>
              <Input id="custom_domain" v-model="domainInput" placeholder="example.com" />
            </div>
            <div class="space-y-2">
              <Label for="cert">SSL Certificate (CRT file content)</Label>
              <textarea id="cert" v-model="customCert" rows="3" placeholder="-----BEGIN CERTIFICATE-----..." class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
            </div>
            <div class="space-y-2">
              <Label for="key">Private Key (KEY file content)</Label>
              <textarea id="key" v-model="customKey" rows="3" placeholder="-----BEGIN PRIVATE KEY-----..." class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" :disabled="isIssuing" @click="isAddDialogOpen = false">Cancel</Button>
          <Button :disabled="isIssuing" @click="issueSsl">
            <span v-if="isIssuing">Processing...</span>
            <span v-else>Issue Certificate</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
