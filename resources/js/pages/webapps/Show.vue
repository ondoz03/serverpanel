<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  ArrowLeft,
  Globe,
  Server as ServerIcon,
  Lock,
  GitBranch,
  Activity,
  Settings,
} from '@lucide/vue'
import type { WebApplication } from '@/types'

defineOptions({
  layout: null,
})

const props = defineProps<{
  app: WebApplication
}>()

function statusVariant(status: string): string {
  if (status === 'active') return 'success'
  if (status === 'suspended') return 'destructive'
  return 'secondary'
}
</script>

<template>
  <Head title="Web Application Details" />

  <div class="space-y-6">
    <div>
      <Link
        href="/web-apps"
        class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft class="h-4 w-4 mr-1" />
        Back to Web Applications
      </Link>
    </div>

    <div>
      <h1 class="text-2xl font-bold tracking-tight">{{ app.name }}</h1>
      <p class="text-muted-foreground">{{ app.domain }}</p>
    </div>

    <Tabs default-value="overview" class="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">
          <Activity class="h-4 w-4 mr-2" />
          Overview
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

      <TabsContent value="overview" class="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Application Information</CardTitle>
            <CardDescription>
              Overview of the web application configuration
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1">
                <p class="text-sm font-medium text-muted-foreground">Status</p>
                <Badge :variant="statusVariant(app.status)">
                  {{ app.status }}
                </Badge>
              </div>

              <div class="space-y-1">
                <p class="text-sm font-medium text-muted-foreground">Domain</p>
                <div class="flex items-center gap-2">
                  <Globe class="h-4 w-4 text-muted-foreground" />
                  <span>{{ app.domain }}</span>
                  <Lock
                    v-if="app.ssl"
                    class="h-4 w-4 text-green-500"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <p class="text-sm font-medium text-muted-foreground">
                  PHP Version
                </p>
                <span>{{ app.php_version }}</span>
              </div>

              <div class="space-y-1">
                <p class="text-sm font-medium text-muted-foreground">
                  Web Server
                </p>
                <span>{{ app.web_server }}</span>
              </div>

              <div class="space-y-1">
                <p class="text-sm font-medium text-muted-foreground">Stack</p>
                <Badge variant="secondary">{{ app.stack }}</Badge>
              </div>

              <div class="space-y-1">
                <p class="text-sm font-medium text-muted-foreground">
                  System User
                </p>
                <span>{{ app.system_user }}</span>
              </div>
            </div>

            <div class="space-y-1">
              <p class="text-sm font-medium text-muted-foreground">
                Document Root
              </p>
              <code class="rounded bg-muted px-2 py-1 text-sm">
                {{ app.document_root }}
              </code>
            </div>

            <div class="space-y-1">
              <p class="text-sm font-medium text-muted-foreground">
                Environment
              </p>
              <Badge
                :variant="app.environment === 'production' ? 'default' : 'secondary'"
              >
                {{ app.environment }}
              </Badge>
            </div>

            <div
              v-if="app.aliases && app.aliases.length > 0"
              class="space-y-1"
            >
              <p class="text-sm font-medium text-muted-foreground">Aliases</p>
              <div class="flex flex-wrap gap-2">
                <Badge
                  v-for="alias in app.aliases"
                  :key="alias"
                  variant="outline"
                >
                  {{ alias }}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common management tasks for this web application
            </CardDescription>
          </CardHeader>
          <CardContent class="flex flex-wrap gap-2">
            <Button as-child>
              <a
                :href="`https://${app.domain}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe class="h-4 w-4 mr-2" />
                Visit Site
              </a>
            </Button>
            <Button variant="secondary">
              <Activity class="h-4 w-4 mr-2" />
              Restart
            </Button>
            <Button variant="secondary">
              <ServerIcon class="h-4 w-4 mr-2" />
              Restart PHP
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
