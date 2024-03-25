import { createBrowserRouter } from 'react-router-dom'
import MainLayputs from '@/layouts/MainLayputs'
import Prelims from '@/pages/Prelims'
import Quize from '@/pages/Quize'
import CourseDetails from '@/pages/CourseDetails'
import HomePage from '@/pages/HomePage'
import DashboardLayouts from '@/layouts/DashboardLayouts'
import MainDashboard from '@/Dashboard/MainDashboard'
import AddNewCourse from '@/Dashboard/AddNewCourse'
const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayputs />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/prelims",
                element: <Prelims />
            },
            {
                path: "/prelims/quiz-details",
                element: <CourseDetails />
            },


        ]
    },
    {
        path: "/dashboard/admin",
        element: <DashboardLayouts />,
        children: [
            {
                path: "/dashboard/admin",
                element: <MainDashboard />
            },
            {
                path: "/dashboard/admin/course/add",
                element: <AddNewCourse />
            },
        ]
    },
    {
        path: "/prelims/quize",
        element: <Quize />
    }

])


export default routes