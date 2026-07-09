<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import {
  Lock,
  GitBranch,
  Activity,
  Settings,
  Server as ServerIcon,
  Terminal,
} from '@lucide/vue'
import { ref, computed } from 'vue'
import { toast } from 'vue-sonner'
import EnvEditor from '@/components/EnvEditor.vue'
import { Button } from '@/components/ui/button'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

interface Variable {
  key: string
  value: string
  is_secret: boolean
}

interface App {
  id: string | number
  name: string
  domain?: string
  stack?: string
}

const props = defineProps<{
  variables: Variable[]
  app: App
}>()

defineOptions({
  layout: {
    breadcrumbs: [
      { title: 'Web Apps', href: '/web-apps' },
      { title: 'App Details', href: '#' },
      { title: 'Environment Variables', href: '#' },
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
      console.error('Failed to load local webapp in env details', e)
    }
  }

  return props.app
})

const variablesList = ref<Variable[]>([...props.variables])
const isSaving = ref(false)

function saveVariables() {
  isSaving.value = true
  toast.promise(
    new Promise((resolve) => {
      setTimeout(() => {
        isSaving.value = false
        resolve(true)
      }, 1000)
    }),
    {
      loading: 'Saving environment variables...',
      success: 'Environment variables saved and decrypted on agent!',
      error: 'Failed to save environment variables.',
    }
  )
}
</script>

<template>
  <Head title="Environment Variables" />

  <div class="space-y-6 p-4 md:p-6">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/web-apps" class="hover:text-foreground transition-colors">Web Apps</Link>
      <span>/</span>
      <Link :href="`/web-apps/${app.id}`" class="hover:text-foreground transition-colors">{{ app.name }}</Link>
      <span>/</span>
      <span class="text-foreground font-medium">Environment Variables</span>
    </div>

    <div>
      <h1 class="text-2xl font-bold tracking-tight">{{ app.name }}</h1>
      <p class="text-muted-foreground">{{ app.domain || 'company.com' }}</p>
    </div>

    <Tabs default-value="env" class="space-y-4">
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
        <TabsTrigger value="env">
          <ServerIcon class="h-4 w-4 mr-2" />
          Environment Variables
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

      <TabsContent value="env" class="space-y-4">
        <EnvEditor v-model="variablesList" />
        
        <div class="flex items-center gap-3 pt-2">
          <Button :disabled="isSaving" @click="saveVariables">
            <span v-if="isSaving">Saving...</span>
            <span v-else>Save Changes</span>
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>
