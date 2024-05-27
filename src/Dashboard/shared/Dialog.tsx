
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface Prop {
    message?: string;
    title?: string;
    submitBtnText?: string;
    open: boolean;
    onClose?: () => void;
    handleOnsubmit?: () => void;
    isLoading?: boolean;
    children: React.ReactNode;
}

const Dialog = ({
    open,
    onClose,
    title,
    submitBtnText,
    isLoading,
    handleOnsubmit,
    children
}: Prop) => {
    return (
        <AlertDialog open={open} >
            <AlertDialogContent  >
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {title ? title : "Confirmation"}
                    </AlertDialogTitle>
                </AlertDialogHeader>

                <div className="!nw-auto nmax-h-fit">
                    {children}
                </div>
                <AlertDialogFooter>
                    <Button variant={"ghost"} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        variant={"secondary"}
                        className="!nbg-rose-400  hover:!nbg-rose-500 !ntext-primary"
                        onClick={handleOnsubmit}
                    >
                        {isLoading ? (
                            <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />
                        ) : (
                            submitBtnText
                        )}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Dialog;

