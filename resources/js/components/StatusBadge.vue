<script setup lang="ts">
import { computed } from "vue"
import { Badge } from "@/components/ui/badge"

const props = defineProps<{
  status: string
  label?: string
}>()

type BadgeVariant = "default" | "secondary" | "destructive" | "outline"

const variantMap: Record<string, BadgeVariant> = {
  active: "default",
  success: "default",
  running: "default",
  completed: "default",
  allow: "default",
  inactive: "secondary",
  queued: "secondary",
  error: "destructive",
  expired: "destructive",
  failed: "destructive",
  deny: "destructive",
  suspended: "outline",
  warning: "outline",
}

const dotColorMap: Record<string, string> = {
  active: "bg-green-500",
  success: "bg-green-500",
  running: "bg-green-500",
  completed: "bg-green-500",
  allow: "bg-green-500",
  inactive: "bg-gray-400",
  queued: "bg-gray-400",
  error: "bg-red-500",
  expired: "bg-red-500",
  failed: "bg-red-500",
  deny: "bg-red-500",
  suspended: "bg-orange-500",
  warning: "bg-orange-500",
}

const variant = computed<BadgeVariant>(() => variantMap[props.status] ?? "default")
const dotColor = computed(() => dotColorMap[props.status] ?? "bg-gray-400")
const displayLabel = computed(() => props.label ?? props.status)
</script>

<template>
  <Badge :variant="variant" class="gap-1.5">
    <span :class="['inline-block size-2 rounded-full', dotColor]" />
    {{ displayLabel }}
  </Badge>
</template>
