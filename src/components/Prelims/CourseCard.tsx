
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { BiLike } from "react-icons/bi";
interface CourseProp {
    title: string,
    subTitle: string,
    price: string,
    oldPrice: string | null,
    likes: string,
    isPaid: boolean,
    buttonText: string
}
const CourseCard = ({ title, subTitle, price, oldPrice, likes, buttonText, isPaid }: CourseProp) => {
    const navigation = useNavigate()
    const handleQuiz = () => {
        navigation('/prelims/quiz-details')
    }
    return (
        <div>
            <Card className="">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{subTitle}</CardDescription>
                </CardHeader>
                <CardContent>

                    <div>

                        <div className="nflex ngap-2">
                            <h4>{price}</h4>
                            {
                                !isPaid && <p className="ntext-gray-300"> <del>{oldPrice} </del>(Including GST)</p>
                            }

                        </div>
                        <div className="nbg-secondary nmt-4 nrounded-lg  ninline-block npx-2 npy-1.5  nshadow-sm">
                            <p className="nflex ngap-2 nitems-center ntext-sm"><BiLike size={20} /> {likes} Likes</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant={"secondary"} onClick={handleQuiz}>{buttonText}</Button>
                </CardFooter>
            </Card></div>
    )
}

export default CourseCard