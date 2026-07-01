<script setup lang="ts">
import { ref } from "vue"
import { Copy, Check } from "@lucide/vue"
import { Button } from "@/components/ui/button"
import { toast } from "vue-sonner"

const props = withDefaults(defineProps<{
  value: string
  label?: string
}>(), {
  label: "Copy",
})

const copied = ref(false)

async function handleCopy() {
  try {
    await navigator.clipboard.writeText(props.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
    toast("Copied!")
  } catch {
    toast("Failed to copy")
  }
}
</script>

<template>
  <Button variant="outline" size="sm" @click="handleCopy">
    <Check v-if="copied" class="size-3.5 text-green-500" />
    <Copy v-else class="size-3.5" />
    {{ copied ? "Copied!" : label }}
  </Button>
</template>
