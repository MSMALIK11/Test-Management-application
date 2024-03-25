

import BottomNavigaion from '@/components/MobileSideMenu/BottomNavigaion'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainLayputs = () => {
    return (
        <div>
            <Header />

            <Outlet />
            <div id='bottom-navigation' className='nfixed  nbottom-0 nw-full'>
                <BottomNavigaion />
            </div>
        </div >
    )
}

export default MainLayputs