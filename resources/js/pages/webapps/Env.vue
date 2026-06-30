<script setup lang="ts">
import { ref } from 'vue'
import { Head, Link } from '@inertiajs/vue3'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Eye, EyeOff, Plus, ArrowLeft } from '@lucide/vue'

interface Variable {
  key: string
  value: string
  is_secret: boolean
}

interface App {
  id: number
  name: string
}

const props = defineProps<{
  variables: Variable[]
  app: App
}>()

defineOptions({
  breadcrumbs: [
    { label: 'Web Apps', route: '/webapps' },
    { label: 'App', route: '#' },
    { label: 'Environment Variables' },
  ],
})

const secretsVisible = ref<Set<number>>(new Set())

function toggleSecret(index: number) {
  if (secretsVisible.value.has(index)) {
    secretsVisible.value.delete(index)
  } else {
    secretsVisible.value.add(index)
  }
}
</script>

<template>
  <Head title="Environment Variables" />

  <div class="space-y-6">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/webapps" class="hover:text-foreground transition-colors">Web Apps</Link>
      <span>/</span>
      <Link :href="`/webapps/${app.id}`" class="hover:text-foreground transition-colors">{{ app.name }}</Link>
      <span>/</span>
      <span class="text-foreground font-medium">Environment Variables</span>
    </div>

    <div>
      <h1 class="text-2xl font-bold tracking-tight">Environment Variables</h1>
      <p class="text-muted-foreground mt-1">{{ app.name }}</p>
    </div>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[250px]">Key</TableHead>
          <TableHead>Value</TableHead>
          <TableHead class="w-[100px]">Secret</TableHead>
          <TableHead class="w-[80px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(variable, index) in variables" :key="index">
          <TableCell class="font-mono text-sm font-medium">{{ variable.key }}</TableCell>
          <TableCell class="font-mono text-sm">
            <span v-if="variable.is_secret && !secretsVisible.has(index)">••••••••••••••••</span>
            <span v-else>{{ variable.value }}</span>
          </TableCell>
          <TableCell>
            <Badge v-if="variable.is_secret" variant="secondary">Secret</Badge>
          </TableCell>
          <TableCell>
            <button
              v-if="variable.is_secret"
              class="text-muted-foreground hover:text-foreground transition-colors"
              @click="toggleSecret(index)"
            >
              <Eye v-if="!secretsVisible.has(index)" class="h-4 w-4" />
              <EyeOff v-else class="h-4 w-4" />
            </button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <div class="flex items-center gap-3">
      <Button variant="outline">
        <Plus class="mr-2 h-4 w-4" />
        Add Variable
      </Button>
      <Button>Save</Button>
    </div>
  </div>
</template>
