import InputControl from "@/components/shared/InputControl"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subjectTopicSchema } from "@/data/formSchema";
import { Button } from "@/components/ui/button"; import Heading from "@/components/shared/Heading";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import ComboBox from "@/components/shared/ComboBox";
import { generateDurationOption } from "@/helpers/generateDurationOption";
import { TopicFormValues } from "@/types/testSeries";
import api from '@/services'
import { useParams } from "react-router-dom";
import { errorHandler } from "@/helpers/errorHandler";
import toast from "react-hot-toast";
import { useState } from "react";
import { useQueryClient } from '@tanstack/react-query'
import SubjectPreview from "@/Dashboard/TestSeries/SubjectPreview";
import CreateQuestions from "@/Dashboard/AddNewCourse/CreateQuestion";
import { QuestionType } from "@/types/CourseType";
const AddTopic = () => {
    const [isPaid, setIsPaid] = useState<boolean>(true)
    const [duration, setDuration] = useState<string | number>("")
    const [topicId, setToicId] = useState<string>("")
    const [topicTitle, setTopicTitle] = useState("")
    const params = useParams()
    const queryClient = useQueryClient()
    const { subjectId } = params
    console.log('params', subjectId)
    const methods = useForm({
        resolver: yupResolver(subjectTopicSchema),
        mode: "all",
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = methods;

    const onFormSubmit = async (data: TopicFormValues) => {
        try {

            const payload = {
                ...data,
                isPaid,
                duration
            }
            if (subjectId) {
                const res = await api.testSeries.addTopic(payload, subjectId)
                if (res.status === 200) {
                    queryClient.invalidateQueries({ queryKey: ["getSubjectPreview"] })
                    toast.success(res.data.message)

                    reset()
                }

            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            const errorMessage = errorHandler(error)
            toast.error(errorMessage)

        }
    }
    const onIsPaidChange = (val: boolean) => {
        setIsPaid(val)

    }
    const onHandleDurationChange = (dur: number | string) => {
        setDuration(dur)
    }

    const CreateTopicForm = () => {
        return (
            <>
                <div>
                    <Heading text="Add Topic " />
                    <form
                        onSubmit={handleSubmit(onFormSubmit)}
                        className="nmt-6  np-4  nspace-y-4  nbg-secondary"
                    >
                        <InputControl
                            {...register("title")}
                            errorMessage={errors?.title?.message}
                            name="title"
                            label="Title"
                            hintText="Enter Subject title"
                        />
                        <div className="ngrid ngrid-cols-2 ngap-4">
                            <InputControl
                                type="number"
                                {...register("totalQuestion")}
                                name="totalQuestion"
                                label="Total Question"
                                hintText="Please enter total number of questions"
                            />
                            <InputControl
                                {...register("totalMark")}
                                name="totalMark"
                                type="number"
                                label="Total Mark"
                                hintText="Please enter total mark"
                            />
                        </div>
                        <ComboBox onSelectChange={onHandleDurationChange} hintText="Select duration..." label="Duration" options={generateDurationOption()} />
                        <div className="nflex ngap-3 nitems-center">
                            <Label>Is paid</Label>
                            <Switch defaultChecked onCheckedChange={onIsPaidChange} />
                        </div>
                        <div className="nflex njustify-end">
                            <Button className="!nbg-rose-400 hover:!nbg-rose-500" type="submit" variant={"secondary"} >
                                Create
                            </Button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
    const handleEnableQuestionAddition = (id: string, title: string) => {
        setToicId(id)
        setTopicTitle(title)

    }

    // Insert Question
    const handleAddQuestion = async (data: QuestionType) => {
        try {
            console.log('data', data, topicId)
            if (topicId) {
                const res = await api.testSeries.indertQuestion(data, topicId)
                if (res.status === 200) {
                    const message = res.data.message
                    toast.success(message)
                    reset()
                }
                queryClient.invalidateQueries({ queryKey: ["getSubjectPreview"] });
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Error::while insert question')
            const errorMessage = errorHandler(error)
            toast.error(errorMessage)
        }

    }

    const handeShowAddNewTopicForm = () => {
        setToicId("")
        setTopicTitle("")

    }
    return (
        <div className="np-4">
            <div className="ngrid ngrid-cols-2 ngap-4">
                {
                    topicId !== "" ? <CreateQuestions title={topicTitle} onAddQuestions={handleAddQuestion} /> : <CreateTopicForm />
                }


                <div>
                    <div className="  nbg-secondary nrelative">
                        <SubjectPreview handleEnableQuestionAddition={handleEnableQuestionAddition} handeShowAddNewTopicForm={handeShowAddNewTopicForm} />
                    </div>
                </div>
            </div>

            {/* <Alert
                open={showAlert}
                isCreateBtnVisible={true}
                createBtnText={localizationEN.save}
                isConfirmBtnVisible={true}
                confirmBtnText={localizationEN.saveAndAddTopic}
                onClose={onCloseAlert}
                message={localizationEN.confirmSaveCourse}
                onCreateClick={onCreateClick}
                onConfirm={onConfirmClick}
            /> */}
        </div>


    )
}
export default AddTopic