
import Each from '@/components/shared/Each'
import { NavLink } from 'react-router-dom'
import Login from '@/components/Login/Login'
import { NavLinks } from '@/data/data'
import Notification from '@/components/Notification'
import MobileSideMenu from '@/components/MobileSideMenu/MobileSideMenu'
import ProfileMenu from '@/components/ProfileMenu'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import DarkMode from '@/components/DarkMode'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
const Header = () => {
    const user = useSelector((state: RootState) => state.user.user)

    return (
        <div id='header' className='shadow-sm nbg-darkPrimary nborder-b nborder-b-secondary  nshadow-lg nsticky nbox-border ntop-0 nz-40 nw-full'>
            <div className='npy-2 lg:npx-12 nflex njustify-between  nitems-center'>
                <Logo />
                <div className='nflex ngap-2 nitems-center'>
                    <DarkMode />
                    <NavLink id='hide-sm' to="/dashboard/admin">
                        <Button size={'sm'} variant="secondary">Admin Dashboard</Button>
                    </NavLink>
                    <div id='hide-sm' className='hide-elem nflex nitems-center'>
                        <Notification />
                        <ProfileMenu />
                        <Login />
                    </div>
                    <MobileSideMenu />
                </div>
            </div>
            {/* Desktop Navigation
             */}
            <nav className='npx-12 nhidden lg:nblock md:nblock'>
                <ul className='nflex ngap-4 np-2'>
                    <Each of={NavLinks} render={(item) => <NavLink key={item.name} to={item.path} className='ncursor-pointer  ntext-white ntext-xs hover:ntext-brand nborder-b-2  nborder-transparent'>{item.name}</NavLink>} />
                </ul>
            </nav>



        </div>
    )
}

export default Header