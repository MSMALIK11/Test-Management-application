import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { googleIcon } from "@/assets/assets"
import { Input } from "../ui/input"
import { IoMdLogIn } from "react-icons/io";
const Login = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger><IoMdLogIn size={20} className="ntext-[20px] ncursor-pointer " /></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription >
                            <div className="nw-[70%] nmx-auto npy-4">
                                <h3 className="ntext-lg ntext-gray-700 nfont-bold ntext-left nmy-6">Login With </h3>
                                <div className="nflex nitems-center nh-[48px] ngap-4 nborder-2 npx-4 npy-2 nrounded-lg nborder-blue-400 hover:nbg-gray-200 ntext-brand ncursor-pointer transitiion transition-color">
                                    <img src={googleIcon} alt="" />
                                    <h4 className="ntextr-muted ntext-sm">Continue with google</h4>
                                </div>
                                <div className="crossLine"></div>
                                <div className="nflex nflex-col ntext-left ngap-1.5 nmt-4 ">
                                    <Input className="nh-[48px]" type="email" id="email" placeholder="Email" />
                                </div>
                                <Button className="nw-full nmt-6">
                                    Send OTP to mail
                                </Button>

                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent >
            </Dialog >
        </div >
    )
}

export default Login