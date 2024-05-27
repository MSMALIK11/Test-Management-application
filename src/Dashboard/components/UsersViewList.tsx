
import {
  ColumnDef,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { errorHandler } from '@/helpers/errorHandler'
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Table from '@/components/Table'
import Loading from "@/components/shared/Loading"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import api from '@/services'
import toast from "react-hot-toast"
import { usersApiResponse } from "@/types/usersApiResponse"
import { getPersonaName } from "@/helpers/generatePersonaName"
import { generateRandomColor } from "@/helpers/generateRandomColor"
const DataTable = () => {
  const { data, isLoading } = useQuery({ queryKey: ['getAllUsers'], queryFn: api.admin.getAllUsers })
  const usersData: usersApiResponse = data && data?.data
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationKey: ['updateuser'], mutationFn: ({ id, body }: { id: string, body: { role: string } }) => api.admin.updateRole(id, body),
    onSuccess: (res) => {
      console.log('res', res)
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

  const columns: ColumnDef<usersApiResponse>[] = [


    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="capitalize nflex nitems-center ngap-2">
          <div style={{ background: generateRandomColor() }} className="nw-[26px] nh-[26px] nbg-blue-700 nrounded-full nflex nitems-center njustify-center np-4">
            {getPersonaName(row?.getValue("name"))}

          </div>
          {row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "role",
      header: () => <div className="text-right">Role</div>,
      cell: ({ row }) => {


        return <div className="text-right font-medium">{row.getValue("role")}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => onMakeAsAdminClick(row.original._id)}>
                Make as Admin
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  if (isLoading) {
    return <Loading isLoading={true} />
  }
  return (
    <div className="w-full">
      <Table title="All Students" items={usersData} columns={columns} />
    </div>
  )
}


export default DataTable
