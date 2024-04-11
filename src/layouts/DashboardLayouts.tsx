
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { motion } from 'framer-motion'
import { adminBottomRoutes, adminTopRoutes } from "@/data/data"
import Sidebar from "@/components/SideBar"
const DashboardLayouts = () => {
    const [open, setOpen] = useState(true)
    const handleOpen = () => {
        setOpen(!open)
    }



    return (
        <div className="nflex nw-full ">
            <div className="nmax-w-[180px]">
                <Sidebar items={adminTopRoutes} bottomItems={adminBottomRoutes} open={open} handleOpen={handleOpen} />
            </div>

            <motion.div className="nflex-1" animate={{
                marginLeft: open ? "180px" : "60px",
                transition: {
                    duration: 0.5,
                    type: "spring",
                    damping: 8,
                },
            }}>
                <div>
                    <Outlet />
                </div>
            </motion.div>
        </div>
    )
}

export default DashboardLayouts