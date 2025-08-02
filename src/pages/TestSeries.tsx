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
import { Loader2 } from "lucide-react";

const TestSeries = () => {
  const [isChecked, setIsCehcked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SubjectFormValues | null>(null);

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
    setFormData({ ...data, isPaidCourse: isChecked });
    setShowAlert(true);
  };

  const onIsPaidChange = (checked: boolean) => {
    setIsCehcked(checked);
  };

  const onCloseAlert = () => {
    setShowAlert(false);
  };

  const createSubject = async () => {
    setLoading(true)
    try {
      if (formData) {
        const res = await api.testSeries.addSubject(formData);
        if (res?.data.success) {
          toast.success(res?.data.message);
          setLoading(false)
          return res?.data.data._id;
        }
      }
    } catch (error: any) {
        setLoading(false)
      const errorMessage = errorHandler(error);
      toast.error(errorMessage);
    }
  };

  const onCreateClick = async () => {
    const subjectId = await createSubject();
    if (subjectId) {
      navigate("/dashboard/admin");
    }
  };

  const onConfirmClick = async () => {
    const subjectId = await createSubject();
    if (subjectId) {
      navigate(`/dashboard/admin/${subjectId}/add-topic`);
    }
  };

  return (
    <div className="npx-4 nmd:px-8 nmt-6">
      <Heading text="Create Subject" />

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="nmt-6 nbg-secondary nrounded-xl nshadow-md nmax-w-3xl np-6 nspace-y-6 nborder nborder-border"
      >
        <div className="nspace-y-4">
          <InputControl
            {...register("title")}
            errorMessage={errors?.title?.message}
            name="title"
            label="Title"
            hintText="Enter subject title"
          />

          <TextAreaControl
            {...register("description")}
            label="Description"
            name="description"
            hintText="Brief summary about the subject"
          />

          <div className="nflex nitems-center ngap-4">
            <Label>Is Paid</Label>
            <Switch onCheckedChange={onIsPaidChange} />
            {isChecked && (
              <div className="nflex nitems-center ngap-3">
                <Label>Price</Label>
                <InputControl
                  type="number"
                  {...register("price")}
                  name="price"
                  hintText="E.g. 399"
                />
              </div>
            )}
          </div>

          <div className="ngrid ngrid-cols-1 sm:ngrid-cols-2 ngap-4">
            <InputControl
              {...register("totalSet")}
              name="totalSet"
              type="number"
              label="Total Topics"
              hintText="Total number of topics"
            />
            <InputControl
              type="number"
              {...register("freeSet")}
              name="freeSet"
              label="Free Topics"
              hintText="Number of free topics"
            />
          </div>
        </div>

        <div className="nflex njustify-end">
          <Button variant="default" type="submit" disabled={loading}>
  {loading && (
    <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />
  )}
  Create
</Button>
        </div>
      </form>

      <Alert
        open={showAlert}
        isCreateBtnVisible={true}
        createBtnText={localizationEN.save}
        isLoading={loading}
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
