interface DataTableProps<T> {
    tableColumns: ColumnDef<T>[];
    items: T[];
    menuItems: MenuItem[];
    isLoading: boolean;
    handelMenuClick: (id: string, name: string) => void;
}

export { DataTableProps }