import AddNewCourse from "@/Dashboard/AddNewCourse";
import QuizManagement from "@/Dashboard/QuizManagement";
import MainDashboard from "@/Dashboard/MainDashboard";
import DashboardLayouts from "@/layouts/DashboardLayouts";
import AddTopic from "@/pages/DashboardPages/AddTopic";
import TestSeries from "@/pages/TestSeries";
import TestSeriesManagement from "@/Dashboard/TestManagement";
import ViewSubject from "@/pages/DashboardPages/ViewSubject";
import {Mains} from '@/pages/DashboardPages'
export const adminRoutes = [
    {
        path: "/dashboard/admin",
        element: <DashboardLayouts />,
        children: [
            {
                path: "/dashboard/admin",
                element: <MainDashboard />
            },
            {
                path: "/dashboard/admin/create/test-series",
                element: <TestSeries />
            },
            {
                path: "/dashboard/admin/:subjectId/add-topic",
                element: <AddTopic />
            },
            {
                path: "/dashboard/admin/create/quiz",
                element: <AddNewCourse />
            },
            {
                path: "/dashboard/admin/subject/:id/view",
                element: <ViewSubject />
            },
            {
                path: "/dashboard/admin/mains",
                element: <Mains />
            },
            {
                path: "/dashboard/admin/quiz-management",
                element: <QuizManagement />
            },
            {
                path: "/dashboard/admin/test-management",
                element: <TestSeriesManagement />
            },
        ]
    }
]