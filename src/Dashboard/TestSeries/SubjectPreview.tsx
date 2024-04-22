
import Each from '@/components/shared/Each'
import Heading from '@/components/shared/Heading'
import Loading from '@/components/shared/Loading'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IoMdAddCircle, IoMdTrash, FaRegEdit } from '@/assets/Icons'

import api from '@/services'
import { SubjectApiResponse, Question, Topic } from '@/types/subjectApiResponse'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import InputControl from '@/components/shared/InputControl'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { errorHandler } from '@/helpers/errorHandler'
import EmptyView from '@/components/shared/EmptyView'
const badgeClass = "nbadge nrounded-full ninline-block npx-2 nbg-rose-400"
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
    questions: Question[]

}
const SubjectPreview = ({ handleEnableQuestionAddition, handeShowAddNewTopicForm }: SubjectPreviewProp) => {
    const params = useParams()
    const subjectId = params.subjectId || ""
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery<SubjectApiResponse[]>({ queryKey: ['getSubjectPreview'], queryFn: () => api.testSeries.getSubject(subjectId) });
    const subjectList = data && data?.data;
    const subject = subjectList && subjectList[0];
    const topics: Topic[] = subject && subject.topics
    const QuestionPreview = ({ title, id, questions, duration, totalMark, totalQuestion }: QuestionPreview) => {
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
            try {
                const res = await api.testSeries.deleteTopic(id)
                if (res.status === 200) {
                    const message = res.data.message

                    if (message) {
                        toast.success(message)
                    }
                    handleEnableQuestionAddition("", "")
                    queryClient.invalidateQueries({ queryKey: ["getSubjectPreview"] });
                }

            } catch (error) {
                console.error('Error:: while deleting topic')
            }


        }

        return (
            <div className='nbg-background nrelative nmb-4 np-4 rounded-sm shadow-lg nborder-l-4 nborder-rose-400 nrounded-lg'>
                <div className='nabsolute nright-1'>
                    <Button size={"icon"} variant={"ghost"} title='Edit'>
                        <FaRegEdit size={22} />
                    </Button>
                    <Button size="icon" variant={'ghost'} title='Delete Topic' onClick={() => handleDeleteTopic(id)}>
                        <IoMdTrash size={22} />
                    </Button>
                </div>
                <div className='ngrid  md:ngrid-cols-2 lg:ngrid-cols-4 ngap-4'>

                    <div>
                        <p>Total Question</p>
                        <p className={badgeClass}>{totalQuestion}</p>
                    </div>
                    <div>
                        <p>Duration</p>
                        <p className={badgeClass}>{duration}  mins</p>
                    </div>
                    <div>
                        <p>Total Mark</p>
                        <p className={badgeClass}>{totalMark}</p>
                    </div>


                </div>
                <Accordion type="single" collapsible className="w-full">
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

                            </div>} />

                        </AccordionContent>
                    </AccordionItem>


                </Accordion>
            </div>
        )
    }
    return (
        <div className='nrelative'>
            {
                topics && <div>


                    <div className='np-4 nborder-b-2 nborder-background nflex njustify-between '>
                        <div className='nflex nitems-center ngap-2'>

                            <Heading text="Subject :" />
                            <Heading className='nfont-bold' text={subject?.subject} />
                        </div>
                        <Button onClick={handeShowAddNewTopicForm} className='nbg-rose-400 hover:nbg-rose-500 !ntext-primary'>Add New Topic</Button>

                    </div>
                    <div className='np-4 nh-[90vh] noverflow-y-auto noverflow-hidden'>
                        <Each of={topics} render={(item) => <QuestionPreview title={item?.title} totalQuestion={item.totalQuestion} totalMark={item.totalMark} id={item._id} duration={item.duration} questions={item.questions} />} />
                    </div>
                </div>
            }



            {/* <div className='nrelative'>
                <Loading isLoading={isLoading} />
            </div> */}
        </div>
    )
}

export default SubjectPreview