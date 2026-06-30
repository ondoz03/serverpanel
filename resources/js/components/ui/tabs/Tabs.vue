<script setup lang="ts">
import { TabsRoot } from 'reka-ui';

const props = defineProps<{
  defaultValue?: string;
  modelValue?: string;
  class?: any;
  orientation?: 'horizontal' | 'vertical';
}>();

const emit = defineEmits<{ 'update:modelValue': [value: string] }>();
</script>

<template>
  <TabsRoot
    :default-value="defaultValue"
    :model-value="modelValue"
    :orientation="orientation"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </TabsRoot>
</template>
