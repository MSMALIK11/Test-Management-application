

import BottomNavigaion from '@/components/MobileSideMenu/BottomNavigaion'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import api from '@/services'
import { setCurrentUser } from '@/store/features/userSlice'
const MainLayputs = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: api.user.getUserProfile,
        refetchOnWindowFocus: true
    })
    useEffect(() => {
        if (!isLoading && data) {
            dispatch(setCurrentUser(data.data.userData));
        }
    }, [data, isLoading, dispatch]);
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