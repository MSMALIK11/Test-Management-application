import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
interface Prop {
    message?: string;
    title?: string;
    createBtnText?: string;
    confirmBtnText?: string;
    open: boolean;
    isCreateBtnVisible?: boolean;
    isConfirmBtnVisible?: boolean;
    onClose?: () => void;
    onCreateClick?: () => void;
    onConfirm?: () => void;
    isLoading?: boolean;
}

const Alert = ({
    open,
    onClose,
    onCreateClick,
    title,
    onConfirm,
    isConfirmBtnVisible,
    confirmBtnText,
    createBtnText,
    isCreateBtnVisible,
    message,
    isLoading,
}: Prop) => {
    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {" "}
                        {title ? title : "Confirmation"}{" "}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="nh-12">
                        {message && <span className="ntext-primary"> {message}</span>}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button variant={"ghost"} onClick={onClose}>
                        Cancel
                    </Button>

                    {isCreateBtnVisible && (
                        <Button
                            variant={"secondary"}
                            className="!nbg-rose-400 hover:nbg-rose-500 !ntext-primary"
                            onClick={onCreateClick}
                        >
                            {isLoading ? (
                                <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />
                            ) : (
                                createBtnText
                            )}
                        </Button>
                    )}

                    {isConfirmBtnVisible && (
                        <Button
                            variant={"secondary"}
                            className="!nbg-rose-400  hover:!nbg-rose-500 !ntext-primary"
                            onClick={onConfirm}
                        >
                            {isLoading ? (
                                <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />
                            ) : (
                                confirmBtnText
                            )}
                        </Button>
                    )}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Alert;
