<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

</script>

<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout title="Dashboard">
        <!-- Dashboard -->
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                </div>
            </div>
        </div>
        <!-- End Dashboard -->
    </AuthenticatedLayout>
</template>
