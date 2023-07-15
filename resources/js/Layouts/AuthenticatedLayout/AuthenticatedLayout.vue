<script setup lang="ts">
import PrimaryNavMenu from '@/Layouts/AuthenticatedLayout/Partials/PrimaryNavMenu.vue';
import HorizontalNavLink from '@/Components/NavElements/HorizontalNavLink.vue';
import DropdownLink from '@/Components/Dropdowns/DropdownLink.vue';
import VerticalNavLink from '@/Components/NavElements/VerticalNavLink.vue';
import ApplicationLogo from '@/Components/Logo/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    title?: string;
}>();
/*
if you want to add default value use
const props = withDefaults(defineProps<{
    wide?: boolean;
}>(),{wide = true});

 */
</script>

<script lang="ts">
export default {
    data() {
        return {
            showingSideBar: false,
        };
    },
    methods: {
        showSideBar(showing : boolean) {
            this.showingSideBar = showing;
        },
    },
};
</script>





<template>
    <!-- AuthenticatedLayout -->
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
            <PrimaryNavMenu wide sticky  @humButtonStatechanged="showSideBar">

                <template #Logo>
                    <Link :href="route('dashboard')">
                        <ApplicationLogo
                            class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"
                        />
                    </Link>
                </template>

                <template #Title>
                    <h2 class="font-semibold py-2 px-4 text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ title }}</h2>
                </template>

                <template #VerticalDropdown>
                    <DropdownLink :href="route('profile.edit')"  :active="route().current('profile.edit')">
                        Profile
                    </DropdownLink>
                    <DropdownLink :href="route('logout')" method="post" as="button">
                        Log Out
                    </DropdownLink>
                </template>

                <template #HorizontalNavigationLinks>
                    <HorizontalNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        Dashboard
                    </HorizontalNavLink>
                    <HorizontalNavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                        Profile
                    </HorizontalNavLink>
                </template>

                <template #ResponsiveVerticalDropdown>
                    <VerticalNavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                        Profile
                    </VerticalNavLink>
                    <VerticalNavLink :href="route('logout')" method="post" as="button">
                        Log Out
                    </VerticalNavLink>
                </template>

                <template #ResponsiveSideBar>
                </template>

            </PrimaryNavMenu>


            <!-- Responsive SideBar -->
            <div :class="{ block: showingSideBar, hidden: !showingSideBar }" class="sm:hidden" >
                <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <!--
                      Background backdrop, show/hide based on slide-over state.

                      Entering: "ease-in-out duration-500"
                        From: "opacity-0"
                        To: "opacity-100"
                      Leaving: "ease-in-out duration-500"
                        From: "opacity-100"
                        To: "opacity-0"
                    -->
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div class="fixed inset-0 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                                <!--
                                  Slide-over panel, show/hide based on slide-over state.

                                  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                                    From: "translate-x-full"
                                    To: "translate-x-0"
                                  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                                    From: "translate-x-0"
                                    To: "translate-x-full"
                                -->
                                <div class="pointer-events-auto relative w-screen max-w-xs">
                                    <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div class="px-4 sm:px-6">
                                            <h2 class="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Panel title</h2>
                                        </div>
                                        <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                            <!-- Your content -->
                                            <!-- Responsive Settings Options For Large Screen -->
                                            <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                                                <div class="mt-3 space-y-1">
                                                    <VerticalNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                                        Dashboard
                                                    </VerticalNavLink>
                                                    <VerticalNavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                                                        Profile
                                                    </VerticalNavLink>
                                                    <VerticalNavLink :href="route('logout')" method="post" as="button">
                                                        Log Out
                                                    </VerticalNavLink>
                                                </div>
                                                <!-- End Responsive Settings Options For Large Screen -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <!-- End Responsive SideBar -->

            <main>
                <!-- Page Content -->
                <slot />
                <!-- End Page Content -->
            </main>
        </div>
    <!-- End AuthenticatedLayout -->
</template>

