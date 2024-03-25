import * as React from "react"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,

} from "@/components/ui/drawer"
import { IoMdClose } from "react-icons/io";
interface QuizMenuProp {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode
}
const QuizMobileMenu = ({ open, onClose, children }: QuizMenuProp) => {
    // const isMobile = useMediaQuery("(max-width:667px)")
    console.log('ope n', open)
    // if (isMobile) {
    return (
        <Drawer open={open} direction="bottom">
            {/* <DrawerTrigger asChild onClick={() => handleOpen()}>
                <CiMenuFries className="ncursor-pointer nw-[36px] nh-[36px]  nrounded-md np-2 hover:nbg-secondary" />

            </DrawerTrigger> */}
            <DrawerContent>
                <DrawerHeader className="text-left nrelation">
                    {/* <DrawerTitle>Edit profile</DrawerTitle> */}
                    <div onClick={() => onClose()} className='nabsolute nright-[15px] ncursor-pointer hove:nbg-btnHover  nw-[26px] nh-[26px] nrounded-full nflex nitems-center njustify-center  nbg-secondary  nshadow-lg' >
                        <IoMdClose className="hover:ntext-rose-500 " />
                    </div>
                    <DrawerDescription className="nmt-6">
                        {children}
                    </DrawerDescription>
                </DrawerHeader>


            </DrawerContent>
        </Drawer>
    )
    // }
}



export default QuizMobileMenu

