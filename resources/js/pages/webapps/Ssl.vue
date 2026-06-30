<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Globe, Lock, RefreshCw, ArrowLeft, Plus } from '@lucide/vue'

interface Certificate {
  id: number
  domain: string
  type: 'letsencrypt' | 'custom'
  issuer: string
  expires_at: string
  status: 'active' | 'expired'
  wildcard: boolean
  auto_renew: boolean
}

interface App {
  id: number
  name: string
  domain: string
}

const props = defineProps<{
  certificates: Certificate[]
  app: App
}>()

defineOptions({
  breadcrumbs: [
    { label: 'Web Apps', route: '/webapps' },
    { label: 'App', route: '#' },
    { label: 'SSL Certificates' },
  ],
})
</script>

<template>
  <Head title="SSL Certificates" />

  <div class="space-y-6">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/webapps" class="hover:text-foreground transition-colors">Web Apps</Link>
      <span>/</span>
      <Link :href="`/webapps/${app.id}`" class="hover:text-foreground transition-colors">{{ app.name }}</Link>
      <span>/</span>
      <span class="text-foreground font-medium">SSL Certificates</span>
    </div>

    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold tracking-tight">SSL Certificates</h1>
        <p class="text-muted-foreground mt-1">{{ app.domain }}</p>
      </div>
      <Button>
        <Plus class="mr-2 h-4 w-4" />
        Add Certificate
      </Button>
    </div>

    <div class="grid gap-4">
      <Card v-for="cert in certificates" :key="cert.id">
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
                class="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
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
  </div>
</template>
