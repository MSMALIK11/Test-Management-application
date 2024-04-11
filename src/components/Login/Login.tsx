
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Login = () => {
    const user = useSelector((state: RootState) => state.user.user)
    return (
        <div>
            {
                user?.name ? <span>{user.name}</span> : <NavLink to="/login" >Login</NavLink>
            }

        </div>
    )
}

export default Login