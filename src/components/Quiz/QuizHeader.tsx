import { memo, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Logo from '../Logo'

const QuizHeader = () => {
    const [hours, setHours] = useState(1)
    const [minutes, setMinutes] = useState(20)
    const [seconds, setSeconds] = useState(0)
    const onClickFullScreen = (): void => {
        if (!document.fullscreenElement) {
            void document.documentElement.requestFullscreen()
        } else if (document.exitFullscreen) {
            void document.exitFullscreen()
        }
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    if (minutes === 0 && hours === 0) {
                        clearInterval(timer);
                        return 0;
                    } else {
                        setMinutes((prevMinutes) => {
                            if (prevMinutes === 0 && hours > 0) {
                                setHours((prevHours) => prevHours - 1);
                                return 59;
                            } else if (prevMinutes === 0 && hours === 0) {
                                return 0;
                            } else {
                                return prevMinutes - 1;
                            }
                        });
                        return 59;
                    }
                } else {
                    return prevSeconds - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [hours, minutes, seconds]);
    return (
        <div id='header' className='shadow-sm npy-2 npx-12  nbg-background nborder-b nborder-b-secondary nshadow-lg nsticky nbox-border ntop-0 nz-40 nw-full'>
            <div className='nflex  njustify-between nitems-center'>
                <div className=' ngap-4 nflex njustify-between  nitems-center'>
                    <Logo />
                </div>
                <div className='nflex njustify-between nitems-center ngap-4  nw-[50%]'>
                    <div className='nflex njustify-between nitems-center ngap-3 timeLeft'>
                        <span>Time Left</span>
                        <span className="ninline-flex nw-[25px] nh-[25px]  nitems-center njustify-center ntext-xs ntext-forground nbg-secondary nrounded-md ">
                            {hours.toString().padStart(2, '0')}
                        </span>
                        <span>:</span>
                        <span className="ninline-flex nw-[25px] nh-[25px]  nitems-center njustify-center ntext-xs ntext-forground nbg-secondary nrounded-md ">
                            {minutes.toString().padStart(2, '0')}
                        </span>
                        <span>:</span>
                        <span className="ninline-flex nw-[25px] nh-[25px]  nitems-center njustify-center ntext-xs ntext-forground nbg-secondary nrounded-md ">
                            {seconds.toString().padStart(2, '0')}
                        </span>
                    </div>
                    <div className='nflex njustify-between nitems-center ngap-4'>
                        <Button variant="outline" className="ntextr-muted ntext-sm" onClick={onClickFullScreen}>Switch To Full Screen</Button>
                        <Button variant="outline" className="ntextr-muted ntext-sm">Pause</Button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default memo(QuizHeader) 