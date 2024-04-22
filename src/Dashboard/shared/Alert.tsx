import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
interface Prop {
    message?: string,
    title?: string
    createBtnText?: string,
    confirmBtnText?: string,
    open: boolean,
    isCreateBtnVisible?: boolean,
    isConfirmBtnVisible?: boolean,
    onClose?: () => void,
    onCreateClick?: () => void,
    onConfirm?: () => void,
}
const Alert = ({ open, onClose, onCreateClick, title, onConfirm, isConfirmBtnVisible, confirmBtnText, createBtnText, isCreateBtnVisible, message }: Prop) => {
    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle> {title ? title : 'Confiramtion'} </AlertDialogTitle>
                    <AlertDialogDescription className="nh-12" >
                        {
                            message && <span className="ntext-primary"> {message}</span>
                        }

                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button variant={"ghost"} onClick={onClose}>Cancel</Button>
                    {
                        isCreateBtnVisible && <Button variant={"secondary"} onClick={onCreateClick}>{createBtnText} </Button>
                    }

                    {
                        isConfirmBtnVisible && <Button variant={"secondary"} onClick={onConfirm}> {confirmBtnText}</Button>
                    }

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Alert