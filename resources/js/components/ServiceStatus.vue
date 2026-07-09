<script setup lang="ts">
import { Server, Activity, Cpu } from '@lucide/vue'
import StatusBadge from '@/components/StatusBadge.vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceItem {
  name: string
  status: string
  cpu?: number
  memory?: number
}

defineProps<{ services: ServiceItem[] }>()
</script>

<template>
  <Card>
    <CardHeader class="pb-3">
      <CardTitle class="flex items-center gap-2 text-base">
        <Server class="h-4 w-4" />
        Services
      </CardTitle>
    </CardHeader>
    <CardContent class="space-y-1">
      <div
        v-for="svc in services"
        :key="svc.name"
        class="flex items-center gap-3 px-2 py-2.5 rounded-md hover:bg-muted/50 transition-colors"
      >
        <Activity class="h-4 w-4 text-muted-foreground shrink-0" />
        <span class="text-sm font-medium flex-1 min-w-0 truncate">{{ svc.name }}</span>

        <div
          v-if="svc.cpu !== undefined"
          class="flex items-center gap-1 text-xs text-muted-foreground shrink-0"
        >
          <Cpu class="h-3 w-3" />
          {{ svc.cpu }}%
        </div>

        <div
          v-if="svc.memory !== undefined"
          class="text-xs text-muted-foreground tabular-nums shrink-0"
        >
          {{ svc.memory }} MB
        </div>

        <StatusBadge :status="svc.status" class="shrink-0" />
      </div>

      <p
        v-if="services.length === 0"
        class="text-sm text-muted-foreground text-center py-6"
      >
        No services
      </p>
    </CardContent>
  </Card>
</template>
