<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  data: number[]
  color?: string
  height?: number
  showAxis?: boolean
}>(), {
  color: 'hsl(var(--primary))',
  height: 120,
  showAxis: false,
})

const gradientId = `chart-grad-${Math.random().toString(36).slice(2, 9)}`
const tooltip = ref<{ x: number; value: number } | null>(null)

const pad = { top: 8, right: 8, bottom: props.showAxis ? 20 : 8, left: 8 }
const chartWidth = 300
const innerW = chartWidth - pad.left - pad.right
const innerH = props.height - pad.top - pad.bottom

const maxVal = computed(() => Math.max(...props.data, 1))
const minVal = computed(() => Math.min(...props.data, 0))
const range = computed(() => maxVal.value - minVal.value || 1)

const points = computed(() =>
  props.data
    .map((v, i) => {
      const x = pad.left + (i / Math.max(props.data.length - 1, 1)) * innerW
      const y = pad.top + innerH - ((v - minVal.value) / range.value) * innerH
      return `${x},${y}`
    })
    .join(' '),
)

const fillPoints = computed(() => {
  const lastIdx = props.data.length - 1
  const right = pad.left + innerW
  const bottom = pad.top + innerH
  return `${points.value} ${right},${bottom} ${pad.left},${bottom}`
})

function onMouseMove(e: MouseEvent) {
  const target = e.currentTarget as SVGSVGElement
  const rect = target.getBoundingClientRect()
  const mx = e.clientX - rect.left
  const ratio = mx / rect.width
  const idx = Math.round(ratio * (props.data.length - 1))
  if (idx >= 0 && idx < props.data.length) {
    tooltip.value = { x: mx, value: props.data[idx] }
  }
}

function onMouseLeave() {
  tooltip.value = null
}
</script>

<template>
  <div class="space-y-1.5">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium text-muted-foreground">{{ label }}</span>
      <span
        v-if="tooltip"
        class="text-sm font-mono tabular-nums font-medium transition-all duration-150"
        :style="{ color }"
      >
        {{ tooltip.value }}
      </span>
    </div>
    <div class="relative select-none">
      <svg
        :viewBox="`0 0 ${chartWidth} ${height}`"
        class="w-full overflow-visible"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
        style="max-height: 200px"
      >
        <defs>
          <linearGradient :id="gradientId" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" :stop-color="color" stop-opacity="0.25" />
            <stop offset="100%" :stop-color="color" stop-opacity="0.02" />
          </linearGradient>
        </defs>

        <polygon :fill="`url(#${gradientId})`" :points="fillPoints" />

        <polyline
          :points="points"
          :stroke="color"
          stroke-width="2"
          fill="none"
          stroke-linejoin="round"
          stroke-linecap="round"
        />

        <line
          v-if="showAxis"
          :x1="pad.left"
          :y1="pad.top + innerH"
          :x2="pad.left + innerW"
          :y2="pad.top + innerH"
          stroke="hsl(var(--border))"
          stroke-width="1"
        />
      </svg>

      <div
        v-if="tooltip"
        class="absolute bottom-0 w-2.5 h-2.5 rounded-full border-2 border-background pointer-events-none -translate-x-1/2 translate-y-1/2"
        :style="{ left: `${tooltip.x}px`, backgroundColor: color }"
      />
    </div>
  </div>
</template>
