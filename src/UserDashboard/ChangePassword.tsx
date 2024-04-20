import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputControl from "@/components/shared/InputControl";
import { changePasswordSchema } from "@/data/formSchema";
import api from '@/services'
import toast from "react-hot-toast";
import { errorHandler } from "@/helpers/errorHandler";
import { useNavigate } from "react-router-dom";
import { ChangePassProp } from "@/types";

const ChangePassword = () => {
    const methods = useForm({
        resolver: yupResolver(changePasswordSchema),
        mode: 'all'
    })
    const navigate = useNavigate()
    const { register, formState: { errors } } = methods
    console.log('errors', errors)
    const onFormSubmit = async (data: ChangePassProp) => {
        const { currentPassword, newPassword } = data
        try {

            const res = await api.user.changePassword({ currentPassword, newPassword })
            if (res.status === 201) {
                const message = res.data.message
                toast.success(message)
                navigate('/profile')
            }
            console.log('change pass res', res)
        } catch (error) {
            const errorMessage = errorHandler(error)
            toast.error(errorMessage)

        }
    }
    return (
        <>
            <h1 className="nmy-4 ntext-bold ">Change Passwpord</h1>
            <form onSubmit={methods.handleSubmit(onFormSubmit)} className="ngrid ngrid-cols-12 ngap-4">
                <div className="ncol-span-4">
                    <h1 >Old Password</h1>
                </div>
                <div className="ncol-span-8">
                    <InputControl {...register("currentPassword" as const)} errorMessage={errors?.currentPassword?.message} name="currentPassword" hintText="••••••••" />
                </div>
                <div className="ncol-span-4">
                    <h1 >New Password</h1>
                </div>
                <div className="ncol-span-8">
                    <InputControl {...register('newPassword' as const)} errorMessage={errors?.newPassword?.message} name="newPassword" hintText="••••••••" />
                </div>
                <div className="ncol-span-4">
                    <h1 >Confirm Password</h1>
                </div>
                <div className="ncol-span-8">
                    <InputControl {...register('confirmPassword' as const)} errorMessage={errors.confirmPassword?.message} name="confirmPassword" hintText="••••••••" />
                    <div className="nmt-4">
                        <Button type="submit" variant={'secondary'}>Update</Button>
                    </div>
                </div>

            </form>


        </>
    )
}

export default ChangePassword