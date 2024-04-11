import { Input } from '@/components/ui/input'
import { IoChatbubbleEllipsesOutline, IoNotificationsOutline } from '@/assets/Icons'
import { Button } from '@/components/ui/button'

const UserHeader = () => {
    return (
        <div className='nbg-secondary nh-[40px] nitems-center nflex njustify-between npx-4'>
            <h1>Dashboard</h1>
            <div className='nhidden lg:nblock'>
                <Input placeholder='Search soemthign here' type='search' className='nrounded-full nw-[400px]' />
            </div>
            <div className='nflex'>
                <Button variant={"link"}><IoChatbubbleEllipsesOutline size={22} /></Button>
                <Button variant={"link"}><IoNotificationsOutline size={22} /></Button>

            </div>
        </div>
    )
}

export default UserHeader