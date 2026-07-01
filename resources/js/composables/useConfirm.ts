import { ref } from 'vue';

interface ConfirmOptions {
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'destructive' | 'default';
}

interface UseConfirmReturn {
    confirm: (options?: ConfirmOptions) => Promise<boolean>;
    resolve: (value: boolean) => void;
    open: ReturnType<typeof ref<boolean>>;
    onConfirm: ReturnType<typeof ref<(() => void) | null>>;
    onCancel: ReturnType<typeof ref<(() => void) | null>>;
}

export function useConfirm(): UseConfirmReturn {
    const open = ref(false);
    const onConfirm = ref<(() => void) | null>(null);
    const onCancel = ref<(() => void) | null>(null);

    let resolvePromise: ((value: boolean) => void) | null = null;

    function confirm(options?: ConfirmOptions): Promise<boolean> {
        open.value = true;

        return new Promise((resolve) => {
            resolvePromise = resolve;

            onConfirm.value = () => {
                open.value = false;
                resolve(true);
            };

            onCancel.value = () => {
                open.value = false;
                resolve(false);
            };
        });
    }

    function resolve(value: boolean): void {
        if (resolvePromise) {
            resolvePromise(value);
            resolvePromise = null;
        }
        open.value = false;
    }

    return { confirm, resolve, open, onConfirm, onCancel };
}
