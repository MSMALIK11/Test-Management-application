import Profile from './Profile'
import AD from './AD'
import MyCourses from './MyCourses'


const Home = () => {
    return (
        <div className='nflex np-4'>
            <div className='nflex ngap-2 nw-full'>
                <div className=''>
                    <Profile />
                </div>
                <div className='nflex-1 '>
                    <AD />
                    <MyCourses />

                </div>
            </div>

        </div>
    )
}

export default Home