
import { Button } from "@/components/ui/button"
import { profileImg } from "@/assets/assets"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger, DropdownMenuItem, DropdownMenuGroup

} from "@/components/ui/dropdown-menu"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { IoMdLogOut } from "react-icons/io"
import { Settings } from "lucide-react"
import { AiOutlineDashboard } from '@/assets/Icons'
import api from '@/services'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
const ProfileMenu = () => {
    const user = useSelector((state: RootState) => state?.user?.user)
    const navigate = useNavigate()
    const onLogoutClick = async () => {
        try {
            const res = await api.user.logout()
            if (res.status === 200) {
                navigate('/login')
                console.log('logout', res)
                toast.success(res.data.message)
            }
        } catch (error) {
            console.error('Error::while calling logout api')
        }
    }

    const handleItemClick = (text: string) => {
        switch (text) {
            case "Logout":
                onLogoutClick();
                break;
            case "Dashboard":
                navigate('/profile')
        }
        console.log(`Clicked on: ${text}`);
        // Perform actions based on the clicked item
    };

    const ProfileMenuItem = ({ icon, text }: { icon: React.ReactElement, text: string }) => (
        <DropdownMenuItem className="nflex ngap-2 ntext-xl ncursor-pointer" onClick={() => handleItemClick(text)}>
            {icon}
            <span>{text}</span>
        </DropdownMenuItem>
    );

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div id="notification" className="nrelative">
                    <Button variant="link"  >
                        <img className="nw-[26px] nh-[26px] nrounded-full nborder-1 nborder-secondary transition-transform duration-300 active:nscale-95" src={profileImg} />
                    </Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" >
                <DropdownMenuGroup>
                    <DropdownMenuItem className="nw-[360px]">
                        <div className="nflex ngap-4 nitems-center">
                            <img className="nrounded-full nw-[40px] nh-[40px]" src={profileImg} alt="" />
                            <div className="">
                                <p className="ntext-bold  nleading-tight ntext-xl ntext-capitalize">{user?.name} 👋</p>
                                <p className="ntext-muted-foreground"> {user?.email}</p>
                            </div>
                        </div>
                    </DropdownMenuItem>
                    <ProfileMenuItem icon={<AiOutlineDashboard />} text="Dashboard" />
                    <ProfileMenuItem icon={<Settings />} text="Settings" />
                    <ProfileMenuItem icon={<IoMdLogOut />} text="Logout" />
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu >
    )
}


export default ProfileMenu
