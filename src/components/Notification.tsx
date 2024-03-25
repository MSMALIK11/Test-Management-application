
import * as React from "react"
import { CiBellOn } from '@/components/Icons/Icons'
import { Button } from "@/components/ui/button"
import { profileImg } from "@/assets/assets"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Notification = () => {
    const [position, setPosition] = React.useState("bottom")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div id="notification" className="nrelative">
                    <span>9+</span>
                    <Button variant="link"  ><CiBellOn size={20} /></Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" >
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">
                        <div className="nmax-w-[340px] nflex ngap-4">
                            <img className="nrounded-full nw-[60px] nh-[60px]" src={profileImg} alt="" />
                            <div>
                                Lorem ipsum dolor sit aet consectetur adipisicing elit. Excepturi eius nam esse mollitia, enim quis nisi rerum optio labore ut!
                            </div>
                        </div>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="top">
                        <div className="nmax-w-[340px] nflex ngap-4">
                            <img className="nrounded-full nw-[60px] nh-[60px]" src={profileImg} alt="" />
                            <div>
                                Lorem ipsum dolor sit aet consectetur adipisicing elit. Excepturi eius nam esse mollitia, enim quis nisi rerum optio labore ut!
                            </div>
                        </div>
                    </DropdownMenuRadioItem>

                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}


export default Notification
