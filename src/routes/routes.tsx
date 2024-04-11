
import { createBrowserRouter } from 'react-router-dom'
import MainLayputs from '@/layouts/MainLayputs'
import Prelims from '@/pages/Prelims'
import Quize from '@/pages/Quize'
import CourseDetails from '@/pages/CourseDetails'
import HomePage from '@/pages/HomePage'
import { userRoutes } from './userRoutes'
import { adminRoutes } from './adminRoutes'
import { publicRoutes } from './publicRoutes'
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
    ...userRoutes,
    ...adminRoutes,
    {
        path: "/prelims/start-quiz/:id",
        element: <Quize />
    },
    ...publicRoutes

])


export default routes