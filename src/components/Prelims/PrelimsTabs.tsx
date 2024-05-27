import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaRegFileLines } from "react-icons/fa6";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Each from '../shared/Each'
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import api from '@/services'
import Loading from "../shared/Loading";
import { IoTimeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllQuizLists, setCurrentQuiz } from "@/store/features/quizSlice";
import { CourseType } from "@/types/CourseType";
import Prelims from "./Prelims";
const PrelimsTabs = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { data, isLoading } = useQuery({ queryKey: ['getALlQuizLists'], queryFn: api.quiz.getAllQuizesCourse })
    const courses = (data?.courses ?? []) as CourseType[];
    console.log('setCurrentQuiz', courses)
    const handleQuiz = (id: string) => {
        if (courses) {
            const selectedQuiz = courses?.find((quiz) => quiz._id === id)
            dispatch(setCurrentQuiz(selectedQuiz))
            navigation(`/prelims/start-quiz/${id}`)
        }
    }

    useEffect(() => {
        dispatch(setAllQuizLists(courses))
    }, [isLoading])
    return (
        <>
            <Prelims />
            {/* <Tabs defaultValue="UPSC CSE - Prelims"  >
                <TabsList className="grid w-full grid-cols-2" >
                    <TabsTrigger value="UPSC CSE - Prelims">UPSC CSE - Prelims</TabsTrigger>
                    <TabsTrigger value="KAS - Prelims">KAS - Prelims</TabsTrigger>
                </TabsList>
            </Tabs >
            <div className="nmt-4 ngrid ngrid-cols-3">
                <Each of={courses} render={({ title, _id, description, timeDuration, totalMarks, totalQuestions, price }) =>

                    <Card className='nw-[340px] '>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>
                                {description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="">
                                <div className="nflex ngap-2">
                                    <span className="nflex ngap-1 nitems-center ntext-xs ntext-muted-foreground"><FaRegFileLines size={12} /> {totalQuestions} Questions | </span>
                                    <span className="nflex ngap-1 nitems-center ntext-xs ntext-muted-foreground"><IoTimeOutline size={12} /> {timeDuration.mm} Mins.  |</span>
                                    <span className="nflex ngap-1 nitems-center ntext-xs ntext-muted-foreground"><FaRegFileLines size={12} /> {totalMarks} Marks </span>

                                </div>
                                <div className="nflex ngap-2">

                                    {
                                        price && <p className="ntext-gray-300">Free <del> {price} </del></p>
                                    }

                                </div>

                            </div>

                        </CardContent>
                        <CardFooter className="nflex">
                            <Button className="nflex nmin-w-full" onClick={() => handleQuiz(_id as string)} variant={'secondary'}>Start</Button>
                        </CardFooter>
                    </Card>
                } />
            </div> */}
            <Loading isLoading={isLoading} />
        </>
    )
}

export default PrelimsTabs


