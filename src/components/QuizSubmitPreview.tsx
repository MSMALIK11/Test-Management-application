import { Trophy } from "lucide-react"
import { Label } from "./ui/label"
import { Card } from "./ui/card"
import Each from "./shared/Each"
import { QuestionType } from "@/types/CourseType"
interface SubmitProp {
    questions: QuestionType[],
    correctAns: string[]
}

const QuizSubmitPreview = ({ questions, correctAns }: SubmitProp) => {
    const currectAns = correctAns.filter((item) => item !== null)
    const calculateAccuracy = () => {
        if (correctAns.length > 0 && questions) {
            const accuracy = (correctAns.length / questions?.length) * 100;
            return accuracy.toFixed(2);
        }
        return "N/A";
    };

    return (
        <div>
            <div className="nflex nleading-1 nflex-col nitems-center njustify-center">
                <Trophy size={56} className="nmb-2" />
                <p className="ntext-2xl">Good job!</p>
                <p>{`> `}{calculateAccuracy()}% accuracy</p>
            </div>
            <div className="ngrid  nmt-4 ngrid-cols-2 ngap-2">
                <Card className="np-4 nflex ngap-2 nflex-col nborder-secondary">
                    <Label>Score</Label>
                    <span>{currectAns.length}/{questions.length}</span>
                </Card>
                <Card className="np-4 nflex ngap-2 nflex-col nborder-secondary">
                    <Label>Time Taken</Label>
                    <p>50s</p>


                </Card>
            </div>
            <div className="nmt-4">

                <div className="ngrid ngrid-cols-2 nbg-secondary np-2">
                    <div className="nflex ngap-3">
                        <p>No</p>
                        <p>Question & Correct Answer</p>

                    </div>
                    <div>
                        <p>Your Answer</p>
                    </div>
                </div>
                <div className="nh-[160px] noverflow-auto">

                    <Each of={questions} render={(item: QuestionType, index) =>
                        <div className="ngrid ngrid-cols-2 hover:nbg-secondary" key={index}>
                            <ul className="nflex nflex-col">
                                <li className="npx-3 npy-4"><span className="nbg-secondary np-2 ntext-xs nrounded-full">
                                    {index < 10 ? `0${index + 1}` : index + 1}</span>{item.question}
                                    <span className="ntext-green-400 nblock nms-8">{item.correctAnswer}</span>
                                </li>
                            </ul>
                            <ul>
                                <li className={`ntext-green-400 ${!correctAns.includes(item.correctAnswer) ? 'ntext-red-500' : ''}`}>{item.correctAnswer}</li>
                            </ul>

                        </div>} />
                </div>

            </div>
        </div>
    )
}

export default QuizSubmitPreview