<script setup lang="ts">
import PrimaryNavMenu from '@/Layouts/AuthenticatedLayout/Partials/PrimaryNavMenu.vue';
const props = defineProps<{
    title?: string;
}>();
</script>
<template>
    <!-- AuthenticatedLayout -->
    <div>
        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
            <PrimaryNavMenu wide sticky :title="title"></PrimaryNavMenu>


            <!-- Responsive Navigation Menu -->
            <div
                :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                class="sm:hidden"
            >
                <div class="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <!-- Responsive Settings Options -->
                <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                    <div class="px-4">
                        <div class="font-medium text-base text-gray-800 dark:text-gray-200">
                            {{ $page.props.auth.user.name }}
                        </div>
                        <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                    </div>

                    <div class="mt-3 space-y-1">
                        <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>


            <!-- Page Content -->
            <main>
                <slot />
            </main>
            <!-- End Page Content -->
        </div>
    </div>
    <!-- End AuthenticatedLayout -->
</template>

