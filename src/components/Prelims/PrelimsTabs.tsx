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
import { BiLike } from "react-icons/bi";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Each from '../shared/Each'
import { useNavigate } from "react-router-dom"


const PrelimsTabs = () => {
    const navigation = useNavigate()
    const handleQuiz = () => {
        navigation('/prelims/quiz-details')
    }
    return (
        <Tabs defaultValue="UPSC CSE - Prelims"  >
            <TabsList className="grid w-full grid-cols-2" >
                <TabsTrigger value="UPSC CSE - Prelims">UPSC CSE - Prelims</TabsTrigger>
                <TabsTrigger value="KAS - Prelims">KAS - Prelims</TabsTrigger>
            </TabsList >


            {/* <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                            Make changes to your account here. Click save when you're done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent> */}

            <div className="nflex nw-full ngap-4 nmt-4" >
                <Each of={courseList} render={({ tabKey, buttonText, isPaid, likes, oldPrice, price, subTitle, title }) =>
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

                {/* // <CourseCard title={course.title} subTitle={course.subTitle} isPaid={course?.isPaid} price={course.price} likes={course.likes} buttonText={course.buttonText} oldPrice={course.oldPrice} />} /> */}

            </div >

        </Tabs >
    )
}

export default PrelimsTabs


