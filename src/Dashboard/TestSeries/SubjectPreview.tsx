// Test series overview
import Each from '@/components/shared/Each'
import Heading from '@/components/shared/Heading'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IoMdAddCircle, IoMdTrash, FaRegEdit } from '@/assets/Icons'
import localizationEN from "@/config/constant";
import api from '@/services'
import { SubjectApiResponse, Question, Topic } from '@/types/subjectApiResponse'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import InputControl from '@/components/shared/InputControl'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { errorHandler } from '@/helpers/errorHandler'
import EmptyView from '@/components/shared/EmptyView'
import { useState } from 'react'
import Alert from '../shared/Alert'
import Badge from '@/components/shared/Badge'
import { Label } from '@/components/ui/label'
import Dialog from '../shared/Dialog'
import CreateTopic from './CreateTopic'
import TextMarkDown from '@/components/shared/TextMarkDown';
const badgeClass = "nbadge nrounded-full ninline-block npx-3 npy-0.5 nbg-rose-400"
interface SubjectPreviewProp {
    handleEnableQuestionAddition: (id: string, title: string) => void
    handeShowAddNewTopicForm: () => void
}
interface QuestionPreview {
    id: string,
    title: string,
    totalQuestion: number,
    totalMark: number,
    duration: number,
    isPaid: boolean,
    questions: Question[]

}
const SubjectPreview = ({ handleEnableQuestionAddition, handeShowAddNewTopicForm }: SubjectPreviewProp) => {
    const params = useParams()
    const [isEditTopicModelVisible, setIsEditTopicModelVisible] = useState(false);
    const [editId, setEditId] = useState("")
    const subjectId = params.subjectId || ""
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const [showDeleteTopicAlert, setShowDeleteTopicAlert] = useState(false)
    const { data, isLoading } = useQuery<SubjectApiResponse[]>({ queryKey: ['getSubjectPreview'], queryFn: () => api.testSeries.getSubject(subjectId) });
    const subjectList = data && data?.data;
    const subject = subjectList && subjectList[0];
    const topics: Topic[] = subject && subject.topics
    const [delTopicId, setDelTopicId] = useState("")
    // Open edit topic model
    const onOpenEditTopicModal = (id: string) => {
        setEditId(id)
        setIsEditTopicModelVisible(!isEditTopicModelVisible)

    }
    const QuestionPreview = ({ title, id, questions, duration, totalMark, totalQuestion, isPaid }: QuestionPreview) => {

        const onAddClick = () => {
            handleEnableQuestionAddition(id, title)
        }
        const handleDeleteQuestion = async (id: string) => {

            try {
                const res = await api.testSeries.deleteQuestion(id)
                if (res.status === 200) {
                    const message = res.data.message
                    if (message) {
                        toast.success(message)
                    }
                    queryClient.invalidateQueries({ queryKey: ["getSubjectPreview"] });
                }

            } catch (error) {
                const errorMessage = errorHandler(error)
                toast.error(errorMessage)
            }
        }
        const handleDeleteTopic = async (id: string) => {
            setDelTopicId(id)
            setShowDeleteTopicAlert(true)
        }

        const onCloseAlert = () => {
            setShowDeleteTopicAlert(false)

        }
        const onTopicDeleteConfirm = async () => {
            try {
                const res = await api.testSeries.deleteTopic(delTopicId)
                if (res.status === 200) {
                    const message = res.data.message
                    setShowDeleteTopicAlert(false)
                    if (message) {
                        toast.success(message)
                    }
                    handleEnableQuestionAddition("", "")
                    queryClient.invalidateQueries({ queryKey: ["getSubjectPreview"] });
                }

            } catch (error) {
                console.error('Error:: while deleting topic')
                const errorMessage = errorHandler(error)
                setShowDeleteTopicAlert(false)
                toast.error(errorMessage)
            }


        }
        return (
           <div className='nbg-background nrelative nmb-4 np-4 nrounded-md nshadow-md nborder-l-4 nborder-brand'>
    {/* Top Right Action Buttons */}
    <div className='nabsolute nright-2 ntop-2 nflex ngap-2'>
        <Button onClick={() => onOpenEditTopicModal(id)} size="icon" variant="ghost" title="Edit">
            <FaRegEdit size={20} />
        </Button>
        <Button onClick={() => handleDeleteTopic(id)} size="icon" variant="ghost" title="Delete Topic">
            <IoMdTrash size={20} />
        </Button>
    </div>

    {/* Stats Overview */}
    <div className='ngrid md:ngrid-cols-2 lg:ngrid-cols-4 ngap-4 nmt-4'>
        <div>
            <p className='ntext-xs ntext-muted-foreground'>Total Question</p>
            <Badge>{totalQuestion}</Badge>
        </div>
        <div>
            <p className='ntext-xs ntext-muted-foreground'>Duration</p>
            <Badge>{duration} mins</Badge>
        </div>
        <div>
            <p className='ntext-xs ntext-muted-foreground'>Total Mark</p>
            <Badge>{totalMark}</Badge>
        </div>
        <div>
            <p className='ntext-xs ntext-muted-foreground'>Price</p>
            <Badge primary={isPaid}>{isPaid ? 'Paid' : 'Free'}</Badge>
        </div>
    </div>

    {/* Accordion for Questions */}
    {title && (
        <Accordion type="single" collapsible className="nmt-6">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className='nflex nitems-center ngap-3'>
                        <Heading text={title} />
                        <IoMdAddCircle size={20} className='ntext-muted-foreground hover:ntext-primary' onClick={onAddClick} />
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <Each
                        of={questions}
                        render={(item, index) => (
                            <div key={item._id} className='nmt-4 npb-4 nborder-b '>
                                {/* Question Header */}
                                <div className='nflex nitems-center njustify-between nmb-3'>
                                    <div className='nflex nitems-center ngap-2'>
                                        <Badge>{index + 1}</Badge>
                                        <Heading text={item.question} />
                                    </div>
                                    <div className='nflex ngap-2'>
                                        <Button variant="ghost" size="icon">
                                            <FaRegEdit size={18} />
                                        </Button>
                                        <Button variant="ghost" size="icon" title="Delete Question" onClick={() => handleDeleteQuestion(item._id)}>
                                            <IoMdTrash size={18} />
                                        </Button>
                                    </div>
                                </div>

                                {/* Options */}
                                <Each
                                    of={item.options}
                                    render={(op) => (
                                        <div key={op}>
                                            <InputControl inputValue={op} readonly />
                                        </div>
                                    )}
                                />

                                {/* Correct Answer */}
                                <div className='nflex nitems-center ngap-3 nmt-4'>
                                    <Label>Correct Answer:</Label>
                                    <Badge>{item.correctAnswer}</Badge>
                                </div>

                                {/* Explanation */}
                                <div className='nmt-4'>
                                    <Label>Explanation:</Label>
                                    <div className='nborder nborder-border nrounded-md npx-4 npy-2 nmt-1'>
                                        <TextMarkDown text={item.explanation} />
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )}

    {/* Delete Topic Alert */}
    <Alert
        open={showDeleteTopicAlert}
        isConfirmBtnVisible
        confirmBtnText={localizationEN.delete}
        onClose={onCloseAlert}
        message={localizationEN.deleteTopicMessage}
        onConfirm={onTopicDeleteConfirm}
    />
</div>

        )
    }
    const handlePublish = async () => {
        try {
            const res = await api.testSeries.publishTestSeries(subjectId)
            if (res.status === 200) {
                const message = res.data.message
                toast.success(message)
                navigate('/dashboard/admin/test-management')
            }

        } catch (error) {
            const errorMessage = errorHandler(error)
            toast.error(errorMessage)

        }

    }
   return (
    <div className='nrelative'>
        {subject && (
            <div className='nh-screen nflex nflex-col'>
                {/* Subject Header */}
                <div className='np-4 nborder-b nborder-border nflex nitems-center njustify-between nbg-background'>
                    <div className='nflex nitems-center ngap-2'>
                        <Heading text="Subject:" />
                        <Heading text={subject.subject} className='nfont-semibold' />
                    </div>
                    <div className='nflex ngap-3'>
                        <Button
                            onClick={handeShowAddNewTopicForm}
                            variant={"secondary"}
                        >
                            Add New Topic
                        </Button>
                        <Button
                            onClick={handlePublish}
                        >
                            Publish
                        </Button>
                    </div>
                </div>

                {/* Topics Section */}
                {topics?.length > 0 ? (
                    <div className='np-4 nh-[90vh] noverflow-y-auto'>
                        <p className='ntext-xl nfont-semibold nmb-3'>Topics:</p>
                        <Each
                            of={topics}
                            render={(item) => (
                                <QuestionPreview
                                    key={item._id}
                                    title={item?.title}
                                    isPaid={item.isPaid}
                                    totalQuestion={item.totalQuestion}
                                    totalMark={item.totalMark}
                                    id={item._id}
                                    duration={item.duration}
                                    questions={item.questions}
                                />
                            )}
                        />
                    </div>
                ) : (
                    <EmptyView title='Topics not found' subTitle='Please add to view' />
                )}
            </div>
        )}

        {/* Edit Topic Dialog */}
        <Dialog open={isEditTopicModelVisible}>
            <CreateTopic />
        </Dialog>
    </div>
);

}

export default SubjectPreview