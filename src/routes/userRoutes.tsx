import Home from "@/UserDashboard/Home";
import MyCourses from "@/UserDashboard/MyCourses";
import Settings from "@/UserDashboard/Settings";
import Wallet from "@/UserDashboard/Wallet";
import UserDashboardLayouts from "@/layouts/UserDashboardlayout";
import UserMains from "@/UserDashboard/pages/UserMains";
export const userRoutes = [
    {
        path: '/profile',
        element: <UserDashboardLayouts />,
        children: [
            {
                path: '/profile',
                element: <Home />
            },
            {
                path: '/profile/my-courses',
                element: <MyCourses />
            },
            {
                path: '/profile/mains',
                element: <UserMains />
            },
            {
                path: '/profile/my-wallet',
                element: <Wallet />
            },
            {
                path: '/profile/settings',
                element: <Settings />
            }
        ]
    }
]