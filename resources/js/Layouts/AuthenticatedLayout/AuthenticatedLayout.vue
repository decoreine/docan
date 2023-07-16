<script setup lang="ts">
import PrimaryNavMenu from '@/Layouts/AuthenticatedLayout/Partials/PrimaryNavMenu.vue';
import HorizontalNavLink from '@/Components/NavElements/HorizontalNavLink.vue';
import DropdownLink from '@/Components/Dropdowns/DropdownLink.vue';
import VerticalNavLink from '@/Components/NavElements/VerticalNavLink.vue';
import ApplicationLogo from '@/Components/Logo/ApplicationLogo.vue';
import SideBar from '@/Components/SideBars/MainSideBar.vue';
import { Link } from '@inertiajs/vue3';
import {ref} from 'vue'

const props = withDefaults(
    defineProps<{
        title?: string;
    }>(),
    {
        title: "Layout",
    }
);

const isSideBarShown = ref(false)

function setSideBarShown(showing : boolean) {
    isSideBarShown.value = showing;
}
//create ref to make access to child function accicible and in child component definition  add ref="childComponentRef"
const childComponentRef = ref()
function closeSideBar() {
    console.log("close");
    isSideBarShown.value = false;
    childComponentRef.value.reset() // call child function
}

</script>





<template>
    <!-- AuthenticatedLayout -->
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
            <PrimaryNavMenu wide sticky  @humButtonStatechanged="setSideBarShown" ref="childComponentRef">

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
            </PrimaryNavMenu>

            <SideBar :show="isSideBarShown" :maxWidth="'xs'"  @close="closeSideBar">
                <VerticalNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                    Dashboard
                </VerticalNavLink>
                <VerticalNavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                    Profile
                </VerticalNavLink>
                <VerticalNavLink :href="route('logout')" method="post" as="button">
                    Log Out
                </VerticalNavLink>
            </SideBar>

            <main>
                <!-- Page Content -->
                <slot />
                <!-- End Page Content -->
            </main>
        </div>
    <!-- End AuthenticatedLayout -->
</template>

