
import { Button } from "@/components/ui/button"
import { profileImg } from "@/assets/assets"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"

const ProfileMenu = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div id="notification" className="nrelative">
                    <Button variant="link"  >
                        <img className="nw-[26px] nh-[26px] nrounded-full nborder-1 nborder-secondary transition-transform duration-300 active:nscale-95" src={profileImg} />
                    </Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" >
                <DropdownMenuItem className="nw-[360px]">
                    <div className="nflex ngap-4">
                        <img className="nrounded-full nw-[60px] nh-[60px]" src={profileImg} alt="" />
                        <div>
                            <p>MR JOHN</p>
                            <p>mr.john@gmail.com</p>
                        </div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="nw-[360px]">
                    {/* <div className="nflex ngap-4">
                        <p>Profile</p>
                    </div> */}
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu >
    )
}


export default ProfileMenu
