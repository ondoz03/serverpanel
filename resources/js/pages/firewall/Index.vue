<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { Shield, Plus, Pencil, Trash2 } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { FirewallRule } from '@/types'

defineProps<{
  rules: FirewallRule[]
}>()

defineOptions({
  breadcrumbs: [{ label: 'Firewall', href: '/firewall' }],
})
</script>

<template>
  <Head title="Firewall Rules" />

  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold tracking-tight">Firewall Rules</h1>
      <Link href="/firewall/create">
        <Button>
          <Plus class="mr-2 h-4 w-4" />
          Add Rule
        </Button>
      </Link>
    </div>

    <div v-if="rules.length === 0" class="flex flex-col items-center justify-center py-16 text-center">
      <Shield class="mb-4 h-12 w-12 text-muted-foreground" />
      <p class="mb-4 text-lg font-medium">No firewall rules yet</p>
      <p class="mb-6 text-sm text-muted-foreground">Add a rule to secure your server.</p>
      <Link href="/firewall/create">
        <Button>
          <Plus class="mr-2 h-4 w-4" />
          Add Rule
        </Button>
      </Link>
    </div>

    <div v-else class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Port</TableHead>
            <TableHead>Protocol</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Direction</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Description</TableHead>
            <TableHead class="w-20"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="rule in rules" :key="rule.id">
            <TableCell class="font-medium">{{ rule.name }}</TableCell>
            <TableCell>{{ rule.port }}</TableCell>
            <TableCell>{{ rule.protocol }}</TableCell>
            <TableCell>{{ rule.source }}</TableCell>
            <TableCell>{{ rule.direction }}</TableCell>
            <TableCell>
              <Badge :variant="rule.action === 'allow' ? 'success' : 'destructive'">
                {{ rule.action }}
              </Badge>
            </TableCell>
            <TableCell>
              <Switch :model-value="rule.enabled" />
            </TableCell>
            <TableCell class="max-w-[200px] truncate text-muted-foreground">
              {{ rule.description }}
            </TableCell>
            <TableCell>
              <div class="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                  <Pencil class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 class="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
