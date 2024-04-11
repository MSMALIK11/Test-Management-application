import { Button } from '@/components/ui/button'


const AD = () => {
    return (
        <div className='nflex nrounded-lg njustify-between nborder-secondary nborder np-4'>
            <div>
                <h1>Knowledge Plus <span className='nbg-brand npx-3 nrounded-full npy-0.5'>Pro</span></h1>
                <span>Get 14 days of free Pro
                    experience
                </span>
            </div>

            <div></div>
            <Button variant={'secondary'}>Start Today</Button>
        </div>
    )
}

export default AD