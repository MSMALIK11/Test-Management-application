import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
// import DarkMode from "@/components/DarkMode";
const Header = () => {

  return <div className=" nflex njustify-between nitems-center nw-full np-4 nborder-b nborder-secondary">
    <h4>Welcome To Admin Dashboard</h4>
    <div className="nflex nitems-center">
      {/* <DarkMode /> */}

      <NavLink to="/dashboard/admin/course/add">
        <Button variant={'secondary'} >Add Course</Button>
      </NavLink>
    </div>

  </div>
};

export default Header;
