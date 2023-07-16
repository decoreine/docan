<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from '@/Components/Dropdowns/Dropdown.vue';

const showingResponsiveVerticalDropdown = ref(false);
let humButtonState: boolean = false;
import { computed } from 'vue';

const props = defineProps<{
    wide?: boolean;
    sticky?: boolean; // to get this value use {{ props.sticky }}
}>();

const classes = computed(() =>
    props.wide ? 'bg-white px-4 sm:px-6 lg:px-8': 'max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8'
);
const heading_classes = computed(() =>
    props.wide ? 'bg-white': 'max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8'
);
const nav_class = computed(() =>
    props.sticky ? 'sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700': 'z-40 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700'
);

const emit = defineEmits(['humButtonStatechanged'])
function humButtonStateChanged() {
    humButtonState = !humButtonState;
    if(showingResponsiveVerticalDropdown)
        showingResponsiveVerticalDropdown.value = false;
    emit('humButtonStatechanged',humButtonState )
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
                    <!-- Principal Dropdown -->
                    <div class="hidden sm:flex sm:items-center sm:ml-6">
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
                    <!-- End Principal Dropdown -->



                    <!-- Humberger 2 -->
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
                    <!-- End Humberger 2  -->
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






    <!-- this contnent is example of menue when hunerger is clicked -->
    <!-- Responsive Settings Options  For Small Screen-->
    <div
        :class="{ block: showingResponsiveVerticalDropdown, hidden: !showingResponsiveVerticalDropdown }"
        class="sm:hidden absolute z-10 bg-white w-full"
    >
        <div class="pt-2 pb-3 space-y-1">
            <div class="pt-4 pb-3 border-t border-b border-gray-300 bg-gray-100 dark:border-gray-600">
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
    <!-- End Responsive Settings Options  For Small Screen -->





<!-- End PrimaryNavMenu -->
</template>
