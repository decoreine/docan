<template>
    <!--begin::Table-->
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="flex justify-between pb-5 ">
                <div class="flex">
                    <h2 class="mb-12 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Payment Records</h2>
                </div>
                <div class="flex ">
                    <div class="mr-3">
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative ">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search"
                                class="block p-2 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80
                                bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                dark:focus:border-blue-500" placeholder="Search">
                        </div>

                    </div>
                    <div>
                        <Button
                            type="submet"
                            class="px-3 py-3 text-xs font-medium text-center inline-flex items-center text-white
                            bg-blue-700 rounded-md hover:bg-blue-500 focus:ring-4 focus:outline-none
                            focus:ring-blue-100 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-300"
                        >
                            <template #Svg>
                                <svg class="w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </template>
                            Add payment
                        </Button>
                    </div>
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th v-if="checkboxEnabled"  scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkboxAll"
                                        type="checkbox"
                                        v-model="isAllSelected"
                                        @change="selectAll()"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkboxAll" class="sr-only">checkbox</label>
                                </div>
                            </th>

                            <th v-for="(column, index) in theader" :key="index" class="p-4">
                                <div class="flex items-center">
                                    <input
                                        v-if="column.sortEnabled"
                                        :id="'checkbox_' + index"
                                        type="checkbox"
                                        :value="column.columnLabel"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <span :id="'checkbox_table_' + index">{{ column.columnName }}</span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <template v-if="data.length !== 0">
                            <template v-for="(row, i) in data" :key="i">

                                <tr>
                                    <td v-if="checkboxEnabled" class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input
                                                type="checkbox"
                                                :id="'checkbox-row-' + i"
                                                v-model="row.isSelected"
                                                @change="wachSelected()"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        </div>
                                    </td>
                                    <template v-for="(column, index) in theader">
                                        <template v-for="(value, key,index) in row" >
                                            <td v-if="column.columnLabel === key" class="px-6 py-4">
                                                <div v-if="column.columnLabel !== 'status' && column.columnLabel !== 'actions'">
                                                    {{value}}
                                                </div>
                                                <div v-else-if=" column.columnLabel === 'status'" class="flex  py-4">
                                                    <status :label="value.label" :state="value.state"></status>
                                                </div>
                                                <div v-else-if=" column.columnLabel === 'actions'" class="flex  py-4 space-x-3">
                                                    <a :href="value.update" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    <a :href="value.delete" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                                </div>
                                            </td>
                                        </template>
                                    </template>
                                </tr>
                            </template>
                        </template>
                        <template v-else>
                            <tr class="odd">
                                <td class="dataTables_empty">
                                    {{ emptyTableText }}
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

            <div class="pt-3 flex justify-between ">
                <select
                    id="itemsPerPage"
                    class="w-16 inline-flex items-center text-gray-500 bg-white border border-gray-300
                    focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg
                    text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700
                    dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                    <option selected>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <nav aria-label="table navigation">
                    <ul class="inline-flex -space-x-px text-sm shadow-md sm:rounded-lg">
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Previous
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               aria-current="page"
                               class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                4
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                5
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import Button from "@/components/Buttons/Button.vue";
import Status from "@/components/Indicators/Status.vue";
import {defineEmits, ref} from "vue";


const props = withDefaults(
    defineProps<{
        theader: object;
        data: object;
        itemsPerPage?:number;
        currentPage?:number
        itemsPerPageSpinEnabled?:boolean;
        checkboxEnabled?:boolean;
        checkboxLabel?:string;
        total?:number;
        loading?:boolean;
        sortLabel?:boolean;
        sortOrder?:string;
        emptyTableText?:string;
    }>(),
    {
        itemsPerPage: 10,
        itemsPerPageDropdownEnabled:  true,
        checkboxEnabled:   true,
        checkboxLabel:  "id",
        loading:false,
        sortLabel:null,
        sortOrder: "asc",
        emptyTableText:"No data found",
        currentPage:1
    }
);


const selectedItems = ref<Array<unknown>>([]);
let isAllSelected: boolean = false;
const emit = defineEmits(['on-select',"on-sort", "on-items-select"]);
function selectAll(){
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
        'input[type="checkbox"][id^="checkbox-row-"]'
    );
    //selectedItems.value = [];

    checkboxes.forEach((checkbox) => {
        checkbox.checked = isAllSelected;
        if (isAllSelected) {
            selectedItems.value.push(checkbox.value);
        }
    });
    emit("on-select", isAllSelected);
};

function wachSelected(){
    isAllSelected = true;
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
        'input[type="checkbox"][id^="checkbox-row-"]'
    );
    selectedItems.value = [];
    checkboxes.forEach((checkbox) => {
        if (!checkbox.checked) {
            isAllSelected = false;
        }
    });

    const principalCheckbox = document.getElementById("checkboxAll");
    principalCheckbox.checked = isAllSelected;
};
</script>
