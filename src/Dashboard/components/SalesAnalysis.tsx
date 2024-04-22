
import Each from '@/components/shared/Each'
import { useQuery } from '@tanstack/react-query'
import {
    totlaCourseIcon,
    totalSalesIcon,
    totalEnrollIcon,
    totalStudentIcon,
} from "@/assets/assets";
import api from '@/services'
import Loading from '@/components/shared/Loading'
const SalesAnalysis = () => {
    const { data, isLoading } = useQuery({ queryKey: ['getAnalysis'], queryFn: api.admin.getAnalysis })
    const dataAnalysis = data?.data
    const analysis = dataAnalysis && dataAnalysis.analysis
    if (isLoading) {
        return <Loading isLoading={true} />
    }
    // Change it to dynamic imports
    const GetImage = ({ urlKey }: { urlKey: string }) => {
        let imgSrc = '';
        // Set the image source based on the urlKey
        if (urlKey === 'totalstudent') {
            imgSrc = totalStudentIcon;
        } else if (urlKey === 'totalcourse') {
            imgSrc = totlaCourseIcon;
        }
        else if (urlKey === 'totalsales') {
            imgSrc = totalSalesIcon;
        } else {
            imgSrc = totalEnrollIcon
        }

        return <img src={imgSrc} alt={urlKey} />;
    }
    return (
        <div className='ngrid lg:ngrid-cols-4 sm:ngrid-cols-1  ngap-4'>
            <Each of={analysis} render={(item) =>
                <div id='sales-card' className="nbg-secondary  np-4 nrounded-md nborder nborder-secondary">
                    <div className="nflex ngap-4  ">
                        <div className="nw-[60px] nh-[60px] nrounded-full  nflex nitems-center njustify-center">
                            <GetImage urlKey={item?.label} />
                        </div>
                        <div className="nflex nflex-col ngap-1">
                            <span>{item?.label}</span>
                            <span>{item?.value}</span>
                        </div>
                    </div>

                </div>} />

        </div >
    )
}

export default SalesAnalysis


// const SalesAnalysis = () => {
//     return (
//         <div>SalesAnalysis</div>
//     )
// }

// export default SalesAnalysis