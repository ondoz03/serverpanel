import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface Notification {
    id: string;
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
    read: boolean;
    created_at: string;
}

interface NotificationState {
    notifications: Notification[];
    unreadCount: number;
}

export const useNotificationStore = defineStore('notification', () => {
    const notifications = ref<Notification[]>([
        {
            id: '1',
            type: 'success',
            message: 'Server deployed successfully',
            read: false,
            created_at: new Date().toISOString(),
        },
        {
            id: '2',
            type: 'warning',
            message: 'Disk usage above 80%',
            read: false,
            created_at: new Date().toISOString(),
        },
        {
            id: '3',
            type: 'info',
            message: 'New update available',
            read: true,
            created_at: new Date().toISOString(),
        },
    ]);

    const unreadCount = computed(() => {
        return notifications.value.filter((n) => !n.read).length;
    });

    function addNotification(notif: Omit<Notification, 'id' | 'read' | 'created_at'>): void {
        notifications.value.push({
            id: Date.now().toString(),
            read: false,
            created_at: new Date().toISOString(),
            ...notif,
        });
    }

    function markRead(id: string): void {
        const notif = notifications.value.find((n) => n.id === id);
        if (notif) {
            notif.read = true;
        }
    }

    function markAllRead(): void {
        notifications.value.forEach((n) => {
            n.read = true;
        });
    }

    return {
        notifications,
        unreadCount,
        addNotification,
        markRead,
        markAllRead,
    };
});
