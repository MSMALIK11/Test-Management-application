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
    TabsContent,
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
const Prelims = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { data, isLoading } = useQuery({ queryKey: ['GetPublishTestSeriesApiResponse'], queryFn: api.testSeries.getPublishTestSeries })
    const courses = (data?.courses ?? []) as CourseType[];
    const testSeriesList = data && data.data
    console.log(testSeriesList)
    // console.log('setCurrentQuiz', courses)
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
            <Tabs defaultValue="UPSC CSE - Prelims"  >
                <TabsList className="grid w-full grid-cols-2" >
                    <TabsTrigger value="UPSC CSE - Prelims">UPSC CSE - Prelims</TabsTrigger>
                    <TabsTrigger value="KAS - Prelims">KAS - Prelims</TabsTrigger>
                </TabsList>
                <TabsContent value="UPSC CSE - Prelims">
                    <div className="nmt-4 ngrid ngrid-cols-3">
                        <Each of={testSeriesList} render={({ title, _id, price }) =>

                            <Card className='nw-[340px] ' key={_id}>
                                <CardHeader>
                                    <CardTitle>{title}</CardTitle>

                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="">
                                        {/* <div className="nflex ngap-2">
                                            <span className="nflex ngap-1 nitems-center ntext-xs ntext-muted-foreground"><FaRegFileLines size={12} /> {totalQuestions} Questions | </span>
                                            <span className="nflex ngap-1 nitems-center ntext-xs ntext-muted-foreground"><IoTimeOutline size={12} /> {timeDuration.mm} Mins.  |</span>
                                            <span className="nflex ngap-1 nitems-center ntext-xs ntext-muted-foreground"><FaRegFileLines size={12} /> {totalMarks} Marks </span>

                                        </div> */}
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
                    </div >

                </TabsContent >
            </Tabs >

            <Loading isLoading={isLoading} />
        </>
    )
}

export default Prelims


