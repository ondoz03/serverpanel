import { ref, type Ref } from 'vue';

interface UseClipboardReturn {
    copied: Ref<boolean>;
    copy: (value: string) => Promise<void>;
}

export function useClipboard(): UseClipboardReturn {
    const copied = ref(false);

    async function copy(value: string): Promise<void> {
        await navigator.clipboard.writeText(value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    }

    return { copied, copy };
}
