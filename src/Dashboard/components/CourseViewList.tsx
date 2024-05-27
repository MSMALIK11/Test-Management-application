/* eslint-disable @typescript-eslint/no-explicit-any */
import { Instructor } from '@/types';
import { SubjectType } from '@/types/CourseType';
import {
    ColumnDef,

} from "@tanstack/react-table";
import { FaCircleCheck, LuFileLock2 } from '@/assets/Icons'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from 'lucide-react';
import Table from '@/components/Table/Table'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '@/services'
import { Button } from '@/components/ui/button';
import { testSeriesTableMenu } from '../utils/data';
import Each from '@/components/shared/Each';
import constant from '@/config/constant';
import { useState } from 'react';
import Alert from '../shared/Alert';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { errorHandler } from '@/helpers/errorHandler';
const CourseViewList = () => {
    const [isDeleteConfirmVisible, setDeleteConfirmVisibility] = useState(false);
    const [isPublishConfirmVisible, setPublishConfirmVisible] = useState(false);
    const [isPrivateConfirmVisible, setPrivateConfirmVisible] = useState(false);
    const [id, setId] = useState("")
    const { data, isLoading } = useQuery({
        queryKey: ["getAllTestSeries"],
        queryFn: api.testSeries.getAllTestSeries,
    });
    const courseData: SubjectType = data ? data.data : [];
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    // console.log('data',)
    const mutation = useMutation({
        mutationKey: ["deletesubject"],
        mutationFn: ({ id }: { id: string }) =>
            api.testSeries.deleteSubject(id),
        onSuccess: (res) => {
            const message = res.data.message;
            toast.success(message);
            setId("")
            queryClient.invalidateQueries({ queryKey: ["getAllTestSeries"] });
            setDeleteConfirmVisibility(false)
        },
        onError: (error) => {
            const errorMessage = errorHandler(error);
            console.log("res errro;;;;;", error);
            toast.error(errorMessage);
            setDeleteConfirmVisibility(false)
        },
    });

    const onConfirmDeleteSubject = () => {
        mutation.mutate({ id });
    };

    const onShowDeleteConfirm = (id: string) => {
        setId(id)
        setDeleteConfirmVisibility(true)
    }
    const handleEdit = () => {

    }
    // Publish the course 
    const onShowPublishConfirm = async (id: string) => {
        setId(id)
        setPublishConfirmVisible(true)

    }

    const onConfirmPublishSubject = async () => {
        try {
            const res = await api.testSeries.publishTestSeries(id)
            if (res.status === 200) {
                const message = res.data.message
                toast.success(message)
                setPublishConfirmVisible(false)
                queryClient.invalidateQueries({ queryKey: ["getAllTestSeries"] })
            }
        } catch (error: any) {
            setPublishConfirmVisible(false)
            const errorMessage = errorHandler(error)
            toast.error(errorMessage)

        }

    }
    const onShowPrivateConfirm = (id: string) => {
        setId(id)
        setPrivateConfirmVisible(true)

    }
    const onConfirmPrivateSubejct = async () => {
        try {
            const res = await api.testSeries.privateTestSeries(id)
            if (res.status === 200) {
                const message = res.data.message
                toast.success(message)
                setPrivateConfirmVisible(false)
                queryClient.invalidateQueries({ queryKey: ["getAllTestSeries"] })
            }
        } catch (error: any) {
            setPrivateConfirmVisible(false)
            const errorMessage = errorHandler(error)
            toast.error(errorMessage)

        }

    }
    const onViewSubject = (id: string) => {
        navigate(`/dashboard/admin/subject/${id}/view`)
    }
    const handelMenuClick = (id: string, name: string) => {
        switch (name) {
            case constant.publish:
                onShowPublishConfirm(id);
                break;
            case constant.private:
                onShowPrivateConfirm(id);
                break;
            case constant.edit:
                handleEdit();
                break;
            case constant.delete:
                onShowDeleteConfirm(id);
                break;
            case constant.view:
                onViewSubject(id);
                break;
        }
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
            accessorKey: "isPaid",
            header: "Is Paid",
            cell: ({ row }) => (
                <div>{row.getValue("isPaidCOurse") ? "Yes" : "NO"}</div>
            ),
        },
        {
            accessorKey: "totalTopic",
            header: () => <div className="text-right">Total Topic</div>,
            cell: ({ row }) => {
                return (
                    <div className="text-right font-medium">
                        {row.getValue("totalTopic")}
                    </div>
                );
            },
        },
        {
            accessorKey: "instructor",
            header: "Instructor",
            cell: ({ row }) => {
                const instructor: Instructor = row.getValue("instructor");
                return (
                    <div className="text-right font-medium">
                        {instructor.name}
                    </div>
                );
            },
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const isPublish = row?.original?.isPublish;
                return (
                    <div
                        className={`ninline-block npx-4 nrounded-lg npy-1 ${isPublish ? "nbg-green-400" : "nbg-red-400"
                            }`}
                    >
                        <div className="nflex nitems-center ngap-1">

                            {isPublish ? <FaCircleCheck size={16} /> : <LuFileLock2 size={16} />}   {isPublish ? "Publish" : "Private"}
                        </div>

                    </div>
                );
            },
        },
        {
            id: "actions",
            enableHiding: false,
            header: () => <div className="text-right">Action</div>,
            cell: ({ row }) => {
                return (
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <Each of={testSeriesTableMenu} render={(item) => <DropdownMenuItem key={item.id} className="nflex ngap-4 ncursor-pointer" onClick={() => handelMenuClick(row?.original?._id ?? '', item.name)}> {item.icon} {item.name}</DropdownMenuItem>} />

                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];
    return (
        <div>
            <Table title='All Courses' items={courseData} isLoading={isLoading} columns={columns} />
            <Alert open={isDeleteConfirmVisible} onClose={() => setDeleteConfirmVisibility(false)} onConfirm={onConfirmDeleteSubject} isConfirmBtnVisible={true} confirmBtnText="OK" message="Are you sure you want to delete this subject? This action will also delete all associated topics and questions." />
            <Alert open={isPublishConfirmVisible} onClose={() => setPublishConfirmVisible(false)} onConfirm={onConfirmPublishSubject} isConfirmBtnVisible={true} confirmBtnText="OK" message="Are you sure you want to publish the course? Once published, all users will have access to the course." />
            <Alert open={isPrivateConfirmVisible} onClose={() => setPrivateConfirmVisible(false)} onConfirm={onConfirmPrivateSubejct} isConfirmBtnVisible={true} confirmBtnText="OK" message="Are you sure you want to make this course private? Once private, it will be inaccessible to all users." />
        </div>
    )
}

export default CourseViewList