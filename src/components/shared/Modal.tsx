import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
} from "@/components/ui/dialog"

interface ModalProp {
    children: React.ReactNode,
    isVisible: boolean,
    onClose: () => void,
    onClick: () => void
}
const Modal = ({ onClick, isVisible, onClose, children }: ModalProp) => {
    return (
        <Dialog open={isVisible} onOpenChange={onClose}>
            {/* <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger> */}
            <DialogContent>
                {/* <DialogHeader>
                    <DialogTitle>Preview </DialogTitle>

                </DialogHeader> */}
                <div>
                    {children}
                </div>
                <DialogFooter>
                    <Button variant={'secondary'} onClick={onClick}>Ok</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Modal