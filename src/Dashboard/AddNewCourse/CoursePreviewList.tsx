import InputControl from "@/components/shared/InputControl";
import { CourseType } from "@/types/CourseType";
import { ChevronDown, ChevronUp, Edit } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Each from "@/components/shared/Each";
import { Button } from "@/components/ui/button";
import EmptyView from "@/components/shared/EmptyView";
import TextMarkDown from "@/components/shared/TextMarkDown";
const CoursePreviewList = ({ description, questions, price, timeDuration, title, totalMarks, totalQuestions }: CourseType) => {
    const [show, setShow] = useState(false)
    const onToggleView = () => {
        setShow(!show)
    }
    return (
        <div className="nbg-secondary nrelative nw-full np-4">
            {
                !title ? <EmptyView title="Add Course to View" />
                    :
                    <div className="nbg-background np-2 nrelative nrounded-md ">
                        <div className="nabsolute nright-4 ntop-4  transitiona-all duration-300" >
                            {
                                show ? <Button variant={'outline'} size={"sm"} onClick={onToggleView}><ChevronUp /></Button> : <Button size={"sm"} variant="outline" onClick={onToggleView}><ChevronDown /></Button>
                            }
                        </div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {
                            show &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: show ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                id="view-body"
                                className="npx-4 npt-4 nflex nflex-col ngap-4 nh-[400px] noverflow-auto">
                                <div className="nflex nflex-wrap njustify-between ngap-3">
                                    <span className="nbg-secondary nrounded-full npx-2 npy-1 nflex nitems-center njustify-center ntext-xs">Price {price}</span>
                                    <span className="nbg-secondary nrounded-full npx-2 nflex npy1 nitems-center njustify-center ntext-xs">
                                        Total Marks {totalMarks}
                                    </span>
                                    <span className="nbg-secondary nrounded-full npx-2 nflex npy-1 nitems-center njustify-center ntext-xs">Total Questions {totalQuestions}</span>
                                    <span className="nbg-secondary nrounded-full npx-2 nflex npy-1 nitems-center njustify-center ntext-xs">
                                        <InputControl className="nw-[50px]  !ntext-xs !npx-0" inputValue={timeDuration.hh} readonly />
                                        <InputControl className="nw-[50px]" inputValue={timeDuration?.mm ?? ''} readonly />
                                        <InputControl className="nw-[50px]" inputValue={timeDuration.ss} readonly />
                                    </span>


                                </div>

                                <Each of={questions} render={(question, index) => <div>
                                    <div className="nflex njustify-between nitems-center nmb-4 ">

                                        <h1>{index + 1}. {question.question}  </h1>
                                        <Edit size={12} />
                                    </div>
                                    <Each of={question.options}
                                        render={(op) =>
                                            <InputControl className={`${op.value == question?.correctAnswer ? 'nbg-brand' : ''}`} inputValue={op.value} readonly />} />
                                    <TextMarkDown text={question?.explanation || ""} />
                                </div>

                                } />
                                {/* <TextMarkDown markdownText={ } /> */}






                            </motion.div>
                        }

                    </div>
            }
        </div>
    );
};
export default CoursePreviewList