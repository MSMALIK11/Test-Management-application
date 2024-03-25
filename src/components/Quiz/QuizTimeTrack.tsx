import { useEffect, useState } from 'react'

const QuizTimeTrack = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    // for time per question
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
            if (seconds === 59) {
                setMinutes((prevMinutes) => prevMinutes + 1);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [seconds]);
    return (
        <div className="nflex nitems-center ngap-2 ">
            <h4>Time</h4>
            <span className="ninline-flex nw-[25px] nh-[25px]  nitems-center njustify-center ntext-xs ntext-forground nbg-secondary nrounded-md ">
                {minutes.toString().padStart(2, "0")}
            </span>
            <span className="ninline-flex nw-[25px] nh-[25px]  nitems-center njustify-center nbg-secondary ntext-xs ntext-foreground nrounded-md ">
                {seconds.toString().padStart(2, "0")}
            </span>
        </div>
    )
}

export default QuizTimeTrack