import AddNewCourse from "@/Dashboard/AddNewCourse";
import AdminCourses from "@/Dashboard/AdminCourses";
import MainDashboard from "@/Dashboard/MainDashboard";
import DashboardLayouts from "@/layouts/DashboardLayouts";

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
                path: "/dashboard/admin/course/add",
                element: <AddNewCourse />
            },
            {
                path: "/dashboard/admin/my-courses",
                element: <AdminCourses />
            },
        ]
    }
]