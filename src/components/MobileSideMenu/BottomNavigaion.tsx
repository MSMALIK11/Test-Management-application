import { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
const BottomNavigaion = () => {
    const [active, setActive] = useState(0)
    const Menus = [
        {
            name: 'Home',
            icon: <IoHomeOutline size={28} />,
            dis: 'ntranslate-x-0'
        },
        {
            name: 'Leaderboard',
            icon: <MdOutlineLeaderboard size={28} />,
            dis: 'ntranslate-x-20'
        },
        {
            name: 'Community',
            icon: <TiMessage size={28} />,
            dis: 'ntranslate-x-40'
        },
        {
            name: 'Profile',
            icon: <IoPersonCircleOutline size={28} />,
            dis: 'ntranslate-x-60'
        },
        // {
        //     name: 'Settings',
        //     icon: <CiSettings size={28} />,
        //     dis: 'ntranslate-x-80'
        // },

    ]



    return (
        <div className="nbg-secondary  nmax-h-[4.4rem] npx-6 nrounded-t-3xl nshadow-lg">
            <ul className="ninline-flex nrelative ngap-4 overflow-x-auto ">
                <span
                    className={`nbg-secondary nz-50 nduration-500 ${Menus[active].dis} nborder-2 nborder-primary nh-16 nw-16 nabsolute
             ntop-[-20px] nrounded-full`}
                >
                    <span
                        className="nw-3.5 nh-3.5 nbg-transparent nabsolute ntop-4 nleft-[-18px] 
            nrounded-tr-[11px] nshadow-lg  "
                    ></span>
                    <span
                        className="nw-3.5 nh-3.5 nbg-transparent nabsolute ntop-4 nright-[-18px] 
            nrounded-tl-[-11px] nshadow"
                    ></span>
                </span>
                {Menus.map((menu, i) => (
                    <li key={i} className="nw-16">
                        <a
                            className="nflex nflex-col ntext-center nitems-center njustify-between npt-6"
                            onClick={() => setActive(i)}
                        >
                            <span
                                className={`ntext-xl ncursor-pointer nduration-500 ${i === active && "nmt-[-24px] ntext-white nz-50 "
                                    }`}
                            >
                                {menu.icon}
                            </span>
                            <span
                                className={` ${active === i
                                    ? "ntranslate-y-4 nduration-700 nopacity-100"
                                    : "nopacity-0 ntranslate-y-10"
                                    } `}
                            >
                                {menu.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default BottomNavigaion