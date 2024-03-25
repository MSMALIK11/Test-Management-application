
import { dashboardSalesAnalysis } from '@/data/data'
import Each from '@/components/shared/Each'
const SalesAnalysis = () => {
    return (
        <div className='ngrid lg:ngrid-cols-4 sm:ngrid-cols-1  ngap-4'>
            <Each of={dashboardSalesAnalysis} render={(item) =>
                <div id='sales-card' className="nbg-secondary  np-4 nrounded-md nborder nborder-secondary">
                    <div className="nflex ngap-4  ">
                        <div className="nw-[60px] nh-[60px] nrounded-full  nflex nitems-center njustify-center">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="nflex nflex-col ngap-1">
                            <span>{item.title}</span>
                            <span>{item.value}</span>
                        </div>
                    </div>

                </div>} />

        </div>
    )
}

export default SalesAnalysis