<template>
    <Head title="Dashboard" />
    <ImageInput></ImageInput>
    <AuthenticatedLayout title="Dashboard">

        <!-- Dashboard -->
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
        </div>
        <!-- End Dashboard -->

        <!-- DataTable -->
        <DataTable
            :t_header=invoices_config
            :t_data =invoices
            title="Invoices table"
            checkboxLabel="invoice"
        >

            <template v-slot:invoice="{ row: item }">
                {{ item.invoice }}
            </template>

            <template v-slot:status="{ row: item }">
                <a href="#" class="text-gray-600 text-hover-primary mb-1">
                    <BadgeStatus :label="item.status.label" :state="item.status.state"></BadgeStatus>
                </a>
            </template>

            <template v-slot:amount="{ row: item }">
                {{ item.amount }}
            </template>

            <template v-slot:date="{ row: item }">
                {{ item.date }}
            </template>

            <template v-slot:actions="{ row: item }">
                <div  class="flex  py-4 space-x-3">
                    <a :href="item.update"
                       class="select-none font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a :href="item.delete"
                       class="select-none font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </div>
            </template>
        </DataTable>
        <!-- End DataTable -->

    </AuthenticatedLayout>
</template>
<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ImageInput from '@/Components/Inputs/ImageInput.vue';
import { Head } from '@inertiajs/vue3';

import DataTable from '@/Components/DataTable/Datatable.vue';
import BadgeStatus from "@/Components/Indicators/BadgeStatus.vue";
import invoices from "@/core/data/invoices";
import {TableColumn} from "@/types/vite-env";

const invoices_config : TableColumn[]= [
    {
        columnName: "Invoice No.",
        columnLabel: "invoice",
        searchEnabled: false,
        sortEnabled: true,
    },
    {
        columnName: "Status",
        columnLabel: "status",
        sortEnabled: false,
        searchEnabled: false,
    },
    {
        columnName: "Amount",
        columnLabel: "amount",
        sortEnabled: true,
        searchEnabled: false,
    },
    {
        columnName: "Date",
        columnLabel: "date",
        searchEnabled: false,
        sortEnabled: true,
        class:"whitespace-nowrap" // to make texe horizental all the time
    },
    {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        searchEnabled: false,
    },
];

</script>
