import { Loader2 } from 'lucide-react'
const Loading = ({ isLoading }: { isLoading: boolean }) => {


    return (
        <>
            {isLoading && (
                <div className='nw-full nh-screen'>
                    <div className="nfixed ntop-0 nleft-0 nright-0 nbottom-0 nbg-gray-800 nbg-opacity-50 nflex nitems-center njustify-center ntext-white">
                        <Loader2 className="nmr-2 nh-4 nw-4 nanimate-spin" />
                        <span>Loading...</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Loading