import { defineStore } from 'pinia';
import { ref } from 'vue';

interface WebApp {
    id: string;
    name: string;
    framework: string;
    domain: string;
    status: string;
}

export const useWebAppStore = defineStore('webApp', () => {
    const apps = ref<WebApp[]>([]);
    const currentApp = ref<WebApp | null>(null);
    const loading = ref(false);

    async function fetchApps(): Promise<void> {
        loading.value = true;
        apps.value = [
            {
                id: '1',
                name: 'Laravel App',
                framework: 'laravel',
                domain: 'app.example.com',
                status: 'active',
            },
            {
                id: '2',
                name: 'Static Site',
                framework: 'static',
                domain: 'static.example.com',
                status: 'active',
            },
            {
                id: '3',
                name: 'Node API',
                framework: 'node',
                domain: 'api.example.com',
                status: 'deployed',
            },
        ];
        loading.value = false;
    }

    async function fetchApp(id: string): Promise<void> {
        loading.value = true;
        const found = apps.value.find((a: WebApp) => a.id === id);
        currentApp.value = found ?? null;
        loading.value = false;
    }

    return {
        apps,
        currentApp,
        loading,
        fetchApps,
        fetchApp,
    };
});
