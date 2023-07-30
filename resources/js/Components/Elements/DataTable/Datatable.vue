<template>
    <!-- https://preview.keenthemes.com/html/metronic/docs/general/datatables/subtable -->
    <!--begin::Table-->
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="flex justify-between pb-5 ">
                <div class="flex">
                    <h2 class="mb-12 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{title}}</h2>
                </div>
                <div class="flex ">
                    <div class="mr-3">
                        <label for="search-input" class="sr-only">Search</label>
                        <div class="relative ">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="search-input"
                                v-model="searchQuery"
                                class="block p-2 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80
                                bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                dark:focus:border-blue-500" placeholder="Search">
                        </div>

                    </div>
                    <div>
                        <Button
                            type="submit"
                            class="px-3 py-3 text-xs font-medium text-center inline-flex items-center text-white
                            bg-blue-700 rounded-md hover:bg-blue-500 focus:ring-4 focus:outline-none
                            focus:ring-blue-100 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-300"
                        >
                            <template #Svg>
                                <svg class="w-3 h-3 text-white mr-2" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path
                                        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path
                                        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </template>
                            Add payment
                        </Button>
                    </div>
                </div>
            </div>
            <div id="exampleWrapper">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead v-if="!headless"
                               class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="select-none py-4 px-6">
                                <div class="flex items-center">
                                    <input
                                        id="checkboxAll"
                                        type="checkbox"
                                        v-model="selectAll"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                                           focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800
                                           dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkboxAll" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th
                                v-for="(column, index) in t_header" :key="index"
                                scope="col"
                                class="select-none px-6 py-4"
                                @click="sort(column.columnLabel, column.sortEnabled)"
                            >
                                <div
                                    class="flex items-center "
                                    :class="{
                                            'cursor-pointer': column.sortEnabled,
                                        }"
                                >
                                        <span
                                            :id="'checkbox_table_' + index"
                                            :class="{
                                                'text-blue-600	': sortColumn === column.columnLabel && column.sortEnabled,
                                            }"
                                        >
                                            {{ column.columnName }}
                                        </span>
                                    <span
                                        v-if="sortColumn === column.columnLabel && column.sortEnabled"
                                        v-html="sortArrow"
                                    ></span>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-if="displayedData.length !== 0"
                            v-for="(row, i) in displayedData"
                            :key="i"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover
                            :bg-gray-600"
                        >
                            <td v-if="checkboxEnabled" class="select-none w-4 px-6">
                                <div class="flex items-center">
                                    <input
                                        :id="'checkbox-row-' + i"
                                        type="checkbox"
                                        :value="row[props.checkboxLabel]"
                                        v-model="selectedRows"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    >
                                </div>
                            </td>


                            <template v-for="(column, j) in t_header" :key="j">
                                <td :class="{ 'text-end': j === t_header.length - 1 }" class="px-6">
                                    <slot :name="`${column.columnLabel}`" :row="row">
                                        {{ row }}
                                    </slot>
                                </td>
                            </template>
                        </tr>
                        <tr v-else class="overflow-auto">
                            <td class="overflow-auto">
                                {{ emptyTableText }}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div class="pt-3 flex justify-between ">
                <select
                    id="items_per_page"
                    v-show="itemsPerPageDropdownEnabled"
                    v-model="inputItemsPerPage"
                    class="w-16 inline-flex items-center text-gray-500 bg-white border border-gray-300
                    focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg
                    text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700
                    dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                    <option>5</option>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <nav aria-label="table navigation">
                    <ul class="inline-flex -space-x-px text-sm shadow-md sm:rounded-lg">
                        <li>
                            <button
                                @click="onClickPreviousPage()"
                                class="select-none flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                :style="{
                                    cursor: !isPageActive(1) ? 'pointer' : 'auto',
                                }"
                            >
                                Previous
                            </button>
                        </li>
                        <li
                            v-for="(page, i) in pages"
                            :class="{
                                'select-none flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-blue-200  border border-gray-300 hover:bg-blue-300 dark:bg-blue-700 dark:text-white    hover:dark:bg-blue-800 hover:text-gray-700 dark:border-gray-700  dark:hover:text-white': isPageActive(page.name),
                                'select-none flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white     border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-700 hover:text-gray-700 dark:border-gray-700  dark:hover:text-white' : !isPageActive(page.name)
                            }"
                            :style="{
                                cursor: !isPageActive(page.name) ? 'pointer' : 'auto',
                            }"
                            :key="i"
                            @click="onClickPage(page.name)"
                        >
                            {{ page.name }}
                        </li>
                        <li>
                            <button
                                @click="onClickNextPage()"
                                class="select-none flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                :style="{
                                    cursor: !isPageActive(totalPages) ? 'pointer' : 'auto',
                                }"
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from "@/Components/Elements/Buttons/BaseButton.vue";
import {ref, computed, onMounted}from "vue";
import {TableColumn, TableData, ActionsProps, StatusProps} from "@/types/vite-env";

const props = defineProps({
    t_header: {
        type: Array as () => TableColumn[],
        default: () => [],
        required:true,
    },
    t_data: {
        type: Array as () => any[],
        default: () => [],
    },
    title: {
        type: String,
        default: "DataTable",
    },
    headless: {
        type: Boolean,
        default: false,
    },
    checkboxEnabled: {
        type: Boolean,
        default: true,
    },
    checkboxLabel: {
        type: String,
        default: 'id',
    },
    loading: {
        type: Boolean,
        default: false,
    },
    emptyTableText: {
        type: String,
        default: 'No data found',
    },
    itemsPerPageDropdownEnabled: {
        type: Boolean,
        default: true,
    },
    maxVisibleButtons: {
        type: Number,
        default: 5,
    },
});

/*
function withDefaults(props, defaults) {
    // Combine props with default values using Object.assign
    return Object.assign({}, defaults, props);
}
const props = withDefaults(
    defineProps<{
        t_header?: TableColumn[];
        t_data?: TableData[];
        total?: number;
        headless?: boolean;
        checkboxEnabled?: boolean;
        checkboxLabel?: string;
        loading?: boolean;
        emptyTableText?: string;
        itemsPerPageDropdownEnabled?: boolean;
        maxVisibleButtons?: number;
    }>(),
    {
        headless: false,
        checkboxEnabled: true,
        checkboxLabel: "id",
        loading: false,
        emptyTableText: "No data found",
        itemsPerPageDropdownEnabled: true,
        maxVisibleButtons: 5,
    }
);
*/

// Create reactive variables to hold the sorting and search information
const sortColumn = ref('id');
const sortDirection = ref('asc');
const searchQuery = ref('');
// Create a reactive variable to hold the selected rows
const selectedRows = ref<Array<unknown>>([]);
// Define the number of items per page
const inputItemsPerPage = ref("5");
const itemsPerPage = computed({
    // getter
    get() {
        return Number(inputItemsPerPage.value)
    },
    // setter
    set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        inputItemsPerPage.value = newValue.toString();
    }
})
// Create a reactive variable to hold the current page number
const currentPage = ref(1);
// Computed property for the total number of pages
const totalPages = computed(() => {
    return Math.ceil(filteredData.value.length / itemsPerPage.value);
});

// Computed property for filtered and sorted data
const filteredData = computed(() =>{
    let _filteredData = [...props.t_data];

    const searchQueryLC = searchQuery.value.toLowerCase();
    _filteredData =  (props.t_data).filter(item => {
        return Object.values(item).some(value => {
            return String(value).toLowerCase().includes(searchQueryLC);
        });
    });

    const column:string = sortColumn.value;
    const direction:number = sortDirection.value === 'asc' ? 1 : -1;

    return _filteredData.sort((a:any, b:any) => {
        if (a[column] > b[column]) {
            return 1 * direction;
        } else if (a[column] < b[column]) {
            return -1 * direction;
        } else {
            return 0;
        }
    });
})

const displayedData = computed(() =>{
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredData.value.slice(start, end);
})

const sortArrow = computed(() => {
    return sortDirection.value === "asc"
        ? "&#x2191;"
        : "&#x2193;";
});

const startPage = computed(() => {
    if (
        (totalPages.value < props.maxVisibleButtons) ||
        currentPage.value === 1 ||
        currentPage.value <= Math.floor(props.maxVisibleButtons / 2) ||
        (currentPage.value + 2 > totalPages.value &&
            totalPages.value === props.maxVisibleButtons)
    ) {
        return 1;
    }

    if (currentPage.value + 2 > totalPages.value) {
        return totalPages.value - props.maxVisibleButtons + 1;
    }

    return currentPage.value - 2;
});

const endPage = computed(() => {
    return Math.min(
        startPage.value + props.maxVisibleButtons - 1, totalPages.value
    );
});

const pages = computed(() => {
    const range: Array<{
        name: number;
        isDisabled: boolean;
    }> = [];

    for (let i = startPage.value; i <= endPage.value; i += 1) {
        range.push({
            name: i,
            isDisabled: i === currentPage.value,
        });
    }

    return range;
});

const selectAll = computed({
    // getter
    get() {
        if (displayedData.value && displayedData.value.length > 0) { // A users array exists with at least one item
            let allChecked = true;
            for (const row of displayedData.value) {
                if (!selectedRows.value.includes(row[props.checkboxLabel])) {
                    allChecked = false; // If even one is not included in array
                }
                // Break out of loop if mismatch already found
                if(!allChecked) break;
            }
            return allChecked;
        }
        return false;
    },
    // setter
    set(newValue:boolean) {
        let checkedList:any = [];

        if (newValue) {
            displayedData.value.forEach((row) => {
                checkedList.push(row[props.checkboxLabel]);
            });

            selectedRows.value = [
                ...new Set([...selectedRows.value, ...checkedList]),
            ];
        }else {
            displayedData.value.forEach((row) => {
                const index:number  = selectedRows.value.indexOf(row[props.checkboxLabel])
                selectedRows.value.splice(index,1)
            });
        }
    }
})

const isInFirstPage = computed(() => {
    return currentPage.value === 1;
});

const isInLastPage = computed(() => {
    return currentPage.value === totalPages.value;
});

const onClickFirstPage = () => {
    pageChange(1);
};

const onClickPreviousPage = () => {
    pageChange(currentPage.value - 1);
};

const onClickPage = (page: number) => {
    pageChange(page);
};

const onClickNextPage = () => {
    pageChange(currentPage.value + 1);
};

const onClickLastPage = () => {
    pageChange(totalPages.value);
};

const isPageActive = (page: number) => {
    return currentPage.value === page;
};

const pageChange = (newPage: number) => {

    if (newPage >= 1 && newPage <= totalPages.value)
        currentPage.value = newPage;
};

function sort(column: string, sortEnabled: boolean) {
    if (sortEnabled) {
        if (sortColumn.value === column) {
            // If the same column is clicked, toggle the sorting direction
            sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
        } else {
            // If a new column is clicked, set it as the sorting column with ascending direction
            sortColumn.value = column;
            sortDirection.value = 'asc';
        }
    }
}

onMounted(() => {
    /*
        let stored_column = localStorage.getItem('stored_column ')
        let stored_order = localStorage.getItem('stored_order')
        if (stored_column !== '') {
            sortColumn.value = stored_column ;
            sortDirection.value = stored_order;

            const reverse: boolean = stored_order === "asc";

            // when a variable can be string or null we have to verifay if is a string befor use it
            if (sortColumn.value && sortDirection.value) {
                arraySort(<TableData[]>props.t_data, sortColumn.value, {reverse});
            }
        }
    */
});
</script>
