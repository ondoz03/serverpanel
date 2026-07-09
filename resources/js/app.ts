import { createInertiaApp } from '@inertiajs/vue3';
import { configureEcho } from '@laravel/echo-vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { initializeTheme } from '@/composables/useAppearance';
import AppLayout from '@/layouts/AppLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { initializeFlashToast } from '@/lib/flashToast';

configureEcho({
    broadcaster: 'reverb',
});

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.vue', { eager: true });
        const page = pages[`./pages/${name}.vue`];

        if (!page) {
throw new Error(`Page not found: ${name}`);
}

        return page as any;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp(App, props as any);
        app.use(plugin);
        app.use(createPinia());
        app.mount(el);
    },
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'Welcome':
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();

initializeFlashToast();
