<script setup lang="ts">
import { ref, computed } from 'vue'
import StatusBadge from '@/components/StatusBadge.vue'
import TerminalOutput from '@/components/TerminalOutput.vue'
import { GitCommit, GitBranch, Clock } from '@lucide/vue'

interface Deployment {
  id: string | number
  commit_hash: string
  commit_message: string
  branch: string
  status: string
  triggered_by: string
  started_at: string
  finished_at?: string
  duration_seconds?: number
}

const props = withDefaults(defineProps<{
  deployment: Deployment
  logs?: string[]
}>(), {
  logs: () => [],
})

const expanded = ref(false)
const isRunning = computed(() => props.deployment.status === 'running')
const shortHash = computed(() => props.deployment.commit_hash.slice(0, 7))
const displayLogs = computed(() =>
  expanded.value ? props.logs : props.logs.slice(0, 20),
)
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-3">
      <div class="flex items-start gap-2">
        <GitCommit class="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
        <div class="min-w-0 space-y-1">
          <div class="flex items-center gap-2">
            <a
              :href="`/commits/${deployment.commit_hash}`"
              class="font-mono text-sm font-semibold hover:underline shrink-0"
            >
              {{ shortHash }}
            </a>
            <p class="text-sm text-foreground truncate">
              {{ deployment.commit_message }}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <div class="flex items-center gap-1">
              <GitBranch class="h-3 w-3" />
              {{ deployment.branch }}
            </div>
            <StatusBadge :status="deployment.status" />
            <span>{{ deployment.triggered_by }}</span>
            <div v-if="deployment.duration_seconds" class="flex items-center gap-1">
              <Clock class="h-3 w-3" />
              {{ deployment.duration_seconds }}s
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="isRunning"
        class="flex items-center gap-2 text-sm text-amber-500"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
          />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
        </span>
        Running...
      </div>
    </div>

    <div v-if="logs.length > 0" class="space-y-2">
      <TerminalOutput :lines="displayLogs" />
      <button
        v-if="logs.length > 20"
        class="text-xs text-muted-foreground hover:text-foreground transition-colors"
        @click="expanded = !expanded"
      >
        {{ expanded ? 'Show less' : `Show all (${logs.length} lines)` }}
      </button>
    </div>

    <p
      v-if="logs.length === 0 && !isRunning"
      class="text-sm text-muted-foreground"
    >
      No logs available
    </p>
  </div>
</template>
