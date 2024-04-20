import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { SignupFormType } from "@/types/userType";
import { Loader2 } from "lucide-react"
import api from '../services'
import { NavLink, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { errorHandler } from "@/helpers/errorHandler";
const Signup = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState<SignupFormType>({
        name: '',
        email: '',
        password: '',
        phone: null
    })
    const navigate = useNavigate()


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }
    const onHandleSignin = async () => {
        setIsLoading(true)
        try {
            const res = await api.user.singup(formData)

            if (res.status === 200) {
                const message = res.data.message
                toast.success(message)
                navigate('/login')
                setIsLoading(false)
            }

        } catch (error: any) {
            const message = errorHandler(error)
            toast.error(message)
            setIsLoading(false)
        }


    }
    return (

        <div className={`n${isLoading ? 'pointer-events-none' : ''} nh-screen w-screen  nmt-6`}>

            <div className="nmax-w-[400px] nbg-secondary nmx-auto nrounded-none nmd:rounded-2xl np-4 nmd:p-8 nshadow-input  nitems-center">


                <h2 className="nfont-bold ntext-xl ntext-neutral-200">
                    Sign Up
                </h2>
                <div className="nmy-8">
                    <LabelInputContainer>
                        <Label htmlFor="name">Name</Label>
                        <Input onChange={handleChange} id="name" name="name" placeholder="Tyler" type="text" />
                    </LabelInputContainer>

                    <LabelInputContainer className="nmy-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" onChange={handleChange} name="email" placeholder="john@gmail.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="nmb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" onChange={handleChange} name="password" placeholder="••••••••" type="password" />
                    </LabelInputContainer>
                    <LabelInputContainer className="nmb-4">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" onChange={handleChange} name="phone" placeholder="7300519543" type="text" />
                    </LabelInputContainer>

                    <Button disabled={isLoading} onClick={onHandleSignin} className="nw-full ncursor-pointer !ntext-primary !nbg-background ">
                        {
                            isLoading && <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />
                        }

                        Sign up &rarr;
                    </Button>
                    <p className="ntext-forground ntext-center nmt-4">Already Have A Account? <span className="ntext-brand ncursor-pointer"> <NavLink to="/login">Log IN</NavLink></span></p>

                </div>
            </div>
        </div>
    );
}

export default Signup
const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("nflex nflex-col nspace-y-2 nw-full", className)}>
            {children}
        </div>
    );
};



