// import { useQuery } from '@tanstack/react-query'
import CourseViewList from './components/CourseViewList'
import DataTable from './components/UsersViewList'
import Header from './components/Header'
import SalesAnalysis from "./components/SalesAnalysis"
// import api from '@/services'
const MainDashboard = () => {

    return (
        <div className="nw-full">
            <Header />
            <div className='np-4'>
                <SalesAnalysis />
            </div>
            {/* <BarChart /> */}
            <div className='np-4 ngrid lg:ngrid-cols-2 ngap-4'>
                <CourseViewList />
                <DataTable />
            </div>


        </div>
    )
}

export default MainDashboard