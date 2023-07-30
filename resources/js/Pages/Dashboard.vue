<template>
    <Head title="Dashboard" />
    <ImageInput></ImageInput>
    <AuthenticatedLayout title="Dashboard">

        <!-- Dashboard -->
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
        </div>
        <!-- End Dashboard -->

        <img
            :src="getAssetPath('media/avatars/300-3.jpg')"
            alt=""
            class="mw-100 mh-300px"
        />
        <img
            :src="getIllustrationsPath('9.png')"
            alt=""
            class="mw-100 mh-300px"
        />

        <Svg fileName="gen005" folder="icons/duotune/general" svgClass="text-blue-500 w-40 h-40" />
        <Icon iconName="gen005" iconClass="text-red-800 w-40 h-40" />


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
                <div class="w-[140px]">
                    {{ item.date }}
                </div>
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
import ImageInput from '@/Components/Elements/Inputs/ImageInput.vue';
import { Head } from '@inertiajs/vue3';

import DataTable from '@/Components/Elements/DataTable/Datatable.vue';
import BadgeStatus from "@/Components/Elements/Indicators/BadgeStatus.vue";
import invoices from "@/core/data/invoices";
import {TableColumn} from "@/types/vite-env";

import { getAssetPath ,getIllustrationsPath} from "@/core/helpers/assets";
import Svg from "@/Components/Elements/Images/Svg.vue";
import Icon from "@/Components/Elements/Images/DuotuneIcon.vue";

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
