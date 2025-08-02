import Each from '@/components/shared/Each'
import Heading from '@/components/shared/Heading'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import api from '@/services'
import { useParams } from 'react-router-dom'
import Loading from '@/components/shared/Loading'
import { Question, Topic } from '@/types/subjectApiResponse'
import { FaRegEdit, IoMdTrash } from '@/assets/Icons'
import Dialog from '@/Dashboard/shared/Dialog'
import { ChangeEvent, useState } from 'react'
import IconButton from '@/components/shared/IconButton'
import EmptyView from '@/components/shared/EmptyView'
import { Input } from '@/components/ui/input'
import CountBadge from '@/components/shared/CountBadge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import toast from 'react-hot-toast'
import { errorHandler } from '@/helpers/errorHandler'
import Badge from '@/components/shared/Badge'
import ToolTip from '@/components/shared/ToolTip'
import InputControl from '@/components/shared/InputControl'
import InputNumberControl from '@/components/shared/InputNumberControl'
import { generateDurationOption } from '@/helpers/generateDurationOption'
import ComboBox from '@/components/shared/ComboBox'
import Alert from '@/Dashboard/shared/Alert'
import TextEditor from '@/Dashboard/components/TextEditor'
import TextMarkDown from '@/components/shared/TextMarkDown'
const ViewSubject = () => {
    const [showEditDialog, setEditDialog] = useState(false)
    const [editQuestionData, setEditQuestionData] = useState<Question | null>(null);
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState("")
    const [editTopicData, setEditTopicData] = useState<Topic | null>(null)
    const [loading, setLoading] = useState(false)
    const [showEditTopicDialog, setShowEditTopicDialog] = useState(false)
    const [showDeleteQuesConfirm, setShowDeleteQuesConfirm] = useState(false)
    const [delId, setDelId] = useState("")
    const queryClient = useQueryClient()
    const abcd = ['A', 'B', 'C', 'D'];
    const params = useParams()
    const { id } = params
    const { isLoading, data } = useQuery({ queryKey: ['ViewSubejctDetails'], queryFn: () => api.testSeries.getSubject(id || "") })
    const courseData = data && data?.data[0]
    const topics: Topic[] = courseData && courseData?.topics
    if (isLoading) {
        return <Loading isLoading={isLoading} />
    }
    const onShowEditDialog = (data: Question) => {
        setEditQuestionData(data)
        setCurrentAnswerIndex(data?.correctAnswer)
        setEditDialog(!showEditDialog)
    }
    const onCloseEditDialog = () => {
        setEditDialog(!showEditDialog)

    }
    const getCorrectAns = (correctAns: string) => {
        const findIndex = abcd.findIndex((item) => item === correctAns)
        return findIndex

    }
    const handleEditQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setEditQuestionData((prev) => prev ? { ...prev, question: value } : null);
    }

    // Edit Question options
    const handleEditOptionChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target
        console.log('event', e.target.value);
        console.log('event in dec', index)
        setEditQuestionData((prev) => {
            if (!prev) return null;
            const newOptions = [...prev.options];
            newOptions[index] = value;
            return { ...prev, options: newOptions };
        });

    }

    const handleEditCorrectAnswerClick = (optionName: string) => {
        setCurrentAnswerIndex(optionName)
        setEditQuestionData((prev) => prev ? { ...prev, correctAnswer: optionName } : null);
    };
    const onChangeExpalanation = (value: string) => {
        setEditQuestionData((prev) => prev ? { ...prev, explanation: value } : null);
    }
    // Click on  update
    const onUpdateQuestion = async () => {
        setLoading(true)
        try {
            const res = await api.testSeries.updateQuestion(editQuestionData)
            if (res.status === 200) {
                toast.success('Question Updated successfully')
                queryClient.invalidateQueries({ queryKey: ['ViewSubejctDetails'] })
                setEditDialog(!showEditDialog)
                setLoading(false)
            }
        } catch (error) {
            console.error('Error::while updating question')
            const errorMessage = errorHandler(error)
            toast.error(errorMessage)
            setEditDialog(!showEditDialog)
            setLoading(false)

        }

    }

    // Edit Topic 
    const onShowEditTopicDialog = (data: Topic) => {
        setEditTopicData(data)
        console.log('editTopicData', data)
        setShowEditTopicDialog(!showEditTopicDialog)
    }

    const onHandleDurationChange = (dur: string) => {
        if (dur) {
            setEditTopicData((prev) => prev ? { ...prev, duration: dur } : null);
        }
    }
    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setEditTopicData((prev) => prev ? { ...prev, title: value } : null);

    }
    const onTotalQuestionchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setEditTopicData((prev) => prev ? { ...prev, totalQuestion: Number(value) } : null)


    }
    const onTotalMarkchange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (value) {
            setEditTopicData((prev) => prev ? { ...prev, totalMark: Number(value) } : null)
        }
    }
    // on update topic 
    const onUpdateTopic = async () => {
        if (editTopicData !== null) {
            const id = editTopicData?._id
            const payload = {
                title: editTopicData.title,
                duration: editTopicData?.duration,
                totalQuestion: editTopicData?.totalQuestion,
                totalMark: editTopicData?.totalMark,
            }
            setLoading(true)

            try {
                const res = await api.testSeries.updateTopic(id, payload)
                if (res.status === 200) {
                    const message = res.data.message
                    toast.success(message)
                    setShowEditTopicDialog(!showEditTopicDialog)
                    setLoading(false)
                    queryClient.invalidateQueries({ queryKey: ['ViewSubejctDetails'] })
                }

            } catch (error) {
                setShowEditTopicDialog(!showEditTopicDialog)
                const errorMessage = errorHandler(error)
                setLoading(false)
                toast.error(errorMessage)
            }
        }

    }
    // Delete Question
    const onShowDeleteQuesConfirm = (id: string) => {
        setDelId(id)
        setShowDeleteQuesConfirm(!showDeleteQuesConfirm)

    }
    const onDeleteConfirm = async () => {
        try {
            const res = await api.testSeries.deleteQuestion(delId)
            if (res.status === 200) {
                const message = res.data.message
                setShowDeleteQuesConfirm(!showDeleteQuesConfirm)
                toast.success(message)
                queryClient.invalidateQueries({ queryKey: ['ViewSubejctDetails'] })
            }

        } catch (error) {
            const errorMessage = errorHandler(error)
            setShowDeleteQuesConfirm(!showDeleteQuesConfirm)
            toast.error(errorMessage)

        }
    }

    return (
        <div className='np-4 '>

            <Heading text='View Details' className='ntext-xl' />
            {
                topics.length > 0 ?

                    <div>
                        <div className='nflex ngap-2 nmt-8 '>
                            <Heading className='ntext-gray-300' text='Total Topics :' />
                            <Heading className='nfont-bold' text={topics?.length} />
                        </div>

                       <div className="ngrid ngap-6 ngrid-cols-1 md:ngrid-cols-2 xl:ngrid-cols-3 nmt-6">
  <Each of={topics} render={(item, index) => (
    <div key={item._id} className="nbg-secondary nrounded-xl nborder nborder-border nshadow-md npx-4 npy-3 nspace-y-4 nmin-h-[320px] nflex nflex-col">

      {/* Title + Edit */}
      <div className="nflex njustify-between nitems-center nborder-b npb-2">
        <h2 className="ntext-lg nfont-semibold ntext-foreground">Topic: {item.title}</h2>
        <ToolTip title="Edit Topic">
          <IconButton onClick={() => onShowEditTopicDialog(item)} icon={<FaRegEdit size={16} />} />
        </ToolTip>
      </div>
      {/* Meta Info */}
      <div className="nflex nflex-wrap ngap-3 ntext-sm">
        <div className="nflex ngap-1 nitems-center"><Label>Duration:</Label> <Badge>{item.duration} mins</Badge></div>
        <div className="nflex ngap-1 nitems-center"><Label>Total Marks:</Label> <Badge>{item.totalMark}</Badge></div>
        <div className="nflex ngap-1 nitems-center"><Label>Total Questions:</Label> <Badge>{item.totalQuestion}</Badge></div>
      </div>

      {/* Questions */}
      <div className="nspace-y-6 nmax-h-[280px] noverflow-y-auto npt-3">
        <Each of={item.questions} render={(q, i) => (
          <div key={q._id} className="nborder nborder-muted nrounded-md np-3">
            <div className="nflex njustify-between">
              <div className="nflex ngap-2 nitems-start">
                <span className="nw-6 nh-6 nflex nitems-center njustify-center ntext-sm nfont-bold nbg-muted ntext-foreground nrounded">{i + 1}</span>
                <span className="ntext-sm nfont-medium ntext-foreground">{q.question}</span>
              </div>
              <div className="nflex ngap-2">
                <ToolTip title="Edit Question">
                  <IconButton onClick={() => onShowEditDialog(q)} icon={<FaRegEdit size={14} />} />
                </ToolTip>
                <ToolTip title="Delete Question">
                  <IconButton onClick={() => onShowDeleteQuesConfirm(q._id)} icon={<IoMdTrash size={14} />} />
                </ToolTip>
              </div>
            </div>

            {/* Options */}
            <div className="nml-8 nmt-3 nspace-y-1 ntext-sm">
              <Each of={q.options} render={(op, idx) => (
                <div className="nflex ngap-2" key={idx}>
                  <span>{abcd[idx]}:</span>
                  <span className={`${getCorrectAns(q.correctAnswer) === idx ? 'ntext-green-400' : 'ntext-muted-foreground'}`}>
                    {op}
                  </span>
                </div>
              )} />
            </div>

            {/* Explanation */}
            <div className="nmt-2">
              <Label>Explanation</Label>
              <div className="nbg-background np-2 nrounded-md nborder nmt-1 ntext-sm">
                <TextMarkDown text={q.explanation} />
              </div>
            </div>
          </div>
        )} />
      </div>

    </div>
  )} />
</div>

                    </div>
                    : <EmptyView title='No Result Found' />
            }
            {/* Edit questin and options */}
            <Dialog title='Edit Question' open={showEditDialog} isLoading={loading} handleOnsubmit={onUpdateQuestion} onClose={onCloseEditDialog} submitBtnText="Update">
                <div className='nw-[400px] nh-[60vh] noverflow-scroll'>

                    <Input value={editQuestionData?.question} onChange={handleEditQuestionChange} />
                    <div className='nspace-y-2 nmt-4'>
                        <div className="nmt-4 nflex nflex-col ngap-4" >
                            {editQuestionData && abcd.map((optionName, index) => (
                                <div className='nflex nitems-center ngap-2 '>
                                    <CountBadge label={optionName} />
                                    <Input

                                        key={optionName}
                                        name={optionName}
                                        value={editQuestionData?.options[index]}
                                        className={`ntransition-all nduration-300 ${currentAnswerIndex === optionName ? 'nborder-green-400 ' : ''}`}
                                        onChange={(event) => handleEditOptionChange(event, index)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="nflex ngap-4 npt-4 nitems-center">
                            <p>Correct Answer</p>
                            {abcd.map((optionName) => (
                                <Button
                                    variant={"link"}
                                    key={optionName}
                                    tabIndex={0}
                                    onClick={() => handleEditCorrectAnswerClick(optionName)}
                                    className={`nh-[26px] ntext-xs nflex nitems-center njustify-center nw-[26px]   nrounded-full  ${currentAnswerIndex === optionName ? 'nbg-brand' : ''}`}
                                >
                                    {optionName}
                                </Button>
                            ))}
                        </div>
                        {/* Explanation in edit  */}
                        <div className='nflex nflex-col ngap-2 npt-4'>
                            <Label >Explanation</Label>
                            <TextEditor value={editQuestionData?.explanation || ""} onChange={onChangeExpalanation} />


                        </div>
                    </div>
                </div>

            </Dialog>
            <Dialog title='Edit Topic' isLoading={loading} open={showEditTopicDialog} handleOnsubmit={onUpdateTopic} onClose={() => setShowEditTopicDialog(!showEditTopicDialog)} submitBtnText="Update">
                <div className='nw-[400px] nspace-y-4'>
                    <InputControl onInputChange={onTitleChange} label='Topic title' inputValue={editTopicData?.title} />
                    <InputNumberControl onInputChange={onTotalQuestionchange} label='Total Question' value={editTopicData?.totalQuestion} />
                    <InputNumberControl onInputChange={onTotalMarkchange} label='Total Marks' value={editTopicData?.totalMark} />
                    <ComboBox onSelectChange={onHandleDurationChange} hintText="Select duration..." label="Duration" options={generateDurationOption()} />
                </div>
            </Dialog>

            <Alert open={showDeleteQuesConfirm} confirmBtnText='Yes' message="Are you sure you want to delete this question? This action cannot be undone." isConfirmBtnVisible onConfirm={onDeleteConfirm} />


        </div >
    )
}

export default ViewSubject