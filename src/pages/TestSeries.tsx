import Heading from "@/components/shared/Heading";
import InputControl from "@/components/shared/InputControl";
import TextAreaControl from "@/components/shared/TextAreaControl";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subjectFormSchema } from "@/data/formSchema";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SubjectFormValues } from "@/types/testSeries";
import { Label } from "@/components/ui/label";
import api from "@/services";
import { errorHandler } from "@/helpers/errorHandler";
import toast from "react-hot-toast";
import localizationEN from "@/config/constant";
import Alert from "@/Dashboard/shared/Alert";
import { useNavigate } from "react-router-dom";
const TestSeries = () => {
    const [isChecked, setIsCehcked] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate()
    const [formData, setFormData] = useState<SubjectFormValues | null>(null)
    const methods = useForm({
        resolver: yupResolver(subjectFormSchema),
        mode: "all",
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;
    const onFormSubmit = async (data: SubjectFormValues) => {
        setFormData(data)
        setShowAlert(true);

    };
    const onIsPaidChange = (checked: boolean) => {
        setIsCehcked(checked);
    };
    const onCloseAlert = () => {
        setShowAlert(false);
    };
    const createSubject = async () => {
        try {
            if (formData) {
                const res = await api.testSeries.addSubject(formData)
                console.log('_data', res)
                if (res?.data.success) {
                    const message = res?.data.message
                    toast.success(message)
                    const subjectId = res?.data.data._id
                    return subjectId
                }

            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            const errorMessage = errorHandler(error)
            toast.error(errorMessage)
        }

    }

    // Create Subject 
    const onCreateClick = async () => {
        const subjectId = await createSubject()
        if (subjectId) {
            navigate('/dashboard/admin')
        }


    }
    const onConfirmClick = async () => {
        const subjectId = await createSubject()
        if (subjectId) {
            navigate(`/dashboard/admin/${subjectId}/add-topic`)
        }

    }
    return (
        <div className="np-4">
            <Heading text="Create Subject" />
            <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="nmt-6  np-4 nw-1/2 nspace-y-4 nborder-2 nborder-secondary"
            >
                <InputControl
                    {...register("title")}
                    errorMessage={errors?.title?.message}
                    name="title"
                    label="Title"
                    hintText="Enter Subject title"
                />
                <TextAreaControl label="Description" name="description" />
                <div className="nflex ngap-3 nitems-center">
                    <Label>Is paid</Label>
                    <Switch onCheckedChange={onIsPaidChange} />
                    {isChecked && (
                        <div className="nflex nitems-center ngap-4">
                            <Label>Price</Label>
                            <InputControl
                                type="number"
                                {...register("price")}
                                name="price"
                                hintText="$399"
                            />
                        </div>
                    )}
                </div>
                <div className="ngrid ngrid-cols-2 ngap-4">
                    <InputControl
                        {...register("totalSet")}
                        name="totalSet"
                        type="number"
                        label="Total Topics"
                        hintText="Enter number of topics"
                    />
                    <InputControl
                        type="number"
                        {...register("freeSet")}
                        name="freeSet"
                        label="Total free Topics"
                        hintText="Enter number of free topics"
                    />
                </div>
                <div className="nflex njustify-end">
                    <Button variant={"secondary"} type="submit" className="!nbg-rose-400 hover:!nbg-rose-500">
                        Create
                    </Button>
                </div>
            </form>

            <Alert
                open={showAlert}
                isCreateBtnVisible={true}
                createBtnText={localizationEN.save}
                isConfirmBtnVisible={true}
                confirmBtnText={localizationEN.saveAndAddTopic}
                onClose={onCloseAlert}
                message={localizationEN.confirmSaveCourse}
                onCreateClick={onCreateClick}
                onConfirm={onConfirmClick}
            />
        </div>
    );
};

export default TestSeries;
