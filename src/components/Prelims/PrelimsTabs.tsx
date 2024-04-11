import { Button } from "@/components/ui/button"
import { courseList } from "@/data/data"
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
const PrelimsTabs = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { data, isLoading } = useQuery({ queryKey: ['getALlQuizLists'], queryFn: api.quiz.getAllQuizesCourse })
    const courses = data && data?.data.courses
    const handleQuiz = (id: string) => {
        const selectedQuiz = courses.find((quiz) => quiz._id === id)
        console.log('selectedQuiz', selectedQuiz)
        dispatch(setCurrentQuiz(selectedQuiz))
        navigation(`/prelims/start-quiz/${id}`)
    }

    useEffect(() => {
        console.log('courseseff', courses)
        dispatch(setAllQuizLists(courses))
    }, [isLoading])
    return (
        <>
            <Tabs defaultValue="UPSC CSE - Prelims"  >
                <TabsList className="grid w-full grid-cols-2" >
                    <TabsTrigger value="UPSC CSE - Prelims">UPSC CSE - Prelims</TabsTrigger>
                    <TabsTrigger value="KAS - Prelims">KAS - Prelims</TabsTrigger>
                </TabsList>
                {/* <div className="nflex nw-full ngap-4 nmt-4" >
                    <Each of={courses} render={({ tabKey, buttonText, isPaid, likes, oldPrice, price, subTitle, title }) =>
                        <TabsContent value={tabKey}>
                            <Card className='nw-[340px] '>
                                <CardHeader>
                                    <CardTitle>{title}</CardTitle>
                                    <CardDescription>
                                        {subTitle && subTitle}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="">
                                        <div className="nflex ngap-2">
                                            <h4>{price}</h4>
                                            {
                                                isPaid && <p className="ntext-gray-300"> <del>{oldPrice} </del>(Including GST)</p>
                                            }

                                        </div>
                                        <div className="nbg-secondary nmt-4 nrounded-lg  ninline-block npx-2 npy-1.5  nshadow-sm">
                                            <p className="nflex ngap-2 nitems-center ntext-sm"><BiLike size={20} /> {likes} Likes</p>
                                        </div>
                                    </div>

                                </CardContent>
                                <CardFooter className="nflex">
                                    <Button className="nflex nmin-w-full" onClick={handleQuiz} variant={'secondary'}>{buttonText}</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>} />
                </div > */}

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
                                {/* <div className="nbg-secondary nmt-4 nrounded-lg  ninline-block npx-2 npy-1.5  nshadow-sm">
                                <p className="nflex ngap-2 nitems-center ntext-sm"><BiLike size={20} /> {likes} Likes</p>
                            </div> */}
                            </div>

                        </CardContent>
                        <CardFooter className="nflex">
                            <Button className="nflex nmin-w-full" onClick={() => handleQuiz(_id)} variant={'secondary'}>Start</Button>
                        </CardFooter>
                    </Card>
                } />
            </div>

            <Loading isLoading={isLoading} />
        </>
    )
}

export default PrelimsTabs


