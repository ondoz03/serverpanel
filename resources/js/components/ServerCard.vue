<script setup lang="ts">
import { Monitor, HardDrive, Wifi } from '@lucide/vue'
import StatusBadge from '@/components/StatusBadge.vue'
import { Card, CardContent } from '@/components/ui/card'

interface Server {
  id: string | number
  name: string
  ip: string
  os: string
  status: string
  cpu_usage: number
  memory_usage: number
  memory_total: number
  disk_usage: number
  disk_total: number
  uptime: string
  region: string
}

defineProps<{ server: Server }>()
</script>

<template>
  <a :href="`/servers/${server.id}`" class="block group">
    <Card
      class="transition-shadow duration-200 cursor-pointer group-hover:shadow-lg"
    >
      <CardContent class="p-4 space-y-4">
        <div class="flex items-start justify-between">
          <div class="space-y-1">
            <h3 class="font-semibold text-lg leading-none">{{ server.name }}</h3>
            <p class="text-sm text-muted-foreground font-mono">{{ server.ip }}</p>
          </div>
          <StatusBadge :status="server.status" />
        </div>

        <div class="space-y-3">
          <div>
            <div class="flex items-center gap-2 text-sm mb-1.5">
              <Monitor class="h-3.5 w-3.5 text-muted-foreground" />
              <span class="text-muted-foreground text-xs">CPU</span>
              <span class="ml-auto font-mono text-xs tabular-nums">{{ server.cpu_usage }}%</span>
            </div>
            <div class="h-2 bg-muted rounded-full overflow-hidden">
              <div
                class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
                :style="{ width: `${Math.min(server.cpu_usage, 100)}%` }"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center gap-2 text-sm mb-1.5">
              <HardDrive class="h-3.5 w-3.5 text-muted-foreground" />
              <span class="text-muted-foreground text-xs">Memory</span>
              <span class="ml-auto font-mono text-xs tabular-nums">
                {{ server.memory_usage }} / {{ server.memory_total }} GB
              </span>
            </div>
            <div class="h-2 bg-muted rounded-full overflow-hidden">
              <div
                class="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
                :style="{
                  width: `${server.memory_total > 0 ? Math.min((server.memory_usage / server.memory_total) * 100, 100) : 0}%`,
                }"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center gap-2 text-sm mb-1.5">
              <Wifi class="h-3.5 w-3.5 text-muted-foreground" />
              <span class="text-muted-foreground text-xs">Disk</span>
              <span class="ml-auto font-mono text-xs tabular-nums">
                {{ server.disk_usage }} / {{ server.disk_total }} GB
              </span>
            </div>
            <div class="h-2 bg-muted rounded-full overflow-hidden">
              <div
                class="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500"
                :style="{
                  width: `${server.disk_total > 0 ? Math.min((server.disk_usage / server.disk_total) * 100, 100) : 0}%`,
                }"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
          <span>{{ server.region }}</span>
          <span>{{ server.os }}</span>
          <span class="ml-auto">{{ server.uptime }}</span>
        </div>
      </CardContent>
    </Card>
  </a>
</template>
