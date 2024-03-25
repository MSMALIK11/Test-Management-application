
import PrelimsTabs from "@/components/Prelims/PrelimsTabs"
const Prelims = () => {
    return (
        <div id="prelims-container" className="nmt-4  lg:npx-12 sm:px-2">
            <h1 className='ntext-forground ntext-3xl  sm:ntext-center'>Prelims Modules</h1>
            <div id="tab-container" className=' nmt-6 ngap-6  '>
                <PrelimsTabs />
            </div>
        </div>
    )
}

export default Prelims