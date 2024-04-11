import { profileImg, indianFlag } from "@/assets/assets";
import { IoCamera, CiInstagram, CiLinkedin, FaStar, FaRegEdit } from "@/assets/Icons";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
const Profile = () => {
    const user = useSelector((state: RootState) => state.user.user)
    return (
        <div className="nbg-secondary nw-[280px] np-4">
            <h2>My Profile</h2>
            <div className="nflex nflex-col nrelative nitems-center njustify-center">
                <img className="nrounded-full" src={profileImg} alt="" />
                <span className="ntext-lg text-uppercase nfont-bold">{user?.name || 'Default'} <Button disabled variant={"link"}><FaRegEdit title="Edit" size={18} color="white" /></Button></span>
                <span className="ntext-[10px] ntext-muted-foreground">{user?.email}</span>
                <div className="nflex ngap-2 nitems-center nmt-3">
                    <FaStar color="orange" />
                    <span className="ntext-xs">{user?.xp || 0} XP</span>
                </div>
                <div className="nflex ngap-2 nmt-3">
                    <img src={indianFlag} width={20} />
                    <span>India</span>
                    <span>·</span>
                    <span>Level {user?.level || 0}</span>
                </div>
                <div
                    className=" nabsolute nright-16 ntop-12 nw-[30px] nh-[30px] nrounded-lg nflex nitems-center njustify-center nbg-[#000000b3]"
                >
                    <IoCamera />
                </div>

            </div>

            <ul className="nmt-3 nflex njustify-center  ntext-3xl ngap-2">
                <li className="hover:nbg-rose-700 nrounded-sm ntransition-color ncursor-pointer hover:nscale-105  nduration-300"><CiInstagram /></li>
                <li className="hover:nbg-brand nrounded-sm ntransition-color ncursor-pointer nduration-300 hover:nscale-105"> <CiLinkedin /></li>
            </ul>

        </div>
    );
};

export default Profile;
