<script setup lang="ts">
import { ref } from 'vue';
import ApplicationLogo from '@/Components/Logo/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdowns/Dropdown.vue';
import DropdownLink from '@/Components/Dropdowns/DropdownLink.vue';
import HorizontalNavLink from '@/Components/NavElements/HorizontalNavLink.vue';
import VerticalNavLink from '@/Components/NavElements/VerticalNavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);
const showingOptionsDropdown = ref(false);

import { computed } from 'vue';


const props = defineProps<{
    wide?: boolean;
    sticky?: boolean;
    title?: string;
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
                            @click="showingNavigationDropdown = !showingNavigationDropdown"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                        >
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown,
                                        }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown,
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
                        <Link :href="route('dashboard')">
                            <ApplicationLogo
                                class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"
                            />
                        </Link>
                    </div>
                    <!-- End Logo -->
                    <!-- Horizontal Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <HorizontalNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </HorizontalNavLink>
                        <HorizontalNavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                            Profile
                        </HorizontalNavLink>
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
                                    <DropdownLink :href="route('profile.edit')"  :active="route().current('profile.edit')"> Profile </DropdownLink>
                                    <DropdownLink :href="route('logout')" method="post" as="button">
                                        Log Out
                                    </DropdownLink>
                                </template>
                            </Dropdown>
                        </div>
                    </div>
                    <!-- End Principal Dropdown -->

                    <!-- Humberger 2 -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button
                            @click="showingOptionsDropdown = !showingOptionsDropdown;"
                            class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                        >
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    :class="{
                                            hidden: showingOptionsDropdown,
                                            'inline-flex': !showingOptionsDropdown,
                                        }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                />
                                <path
                                    :class="{
                                            hidden: !showingOptionsDropdown,
                                            'inline-flex': showingOptionsDropdown,
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
                <h2 class="font-semibold py-2 px-4 text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ title }}</h2>
            </div>
        </header>
    </div>
    <!-- End Page Heading -->






    <!-- this contnent is example of menue when hunerger is clicked -->

    <!-- Humberger SideBar -->
    <div
        :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
        class="sm:hidden"
    >
        <div class="pt-2 pb-3 space-y-1">

            <VerticalNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                Dashboard
            </VerticalNavLink>

        </div>

        <!-- Responsive Settings Options For Large Screen -->
        <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">

            <div class="px-4">
                <div class="font-medium text-base text-gray-800 dark:text-gray-200">
                    {{ $page.props.auth.user.name }}
                </div>
                <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
            </div>

            <div class="mt-3 space-y-1">
                <VerticalNavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                    Profile
                </VerticalNavLink>
                <VerticalNavLink :href="route('logout')" method="post" as="button">
                    Log Out
                </VerticalNavLink>
            </div>

        </div>
    </div>
    <!-- End Humberger SideBar -->

    <!-- Responsive Settings Options  For Small Screen-->
    <div
        :class="{ block: showingOptionsDropdown, hidden: !showingOptionsDropdown }"
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
                    <VerticalNavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                        Profile
                    </VerticalNavLink>
                    <VerticalNavLink :href="route('logout')" method="post" as="button">
                        Log Out
                    </VerticalNavLink>
                </div>
            </div>
        </div>
    </div>
    <!-- End Responsive Settings Options  For Small Screen -->





<!-- End PrimaryNavMenu -->
</template>
