<template>
    <span :class="state_class"> {{ props.label }} </span>
</template>

<script setup lang="ts">
import {computed} from 'vue';
const props = withDefaults(
    defineProps<{
        label?: string;
        state?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    }>(),
    {
        label: 'Primary',
        state: 'primary',
    }
);
const state_class = computed(() => {
    return {
        primary: 'inline-block px-1 py-0.5 text-white text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded-sm bg-blue-500',
        secondary: 'inline-block px-1 py-0.5 text-white text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded-sm bg-gray-600',
        success: 'inline-block px-1 py-0.5 text-white text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded-sm bg-green-600',
        danger: 'inline-block px-1 py-0.5 text-white text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded-sm bg-red-600',
        warning: 'inline-block px-1 py-0.5 text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded-sm text-gray-900 bg-yellow-400',
        info: 'inline-block px-1 py-0.5 text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded-sm text-white bg-teal-500',
        light: 'inline-block px-1 py-0.5 text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded-sm text-gray-900 bg-gray-100',
        dark: 'inline-block px-1 py-0.5 text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded-sm text-white bg-gray-800',
    }[props.state];
});
</script>
