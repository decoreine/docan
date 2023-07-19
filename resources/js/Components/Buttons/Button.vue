<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        title?: string;
        class?: string;
        type?: 'button' | 'submit' | 'reset';
    }>(),
    {
        title: "Button",
        type:  'button',
        class: "p-2 text-xs font-medium text-center inline-flex items-center text-white dark:hover:bg-gray-800 hover:bg-blue-100 dark:focus:ring-blue-300 rounded-md"

    }
);
</script>
<template>
    <button
        :type="type"
        :class="props.class"
    >
        <slot name="Svg"/>
        <slot />
    </button>
</template>
