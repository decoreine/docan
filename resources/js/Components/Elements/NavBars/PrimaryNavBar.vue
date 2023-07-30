<template>
    <!-- PrimaryNavMenu -->
    <!-- Premary Nav Menu -->
    <nav :class="nav_class">
        <div :class="classes">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Hamburger Button-->
                    <div class="mr-2 flex items-center sm:hidden">
                        <button
                            @click="humButtonStateChanged()"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                        >
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    :class="{
                                            hidden: humButtonState,
                                            'inline-flex': !humButtonState,
                                        }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    :class="{
                                            hidden: !humButtonState,
                                            'inline-flex': humButtonState,
                                        }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <!-- End Hamburger Button-->
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <slot name="Logo"/>
                    </div>
                    <!-- End Logo -->

                    <!-- Horizontal Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <slot name="HorizontalNavigationLinks"/>
                    </div>
                    <!-- End Horizontal Navigation Links -->

                </div>
                <div class="flex">
                    <!-- dark button -->
                    <div class="flex items-center">
                        <Button @click="toggleDark()">

                            <span class="dark:hidden">
                                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="w-6 h-6">
                                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          class="fill-sky-400/20 stroke-sky-500"></path>
                                    <path
                                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                        class="stroke-sky-500"></path>
                                </svg>
                            </span>
                            <span class="hidden dark:inline">
                                <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                          class="fill-sky-400/20"></path>
                                    <path
                                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                        class="fill-sky-500"></path>

                                </svg>
                            </span>

                        </Button>
                    </div>

                    <!-- Vertical Navigation Links -->
                    <div class="hidden sm:flex sm:items-center sm:ml-4">
                        <!-- Settings Dropdown -->
                        <div class="ml-3 relative">
                            <Dropdown align="right" width="48">
                                <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                </template>

                                <template #content>
                                    <slot name="VerticalDropdown"/>
                                </template>

                            </Dropdown>
                        </div>
                    </div>
                    <!-- End Vertical Navigation Links -->

                    <!-- Dot Humberger -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button
                            @click="showingResponsiveVerticalDropdown = !showingResponsiveVerticalDropdown;"
                            class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                        >
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    :class="{
                                            hidden: showingResponsiveVerticalDropdown,
                                            'inline-flex': !showingResponsiveVerticalDropdown,
                                        }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                />
                                <path
                                    :class="{
                                            hidden: !showingResponsiveVerticalDropdown,
                                            'inline-flex': showingResponsiveVerticalDropdown,
                                        }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <!-- End Dot Humberger -->
                </div>
            </div>
        </div>
    </nav>
    <!-- End Premary Nav Menu -->

    <!-- Page Heading -->
    <div :class="heading_classes">
        <header class="bg-white dark:bg-gray-800 shadow">
            <div class="py-2 space-x-2  sm:flex">
                <slot name="Title"/>
            </div>
        </header>
    </div>
    <!-- End Page Heading -->

    <!--Mobile Primary NavMenu -->
    <!-- to make relative you can replace "sticky top-14 z-40" by "relative" -->
    <div
        :class="{ block: showingResponsiveVerticalDropdown, hidden: !showingResponsiveVerticalDropdown }"
        class="sticky top-14 z-40  sm:hidden absolute z-10 bg-white w-full dark:bg-gray-800"
    >
        <div class="pt-2 pb-3 space-y-1">
            <div class="pt-4 pb-3 border-t border-b border-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-600">
                <div class="px-4">
                    <div class="font-medium text-base text-gray-800 dark:text-gray-200">
                        {{ $page.props.auth.user.name }}
                    </div>
                    <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                </div>

                <div class="mt-3 space-y-1">
                    <slot name="ResponsiveVerticalDropdown"/>
                </div>
            </div>
        </div>
    </div>
    <!-- End Mobile Primary NavMenu -->
    <!-- End PrimaryNavMenu -->
</template>
<script setup lang="ts">
import {ref} from 'vue';
import Dropdown from '@/Components/Elements/Dropdowns/Dropdown.vue';
import Button from "@/Components/Elements/Buttons/BaseButton.vue";
import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const showingResponsiveVerticalDropdown = ref(false);
let humButtonState: boolean = false;
import {computed} from 'vue';

const props = defineProps<{
    wide?: boolean;
    sticky?: boolean; // to get this value use {{ props.sticky }}
}>();

const classes = computed(() =>
    props.wide ? 'bg-white px-4 sm:px-6 lg:px-8  dark:bg-black' : 'max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8 dark:bg-black'
);
const heading_classes = computed(() =>
    props.wide ? 'bg-white' : 'max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8'
);
const nav_class = computed(() =>
    props.sticky ? 'sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700' : 'z-40 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700'
);

const emit = defineEmits(['humButtonStatechanged'])

function humButtonStateChanged() {
    humButtonState = !humButtonState;
    if (showingResponsiveVerticalDropdown)
        showingResponsiveVerticalDropdown.value = false;
    emit('humButtonStatechanged', humButtonState)
}

// create function and make it accible in parent component
const reset = () => {
    humButtonState = false;
    showingResponsiveVerticalDropdown.value = false;
}
defineExpose({
    reset
})

</script>
