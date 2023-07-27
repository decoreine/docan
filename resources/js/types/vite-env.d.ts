export type TableColumn = {
    columnName: string;
    columnLabel: string;
    sortEnabled: boolean;
    searchEnabled: boolean;
    class?: string;
};
export type TableData = {
    id:number;
    invoice: number;
    description: string;
    amount?: string;
    status?: StatusProps;
    date: string;
    actions?: ActionsProps;
    isSelected?:boolean
}
export type StatusProps = {
    label: string;
    state: string;
}
export type ActionsProps = {
    update: string;
    delete: string;
}

