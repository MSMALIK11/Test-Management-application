
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { motion } from 'framer-motion'
import { userBottomRoutes, userTopRoutes } from "@/data/data"
import Sidebar from "@/components/SideBar"
import UserHeader from "@/UserDashboard/UserHeader"
const UserDashboardLayouts = () => {
    const [open, setOpen] = useState(true)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="nflex nw-full ">


            <div className="nmax-w-[200px]">
                <Sidebar items={userTopRoutes} bottomItems={userBottomRoutes} open={open} handleOpen={handleOpen} />

            </div>

            <motion.div className="nflex-1" animate={{
                marginLeft: open ? "200px" : "60px",
                transition: {
                    duration: 0.5,
                    type: "spring",
                    damping: 8,
                },
            }}>
                <div>
                    <motion.div animate={{

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 8,
                        },
                    }}>
                        <UserHeader />

                    </motion.div>
                    <div className="npx-8 npy-4">

                        <Outlet />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default UserDashboardLayouts