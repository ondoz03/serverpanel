<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { Database, Plus } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Database as DatabaseType } from '@/types'

defineProps<{
  databases: DatabaseType[]
}>()

defineOptions({
  breadcrumbs: [{ label: 'Databases', href: '/databases' }],
})
</script>

<template>
  <Head title="Databases" />

  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold tracking-tight">Databases</h1>
      <Link href="/databases/create">
        <Button>
          <Plus class="mr-2 h-4 w-4" />
          Add Database
        </Button>
      </Link>
    </div>

    <div v-if="databases.length === 0" class="flex flex-col items-center justify-center py-16 text-center">
      <Database class="mb-4 h-12 w-12 text-muted-foreground" />
      <p class="mb-4 text-lg font-medium">No databases yet</p>
      <p class="mb-6 text-sm text-muted-foreground">Get started by creating your first database.</p>
      <Link href="/databases/create">
        <Button>
          <Plus class="mr-2 h-4 w-4" />
          Add Database
        </Button>
      </Link>
    </div>

    <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card v-for="db in databases" :key="db.id">
        <CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Database class="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle class="text-base">{{ db.name }}</CardTitle>
              <CardDescription>{{ db.type }} {{ db.version }}</CardDescription>
            </div>
          </div>
          <Badge :variant="db.status === 'active' ? 'success' : 'secondary'">
            {{ db.status }}
          </Badge>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="text-muted-foreground">Port</span>
              <p class="font-medium">{{ db.port }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">Size</span>
              <p class="font-medium">{{ db.size_mb }} MB</p>
            </div>
            <div>
              <span class="text-muted-foreground">Databases</span>
              <p class="font-medium">{{ db.databases }}</p>
            </div>
            <div>
              <span class="text-muted-foreground">Users</span>
              <p class="font-medium">{{ db.users }}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
