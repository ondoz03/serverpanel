import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { defineConfig, type Plugin } from 'vite';

function suppressCssWarnings(): Plugin {
    return {
        name: 'suppress-css-warnings',
        enforce: 'post',
        configResolved(config) {
            const logger = config.logger;
            if (!logger) return;
            const origWarn = logger.warn.bind(logger);
            logger.warn = (msg, options) => {
                if (typeof msg === 'string' && msg.includes('Unexpected token String')) return;
                origWarn(msg, options);
            };
        },
    };
}

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        inertia(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        wayfinder({
            formVariants: true,
        }),
        suppressCssWarnings(),
    ],
    build: {
        chunkSizeWarningLimit: 1000,
        rolldownOptions: {
            onLog(_level, log) {
                if (log?.code === 'INVALID_ANNOTATION') return;
            },
            output: {
                codeSplitting: true,
                manualChunks(id: string) {
                    if (id.includes('node_modules')) {
                        if (id.includes('reka-ui') || id.includes('@vueuse/core')) return 'vendor-ui';
                        if (id.includes('@lucide')) return 'icons';
                        return 'vendor';
                    }
                },
            },
        },
    },
});
