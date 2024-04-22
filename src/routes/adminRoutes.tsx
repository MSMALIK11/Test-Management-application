import AddNewCourse from "@/Dashboard/AddNewCourse";
import AdminCourses from "@/Dashboard/AdminCourses";
import MainDashboard from "@/Dashboard/MainDashboard";
import DashboardLayouts from "@/layouts/DashboardLayouts";
import AddTopic from "@/pages/DashboardPages/AddTopic";
import TestSeries from "@/pages/TestSeries";
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
                path: "/dashboard/admin/my-courses",
                element: <AdminCourses />
            },
        ]
    }
]