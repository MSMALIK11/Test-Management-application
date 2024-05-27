import { Loader2 } from 'lucide-react'
const Loading = ({ isLoading }: { isLoading: boolean }) => {


    return (
        <>
            {isLoading && (
                <div id='loading' className='nw-full nh-screen nflex-1 '>
                    <div className=" nh-screen nbg-opacity-50 nflex nitems-center njustify-center ntext-white">
                        <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />
                        <span>Loading...</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Loading