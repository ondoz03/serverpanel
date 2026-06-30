import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Server } from '@/types';

interface ServerState {
    servers: Server[];
    currentServer: Server | null;
    loading: boolean;
}

export const useServerStore = defineStore('server', () => {
    const servers = ref<Server[]>([]);
    const currentServer = ref<Server | null>(null);
    const loading = ref(false);

    async function fetchServers(): Promise<void> {
        loading.value = true;
        servers.value = [
            {
                id: '1',
                name: 'Web Server 01',
                type: 'nginx',
                status: 'active',
                ip: '192.168.1.10',
                region: 'us-east',
            },
            {
                id: '2',
                name: 'Database Server 01',
                type: 'mysql',
                status: 'active',
                ip: '192.168.1.20',
                region: 'us-east',
            },
            {
                id: '3',
                name: 'Cache Server 01',
                type: 'redis',
                status: 'inactive',
                ip: '192.168.1.30',
                region: 'eu-west',
            },
        ];
        loading.value = false;
    }

    async function fetchServer(id: string): Promise<void> {
        loading.value = true;
        const found = servers.value.find((s) => s.id === id);
        currentServer.value = found ?? null;
        loading.value = false;
    }

    function setCurrentServer(server: Server | null): void {
        currentServer.value = server;
    }

    return {
        servers,
        currentServer,
        loading,
        fetchServers,
        fetchServer,
        setCurrentServer,
    };
});
