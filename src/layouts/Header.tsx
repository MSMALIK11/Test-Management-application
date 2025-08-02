import { NavLink } from "react-router-dom";
import Each from "@/components/shared/Each";
import Login from "@/components/Login/Login";
import Notification from "@/components/Notification";
import MobileSideMenu from "@/components/MobileSideMenu/MobileSideMenu";
import ProfileMenu from "@/components/ProfileMenu";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import DarkMode from "@/components/DarkMode";
import { NavLinks } from "@/data/data";
// import { useSelector } from 'react-redux'
// import { RootState } from '@/store/store'

const Header = () => {
  // const user = useSelector((state: RootState) => state?.user?.user)

  return (
    <header
      id="header"
      className="nsticky ntop-0 nz-40 nw-full nbg-background/70 nbackdrop-blur-md nborder-b nborder-border nshadow-sm"
    >
      {/* Top Row */}
      <div className="nflex njustify-between nitems-center npx-4 sm:npx-6 lg:npx-12 npy-3">
        {/* Logo */}
        <Logo />

        {/* Right Side Actions */}
        <div className="nflex nitems-center ngap-2">
          <DarkMode />

          {/* Admin Dashboard - Hide on small screens */}
          <NavLink to="/dashboard/admin" className="nhidden md:nblock">
            <Button size="sm" variant="secondary">
              Admin Dashboard
            </Button>
          </NavLink>

          {/* Profile / Login / Notification - Hide on mobile */}
          <div className="nhidden md:nflex nitems-center ngap-2">
            <Notification />
            <ProfileMenu />
            <Login />
          </div>

          {/* Mobile Menu */}
          <MobileSideMenu />
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <nav className="nhidden md:nblock npx-4 sm:npx-6 lg:npx-12 npy-2">
        <ul className="nflex ngap-6">
          <Each
            of={NavLinks}
            render={(item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `ntext-sm nfont-medium ntransition-all duration-200 ${
                    isActive
                      ? "ntext-primary nborder-b-2 nborder-primary"
                      : "ntext-muted-foreground hover:ntext-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
