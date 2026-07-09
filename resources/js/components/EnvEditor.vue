<script setup lang="ts">
import { Eye, EyeOff, Plus, Trash2, GripVertical } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'

interface EnvVariable {
  key: string
  value: string
  is_secret: boolean
}

const props = defineProps<{ modelValue: EnvVariable[] }>()
const emit = defineEmits<{
  'update:modelValue': [value: EnvVariable[]]
}>()

function update(index: number, field: keyof EnvVariable, val: string | boolean | number) {
  const next = [...props.modelValue]
  next[index] = { ...next[index], [field]: val }
  emit('update:modelValue', next)
}

function remove(index: number) {
  emit('update:modelValue', props.modelValue.filter((_, i) => i !== index))
}

function add() {
  emit('update:modelValue', [
    ...props.modelValue,
    { key: '', value: '', is_secret: false },
  ])
}

function toggleSecret(index: number) {
  update(index, 'is_secret', !props.modelValue[index].is_secret)
}
</script>

<template>
  <div class="space-y-4">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-8" />
          <TableHead>Key</TableHead>
          <TableHead>Value</TableHead>
          <TableHead class="w-20">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(v, i) in modelValue" :key="i">
          <TableCell class="text-muted-foreground">
            <GripVertical class="h-4 w-4" />
          </TableCell>
          <TableCell>
            <Input
              :model-value="v.key"
              placeholder="MY_VARIABLE"
              class="font-mono text-xs"
              @update:model-value="update(i, 'key', $event)"
            />
          </TableCell>
          <TableCell>
            <div class="flex items-center gap-1">
              <Input
                :model-value="v.value"
                :type="v.is_secret ? 'password' : 'text'"
                placeholder="value"
                class="font-mono text-xs flex-1"
                @update:model-value="update(i, 'value', $event)"
              />
              <button
                type="button"
                class="p-1 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                :title="v.is_secret ? 'Reveal value' : 'Hide value'"
                @click="toggleSecret(i)"
              >
                <EyeOff v-if="v.is_secret" class="h-3.5 w-3.5" />
                <Eye v-else class="h-3.5 w-3.5" />
              </button>
            </div>
          </TableCell>
          <TableCell>
            <Button
              variant="ghost"
              size="icon"
              class="h-8 w-8 text-muted-foreground hover:text-destructive"
              @click="remove(i)"
            >
              <Trash2 class="h-3.5 w-3.5" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Button variant="outline" size="sm" class="w-full gap-2" @click="add">
      <Plus class="h-4 w-4" />
      Add Variable
    </Button>
  </div>
</template>
