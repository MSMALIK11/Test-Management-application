import Singup from '@/pages/Signup'
import { lazy } from 'react';
const Login = lazy(() => import("@/pages/Login"));
export const publicRoutes = [
    {
        path: "/register",
        element: <Singup />
    },
    {
        path: "/login",
        element: <Login />
    }
]