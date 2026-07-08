<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';
import { SidebarInset } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import type { AppVariant } from '@/types';

type Props = {
    variant?: AppVariant;
    class?: string;
};

const props = withDefaults(defineProps<Props>(), {
    variant: 'sidebar',
});
const className = computed(() => props.class);

const isLoading = ref(false);

onMounted(() => {
    router.on('start', () => {
 isLoading.value = true; 
});
    router.on('finish', () => {
 isLoading.value = false; 
});
});
</script>

<template>
    <SidebarInset v-if="props.variant === 'sidebar'" :class="className">
        <slot />
    </SidebarInset>
    <main
        v-else
        class="flex h-full w-full flex-1 flex-col gap-4 p-4"
        :class="className"
    >
        <div class="flex flex-1 flex-col rounded-xl bg-white p-6 shadow-sm dark:bg-neutral-800">
            <template v-if="isLoading">
                <div class="space-y-6">
                    <div class="space-y-2">
                        <Skeleton class="h-8 w-48" />
                        <Skeleton class="h-4 w-72" />
                    </div>
                    <div class="space-y-3">
                        <Skeleton class="h-4 w-full" />
                        <Skeleton class="h-4 w-5/6" />
                        <Skeleton class="h-4 w-4/6" />
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <Skeleton class="h-24 rounded-lg" />
                        <Skeleton class="h-24 rounded-lg" />
                        <Skeleton class="h-24 rounded-lg" />
                    </div>
                    <div class="space-y-2">
                        <Skeleton class="h-4 w-full" />
                        <Skeleton class="h-4 w-full" />
                        <Skeleton class="h-4 w-3/4" />
                    </div>
                </div>
            </template>
            <slot v-else />
        </div>
    </main>
</template>
