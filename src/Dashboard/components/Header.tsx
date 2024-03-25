import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Header = () => {

  return <div className=" nflex njustify-between nitems-center nw-full np-4 nborder-b nborder-primary">
    <h4>Welcome To Admin Dashboard</h4>
    <NavLink to="/dashboard/admin/course/add">

      <Button variant={'secondary'} >Add Course</Button>
    </NavLink>

  </div>
};

export default Header;
