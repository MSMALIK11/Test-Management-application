
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { errorHandler } from '@/helpers/errorHandler'
import { Button } from "@/components/ui/button"


import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import Loading from "@/components/shared/Loading"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import api from '@/services'
import toast from "react-hot-toast"
import type { SubjectType } from "@/types/CourseType"
import Header from "./components/Header"
const QuizManagement = () => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const { data, isLoading } = useQuery({ queryKey: ["getAllAdminCourse"], queryFn: api.quiz.getAllQuizesCourse })
    const courseData = data && data.courses
    const queryClient = useQueryClient()
    // console.log('data',)
    const mutation = useMutation({
        mutationKey: ['updateuser'], mutationFn: ({ id, body }: { id: string, body: { role: string } }) => api.admin.updateRole(id, body),
        onSuccess: (res) => {
            const message = res.data.message
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ['getAllUsers'] })
        },
        onError: (error) => {
            const errorMessage = errorHandler(error)
            console.log('res errro;;;;;', error)
            toast.error(errorMessage)
        }
    })

    const onMakeAsAdminClick = (id: string) => {
        const body = {
            role: 'admin'
        }
        mutation.mutate({ id, body })
    }
    const columns: ColumnDef<SubjectType>[] = [

        {
            accessorKey: "title",
            header: "Course Name",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("title")}</div>
            ),
        },
        {
            accessorKey: "set",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        No Of Set
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div>{row.getValue("setCount") || '0'}</div>,
        },
        {
            accessorKey: "price",
            header: () => <div className="text-right">Price</div>,
            cell: ({ row }) => {
                return <div className="text-right font-medium">{row.getValue("price")}</div>
            },
        },
        {
            id: "actions",
            enableHiding: false,
            header: () => <div className="text-right">Action</div>,
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Edit</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => onMakeAsAdminClick(row?.original?._id ?? '')}>
                                Delte                            </DropdownMenuItem>

                            <DropdownMenuItem>View</DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const table = useReactTable({
        data: courseData,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })
    if (isLoading) {
        return <Loading isLoading={true} />
    }

    return (
        <div className="w-full">
            <Header />
            <div className="nflex nitems-center npy-4">
                <Input
                    placeholder="Filter course..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="nrounded-md nborder">
                <Table>
                    <TableHeader>
                        {table?.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup?.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header?.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="nh-24 ntext-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="nflex nitems-center njustify-end nspace-x-2 npy-4">
                {/* <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel()?.rows?.length} of
                    {table.getFilteredRowModel()?.rows?.length} row(s) selected.
                </div> */}
                <div className="nspace-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default QuizManagement
