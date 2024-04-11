import { useQuery } from '@tanstack/react-query'
import DataTable from './components/DataTable'
import Header from './components/Header'
import SalesAnalysis from "./components/SalesAnalysis"
import api from '@/services'
const MainDashboard = () => {
    const { data, isLoading } = useQuery({ queryKey: ['getAllUsers'], queryFn: api.admin.getAllUsers })

    return (
        <div className="nw-full">
            <Header />
            <div className='np-4'>
                <SalesAnalysis />
            </div>
            <div className='np-4 nw-[50%]'>
                <DataTable isLoading={isLoading} key="users-table" data={data?.data.users} />
            </div>


        </div>
    )
}

export default MainDashboard