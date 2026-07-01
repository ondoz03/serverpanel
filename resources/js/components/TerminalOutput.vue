<script setup lang="ts">
import { ref, onUnmounted, watch, nextTick } from "vue"
import { ChevronDown, ChevronUp, Trash2 } from "@lucide/vue"
import { Button } from "@/components/ui/button"

const props = withDefaults(defineProps<{
  lines: string[]
  stream?: boolean
  speed?: number
}>(), {
  stream: false,
  speed: 100,
})

const emit = defineEmits<{
  complete: []
}>()

const visibleCount = ref(props.stream ? 0 : props.lines.length)
const collapsed = ref(true)
const maxVisible = 20
let intervalId: ReturnType<typeof setInterval> | undefined

function start() {
  if (!props.stream || visibleCount.value >= props.lines.length) return
  stop()
  intervalId = setInterval(() => {
    visibleCount.value++
    nextTick(() => {
      scrollToBottom()
    })
    if (visibleCount.value >= props.lines.length) {
      stop()
      emit("complete")
    }
  }, props.speed)
}

function stop() {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
    intervalId = undefined
  }
}

function clear() {
  stop()
  visibleCount.value = 0
}

function scrollToBottom() {
  nextTick(() => {
    const el = terminalRef.value
    if (el) el.scrollTop = el.scrollHeight
  })
}

function resetStream() {
  if (props.stream) {
    visibleCount.value = 0
    start()
  }
}

watch(() => props.lines, () => {
  resetStream()
}, { deep: false })

onUnmounted(() => {
  stop()
})

const terminalRef = ref<HTMLDivElement | undefined>()

const displayLines = ref<string[]>([])

watch([visibleCount, collapsed], () => {
  const all = props.lines.slice(0, visibleCount.value)
  if (collapsed.value && all.length > maxVisible) {
    displayLines.value = all.slice(-maxVisible)
  } else {
    displayLines.value = all
  }
}, { immediate: true })

defineExpose({ start, stop, clear })
</script>

<template>
  <div class="space-y-2">
    <div
      ref="terminalRef"
      class="max-h-80 overflow-auto rounded-lg border border-zinc-700 bg-zinc-950 p-4 font-mono text-sm text-green-400"
    >
      <div v-if="displayLines.length === 0" class="text-zinc-500">Waiting for output...</div>
      <div v-for="(line, i) in displayLines" :key="i">
        <span class="text-zinc-500">$ </span>{{ line }}
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Button variant="ghost" size="sm" @click="collapsed = !collapsed">
        <ChevronUp v-if="collapsed" class="size-3.5" />
        <ChevronDown v-else class="size-3.5" />
        {{ collapsed ? "Show all" : "Collapse" }}
      </Button>
      <Button variant="ghost" size="sm" @click="clear">
        <Trash2 class="size-3.5" />
        Clear
      </Button>
      <span class="text-muted-foreground text-xs">
        {{ visibleCount }} / {{ lines.length }} lines
      </span>
    </div>
  </div>
</template>
