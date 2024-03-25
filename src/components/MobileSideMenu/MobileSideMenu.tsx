import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { IoMdClose } from "react-icons/io";
import { NavLinks } from "@/data/data"
import Each from "../shared/Each"
import { NavLink } from "react-router-dom"
import { CiMenuFries } from "react-icons/ci";

const MobileSideMenu = () => {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width:768px)")
    const handleOpen = () => {
        setOpen(!open)
    }
    if (!isDesktop) {
        return (
            <Drawer open={open} onOpenChange={setOpen} direction="right">
                <DrawerTrigger asChild onClick={handleOpen}>
                    <CiMenuFries size={32} className="ncursor-pointer ntext-primary  nrounded-md nmr-4" />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="text-left nrelation">
                        {/* <DrawerTitle>Edit profile</DrawerTitle> */}
                        <div onClick={handleOpen} className='nabsolute nright-[15px] ncursor-pointer hove:nbg-btnHover  nw-[26px] nh-[26px] nrounded-full nflex nitems-center njustify-center  nbg-secondary  nshadow-lg' >
                            <IoMdClose className="hover:ntext-rose-500 " />
                        </div>
                        <DrawerDescription className="nmt-6">

                            <ul className='nflex nflex-col ntext-left ngap-4 np-2'>
                                <Each of={NavLinks} render={(item) => <NavLink onClick={handleOpen} key={item.name} to={item.path} className='ncursor-pointer ntext-primary nborder-b np-2 ntransform ntransition-transform nduration-300 hover:ntext-primary hover:nscale-110 hover:nbg-secondary '>{item.name}</NavLink>} />
                            </ul>

                        </DrawerDescription>
                    </DrawerHeader>


                </DrawerContent>
            </Drawer>
        )
    }
}



export default MobileSideMenu

