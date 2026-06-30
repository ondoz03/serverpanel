<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { ArrowLeft, Plus } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

defineOptions({
  breadcrumbs: [
    { label: 'Databases', href: '/databases' },
    { label: 'Create', href: '/databases/create' },
  ],
})
</script>

<template>
  <Head title="Create Database" />

  <div class="space-y-6">
    <div class="flex items-center gap-4">
      <Link href="/databases">
        <Button variant="outline" size="icon">
          <ArrowLeft class="h-4 w-4" />
        </Button>
      </Link>
      <h1 class="text-2xl font-bold tracking-tight">Create Database</h1>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Database Details</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label for="name">Database Name</Label>
          <Input id="name" placeholder="Enter database name" />
        </div>

        <div class="space-y-2">
          <Label for="type">Type</Label>
          <Select>
            <SelectTrigger id="type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mysql">MySQL</SelectItem>
              <SelectItem value="postgresql">PostgreSQL</SelectItem>
              <SelectItem value="mongodb">MongoDB</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <Label for="version">Version</Label>
          <Select>
            <SelectTrigger id="version">
              <SelectValue placeholder="Select version" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8.0">8.0</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="7.0">7.0</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <Label for="port">Port</Label>
          <Input id="port" type="number" placeholder="e.g. 3306" />
        </div>

        <Button class="w-full">
          <Plus class="mr-2 h-4 w-4" />
          Create Database
        </Button>
      </CardContent>
    </Card>
  </div>
</template>
