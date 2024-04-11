
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Each from '@/components/shared/Each';
import { motion } from "framer-motion"
import Logo from '@/components/Logo';
import { NavLink, useLocation } from 'react-router-dom';
import ProfileMenu from '@/components/ProfileMenu';
interface ItemProp {
    name: string,
    path: string,
    icon: JSX.Element
}
interface Prop {
    open: boolean,
    handleOpen: () => void,
    items: ItemProp[],
    bottomItems: ItemProp[]

}
const Sidebar = ({ open, handleOpen, items, bottomItems }: Prop) => {
    const location = useLocation()
    const NavItem = ({ name, icon, pathname, open }: { name: string, icon: React.ReactNode, pathname: string, open: boolean }) => (
        <NavLink to={pathname}>
            <li className={`nflex  nrounded-lg  ${location.pathname === pathname ? 'nbg-secondary ntext-brand' : ''} npx-4 npy-2 ngap-4 nitems-center hover:nbg-secondary/50 ncursor-pointer transition-transform hover:nscale-105 duration-300`}>

                <span className='ntext-lg'>{icon}</span>
                {open && <span className='nwhitespace-no-wrap'>{name}</span>}
            </li>
        </NavLink>
    );
    return (
        <motion.div id='admin-side-nav' animate={{
            width: open ? "180px" : "60px",
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 8,
            },
        }} className='nbg-background nh-screen nabsolute nborder-r nborder-secondary'>
            <div className='npy-3'>
                <Logo />
            </div>
            <div className='nabsolute nright-[-10px] ntop-[40%] nz-10'>
                {
                    open ? <FaChevronCircleLeft className='ncursor-pointer ntransition-transform nduration-300 hover:nscale-110 ' onClick={handleOpen} /> : <FaChevronCircleRight className='ncursor-pointer ntransition-transform nduration-300 hover:nscale-110 ' onClick={handleOpen} />
                }
            </div>

            <div className='nh-[80%] nflex nflex-col njustify-between'>
                <ul className='nflex nflex-col ngap-2'>
                    <Each of={items} render={(item) =>
                        <NavItem name={item.name} icon={item.icon} open={open} pathname={item.path} />
                    } />

                </ul>
                <ul>
                    <Each of={bottomItems} render={(item) =>
                        <NavItem name={item.name} icon={item.icon} open={open} pathname={item.path} />
                    } />
                    <div className='nflex nitems-center'>
                        <ProfileMenu />
                        {
                            open && <span>Profile</span>
                        }

                    </div>

                </ul>
            </div>
        </motion.div>
    )
}

export default Sidebar