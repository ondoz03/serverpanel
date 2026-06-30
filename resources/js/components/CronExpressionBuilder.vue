<script setup lang="ts">
import { computed } from "vue"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  "update:modelValue": [value: string]
}>()

interface Preset {
  label: string
  expression: string
}

const presets: Preset[] = [
  { label: "Every minute", expression: "* * * * *" },
  { label: "Every 5 minutes", expression: "*/5 * * * *" },
  { label: "Every 15 minutes", expression: "*/15 * * * *" },
  { label: "Every 30 minutes", expression: "*/30 * * * *" },
  { label: "Every hour", expression: "0 * * * *" },
  { label: "Daily midnight", expression: "0 0 * * *" },
  { label: "Daily 3am", expression: "0 3 * * *" },
  { label: "Weekly Sunday", expression: "0 0 * * 0" },
  { label: "Monthly", expression: "0 0 1 * *" },
]

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const description = computed(() => {
  const parts = props.modelValue.trim().split(/\s+/)
  if (parts.length !== 5) return "Invalid cron expression"
  const [minute, hour, dayOfMonth, month, dayOfWeek] = parts

  if (minute === "*" && hour === "*" && dayOfMonth === "*" && month === "*" && dayOfWeek === "*") {
    return "Every minute"
  }

  if (minute.startsWith("*/") && hour === "*" && dayOfMonth === "*" && month === "*" && dayOfWeek === "*") {
    return `Every ${minute.slice(2)} minutes`
  }

  if (minute === "0" && hour === "*" && dayOfMonth === "*" && month === "*" && dayOfWeek === "*") {
    return "Every hour"
  }

  if (minute === "0" && hour !== "*" && dayOfMonth === "*" && month === "*" && dayOfWeek === "*") {
    const h = Number.parseInt(hour)
    const period = h >= 12 ? "PM" : "AM"
    const displayHour = h === 0 ? 12 : h > 12 ? h - 12 : h
    return `At ${displayHour}:00 ${period} daily`
  }

  if (minute !== "*" && hour === "*" && dayOfMonth === "*" && month === "*" && dayOfWeek === "*") {
    return `At minute ${minute} past every hour`
  }

  if (minute === "0" && hour === "0" && dayOfMonth === "1" && month === "*" && dayOfWeek === "*") {
    return "At 12:00 AM on day 1 of the month"
  }

  if (minute === "0" && hour === "0" && dayOfMonth === "*" && month === "*" && dayOfWeek !== "*") {
    const dw = Number.parseInt(dayOfWeek)
    const dayName = daysOfWeek[dw] ?? `day ${dw}`
    return `At 12:00 AM on ${dayName}`
  }

  if (minute === "0" && hour === "0" && dayOfMonth !== "*" && month === "*" && dayOfWeek === "*") {
    return `At 12:00 AM on day ${dayOfMonth} of the month`
  }

  return props.modelValue
})

function onPresetChange(value: string) {
  emit("update:modelValue", value)
}

function onInputChange(e: Event) {
  const target = e.target as HTMLInputElement
  emit("update:modelValue", target.value)
}
</script>

<template>
  <div class="space-y-3">
    <Input
      :model-value="modelValue"
      placeholder="* * * * *"
      @input="onInputChange"
    />
    <Select @update:model-value="onPresetChange">
      <SelectTrigger class="w-full">
        <SelectValue placeholder="Select a preset..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="preset in presets"
          :key="preset.expression"
          :value="preset.expression"
        >
          {{ preset.label }}
        </SelectItem>
      </SelectContent>
    </Select>
    <p v-if="modelValue.trim()" class="text-muted-foreground text-xs">
      {{ description }}
    </p>
  </div>
</template>
