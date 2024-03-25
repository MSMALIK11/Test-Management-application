import Header from './components/Header'
import SalesAnalysis from "./components/SalesAnalysis"
const MainDashboard = () => {
    return (
        <div className="nw-full ">
            <Header />
            <div className='np-4'>
                <SalesAnalysis />
            </div>


        </div>
    )
}

export default MainDashboard