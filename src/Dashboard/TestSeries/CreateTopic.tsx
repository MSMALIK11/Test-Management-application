import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subjectTopicSchema } from "@/data/formSchema";
import Heading from "@/components/shared/Heading";
import { TopicFormValues } from "@/types/testSeries";
import InputControl from "@/components/shared/InputControl";
import ComboBox from "@/components/shared/ComboBox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { generateDurationOption } from "@/helpers/generateDurationOption";
interface CreateTopicProp {
    onSubmit: () => void
}

const CreateTopic = () => {
    const [isPaid, setIsPaid] = useState<boolean>(true)
    const [duration, setDuration] = useState<string | number>("")
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
    const onIsPaidChange = (val: boolean) => {
        setIsPaid(val)
    }
    const onHandleDurationChange = (dur: number | string) => {
        setDuration(dur)
    }

    const onFormSubmit = (data: TopicFormValues) => {

    }

    return (
        <>

            {/* <Heading text="Add Topic " /> */}
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

        </>
    )

}

export default CreateTopic