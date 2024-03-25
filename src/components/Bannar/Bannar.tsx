
import { Label } from '../ui/label'
const Bannar = () => {
    return (
        <div id='home-bannar' className='ngrid  nitems-center njustify-center   lg:nh-[80vh] md:nh-[40vh] sm:h-[20vh] nh-auto noverflow-y-hidden lg:npx-14 nw-full ntext-center'>
            <div className=' '>
                <h4 className='lg:ntext-6xl md:ntext-3xl ntext-4xl sm:ntext-lg nfont-bold'>Challenge Yourself, <br /> Expand Your <span className='lg:ntext-6xl md:ntext-3xl sm:ntext-lg ntext-blue-500'>Knowledge!</span></h4>
                <Label className='ntext-muted nmt-2 '>Get your answers evaluated by Interview-Appeared faculty</Label>
            </div>
            {/* <div className='bannar-image sm:order-1 norder-2 nflex nitems-start nrelative  '>

                <img src={BannarImage} alt="" className='nobject-cove nh-full  lg:nmt-8 ' />
            </div> */}
        </div>
    )
}
export default Bannar