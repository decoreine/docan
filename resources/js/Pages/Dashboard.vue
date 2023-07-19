<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout title="Dashboard">

        <!-- Dashboard -->
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
        </div>
        <!-- End Dashboard -->

        <!-- DataTable -->
        <DataTable
            :theader="tableHeader"
            :data="tableData"
            :items-per-page="5"
            :items-per-page-dropdown-enabled="false">
        </DataTable>
        <!-- End DataTable -->

    </AuthenticatedLayout>
</template>
<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DataTable from '@/Components/DataTable/Datatable.vue';
import { Head } from '@inertiajs/vue3';
import {ref} from 'vue'
const tableHeader = ref([
    {
        columnName: "Invoice No.",
        columnLabel: "invoice",
        sortEnabled: true,
    },
    {
        columnName: "Status",
        columnLabel: "status",
        sortingField: "status.label",
        sortEnabled: false,
    },
    {
        columnName: "Amount",
        columnLabel: "amount",
        sortEnabled: false,
    },
    {
        columnName: "Date",
        columnLabel: "date",
        sortEnabled: false,
    },
    {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
    },
]);
const tableData = ref([
    {
        invoice: 123456,
        description: "Payment for invoice",
        amount: "$880.00",
        status: {
            label: "Pending",
            state: "warning",
        },
        date: "21 Oct 2020, 5:54 pm",
        actions: {
            update : "",
            delete : "",
        }
    },
    {
        invoice: 231451,
        description: "Monthly utilites",
        amount: "$7,650.00",
        status: {
            label: "Successful",
            state: "success",
        },
        date: "19 Oct 2020, 7:32 am",
        actions: {
            update : "",
            delete : "",
        }
    },
    {
        invoice: 345612,
        description: "Payment for invoice",
        amount: "$375.00",
        status: {
            label: "Successful",
            state: "success",
        },
        date: "23 Sep 2020, 12:38 am",
        actions: {
            update : "",
            delete : "",
        }
    },
    {
        invoice:456123,
        description: "Hosting Fees",
        amount: "$129.00",
        status: {
            label: "Successful",
            state: "success",
        },
        date: "11 Sep 2020, 3:18 pm",
        actions: {
            update : "",
            delete : "",
        }
    },
    {
        invoice:561234,
        description: "Marketing automation",
        amount: "$450.00",
        status: {
            label: "Rejected",
            state: "danger",
        },
        date: "03 Sep 2020, 1:08 am",
        actions: {
            update : "",
            delete : "",
        }
    },
    {
        invoice:612345,
        description: "Sales injection",
        amount: "$8,700.00",
        status: {
            label: "Pending",
            state: "warning",
        },
        date: "01 Sep 2020, 4:58 pm",
        actions: {
            update : "",
            delete : "",
        }
    },
    {
        invoice:712345,
        description: "Payment for invoice",
        amount: "$1,200.00",
        status: {
            label: "Successful",
            state: "success",
        },
        date: "14 Dec 2020, 8:43 pm",
        actions: {
            update : "",
            delete : "",
        }
    },
    {
        invoice:812345,
        description: "Google cloud subscription",
        amount: "$79.00",
        status: {
            label: "Successful",
            state: "success",
        },
        date: "01 Dec 2020, 10:12 am",
        actions: {
            update : "",
            delete : "",
        }
    },
]);
</script>
