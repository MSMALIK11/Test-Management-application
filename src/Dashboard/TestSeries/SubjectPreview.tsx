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
            <div className='nbg-background nrelative nmb-4 np-4 rounded-sm shadow-lg nborder-l-4 nborder-rose-400 nrounded-lg'>
                <div className='nabsolute nright-1'>
                    <Button onClick={() => onOpenEditTopicModal(id)} size={"icon"} variant={"ghost"} title='Edit'>
                        <FaRegEdit size={22} />
                    </Button>
                    <Button size="icon" variant={'ghost'} title='Delete Topic' onClick={() => handleDeleteTopic(id)}>
                        <IoMdTrash size={22} />
                    </Button>
                </div>
                <div className='ngrid  md:ngrid-cols-2 lg:ngrid-cols-3 ngap-4'>
                    <div>
                        <p>Total Question</p>
                        <Badge>
                            {totalQuestion}
                        </Badge>

                    </div>
                    <div>
                        <p>Duration</p>
                        {duration && <Badge>
                            {duration}  mins
                        </Badge>}


                    </div>
                    <div>
                        <p>Total Mark</p>
                        <Badge>
                            {totalMark}
                        </Badge>

                    </div>

                    <div>
                        <p>Price</p>
                        <Badge primary={isPaid}>
                            {isPaid ? 'Paid' : 'Free'}
                        </Badge>
                    </div>
                </div>
                {
                    title && <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">

                            <AccordionTrigger>
                                <div className='nflex nitems-center ngap-4' title="Clcik to insert question in this topic">
                                    <Heading text={title} /> <IoMdAddCircle size={22} onClick={onAddClick} /> </div></AccordionTrigger>
                            <AccordionContent>
                                <Each of={(questions)} render={(item, index) => <div key={item?._id}>

                                    <div className='nflex nitems-center njustify-between  nmb-4'>
                                        <div className='nflex nitems-center ngap-1'>
                                            <p className={badgeClass}>{index + 1}</p>
                                            <Heading text={item.question} />
                                        </div>
                                        <div>
                                            <Button variant={"ghost"}>
                                                <FaRegEdit size={22} />
                                            </Button>
                                            <Button title='Delete Question' variant={"ghost"} onClick={() => handleDeleteQuestion(item._id)}>
                                                <IoMdTrash size={22} />
                                            </Button>


                                        </div>

                                    </div>
                                    <Each of={item.options} render={(op) =>
                                        <div key={op}>
                                            <InputControl inputValue={op} readonly />
                                        </div>} />
                                    <div className='nflex nitems-center ngap-4 nmy-4'>
                                        <Heading text="Correct Ans" />
                                        <span className={badgeClass}>{item.correctAnswer}</span>


                                    </div>
                                    <div>
                                        <Label>Expalanation:</Label>
                                        <div className='nborder-primary npx-4'>
                                            <TextMarkDown text={item.explanation} />

                                        </div>
                                    </div>

                                </div>} />

                            </AccordionContent>
                        </AccordionItem>


                    </Accordion>
                }

                <Alert
                    open={showDeleteTopicAlert}

                    isConfirmBtnVisible={true}
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
            {
                subject && <div className=' nh-screen'>
                    <div className='np-4 nborder-b-2 nborder-background nflex njustify-between'>
                        <div className='nflex nitems-center ngap-2'>

                            <Heading text="Subject :" />
                            <Heading className='nfont-bold' text={subject?.subject} />
                        </div>
                        <div className='nflex ngap-4'>
                            <Button onClick={handeShowAddNewTopicForm} className='nbg-rose-400 hover:nbg-rose-500 !ntext-primary'>Add New Topic</Button>
                            <Button onClick={handlePublish} className='nbg-rose-400 hover:nbg-rose-500 !ntext-primary'>Publish</Button>

                        </div>
                    </div>

                    {
                        topics?.length > 0 ? <div className='np-4 nh-[90vh] noverflow-y-auto noverflow-hidden'>
                            <p className='ntext-2xl nmb-2'>Topics:</p>
                            <Each of={topics} render={(item) => <QuestionPreview title={item?.title} isPaid={item.isPaid} totalQuestion={item.totalQuestion} totalMark={item.totalMark} id={item._id} duration={item.duration} questions={item.questions} />} />
                        </div> : <EmptyView title='Topics not found' subTitle='Please add to view' />
                    }

                </div>
            }



            {/* <div className='nrelative'>
                <Loading isLoading={isLoading} />
            </div> */}
            <Dialog open={isEditTopicModelVisible}>
                <CreateTopic />

            </Dialog>
        </div>
    )
}

export default SubjectPreview