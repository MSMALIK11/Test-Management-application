import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
interface Prop {
    open: boolean,
    onClose: () => void,
}
import { useNavigate } from "react-router-dom"
import { MdOutlinePlaylistAdd, FaRegEdit } from "@/assets/Icons"
import { Input } from "@/components/ui/input"
import { useState } from "react"
const box = "nborder nbg-secondary  nrelative nh-[140px] nw-[170px] nrounded-lg np-4 nborder-primary nflex nflex-col nitems-center njustify-center"
const TestOrQuizAlert = ({ open, onClose }: Prop) => {
    const [value, setValue] = useState("series")
    const navigate = useNavigate()
    const onHandleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setValue(value)
    }
    const onNextClick = () => {
        if (value === "series") {
            navigate('/dashboard/admin/create/test-series')
        } else {
            navigate('/dashboard/admin/create/quiz')
        }
        onClose()
    }
    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle> Create Test Series or Quiz </AlertDialogTitle>
                    <AlertDialogDescription >
                        <span>You are about to create a new    |
                            |  Test Series or Quiz. Please      |
                            |  ensure all information is        |
                            |  correct before proceeding</span>
                        <div className="nflex nmt-6 nitems-center njustify-around">
                            <label htmlFor="series">

                                <div className={box}>
                                    <div className="nabsolute nright-2  ntop-1">
                                        <Input defaultChecked id="series" className="nh-10 nw-10" type="radio" value={"series"} name="testType" onChange={onHandleChecked} />

                                    </div>
                                    <MdOutlinePlaylistAdd color="white" size={48} />
                                    <span className="ntext-center nmt-2 ntext-foreground">Create Subject for test series</span>
                                </div>
                            </label>

                            <label htmlFor="quiz">
                                <div className={box}>
                                    <div className="nabsolute nright-2  ntop-1">
                                        <Input id="quiz" value={"quiz"} type="radio" name="testType" onChange={onHandleChecked} />
                                    </div>
                                    <FaRegEdit color="white" size={48} />
                                    <span className="nmt-2 ntext-center ntext-foreground">Create Quiz</span>
                                </div>
                            </label>

                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
                    <Button variant={"secondary"} onClick={onNextClick}>Next</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default TestOrQuizAlert