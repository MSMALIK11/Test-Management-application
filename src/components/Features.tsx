
import { FeaturesList } from '@/data/data'
import Each from './shared/Each'
import { Card } from './ui/card'
const Features = () => {
    return (
        <div className='nflex nitems-center nw-full nh-[200px]'>

            <div id="feature-card" className='nmt-12  nw-[70%] npy-8 nflex  nrounded-3xl npx-6  np-4 nshadow-lg  nmx-auto nitems-center ngap-4 njustify-between '>
                <Each of={FeaturesList} render={(item) =>
                    <Card key={item.name} className='nflex sm:nflex-wrap nrelative nflex-col  nitems-center njustify-center nspace-y-4 hover:nscale-110 nduration-300'>
                        <div className='nw-[46px] nh-[46px] flex-center nbg-gray-100 nrounded-full nshadow-lg '>
                            {item.icon}
                        </div>
                        {
                            item?.label && <div className='nabsolute ntop-[-30px] nright-[15px] nbg-green-400 npx-2 nrounded-lg ntext-white ntext-sm'>new</div>
                        }

                        <p className='nflex nitems-center ngap-2 ntxt-info ntext-sm'> {item.isLive && <span className='islive'></span>} {item.name}</p>
                    </Card>} />
            </div>
        </div>
    )
}

export default Features