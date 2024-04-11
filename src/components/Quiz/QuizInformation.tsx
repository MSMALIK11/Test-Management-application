/* eslint-disable react-refresh/only-export-components */
import Each from "../shared/Each";
import { memo } from "react";
interface QuizProp {
    questions: any[];
    visitedQuestions: number[];
    unVisitedQuestions: number[];
    markAsReview: number[];
    currentQuestionIndex: number;
    onAnyQuestionClick: (questionIndex: number) => void;
}
const QuizInformation = ({
    questions,
    visitedQuestions,
    unVisitedQuestions,
    currentQuestionIndex,
    onAnyQuestionClick,
    markAsReview,
}: QuizProp) => {
    const questionInfo = [
        {
            title: "Answered",
            bgColor: "nbg-green-400",
            count: visitedQuestions.length,
        },
        {
            title: "Marked",
            count: markAsReview?.length,
            bgColor: "nbg-purple-500",
        },
        // {
        //     title: "Not Visited",
        //     count: 0,
        //     bgColor: "nbg-blue-400 border border-gray-400",
        // },
        {
            title: "Not Answered",
            count: unVisitedQuestions?.length,
            bgColor: "nbg-red-500",
        },
    ];

    return (
        <div
            id="quiz-info-section"
            className="nbg-background nborder-l nborder-secondary ntext-primary nh-[90vh]"
        >
            <div className="nflex nflex-wrap ngap-4">
                {
                    <Each
                        of={questionInfo}
                        render={(quiz) => (
                            <div className="nflex nitems-center ngap-1">
                                <span
                                    className={`${quiz.bgColor} fancy-border npx-2 npy-0.5 ntext-xs`}
                                >
                                    {quiz.count || 0}
                                </span>
                                <span className="whitespace-no-wrap  ntext-xs ntext-primary ">
                                    {quiz.title}
                                </span>
                            </div>
                        )}
                    />
                }
            </div>
            <hr className="nmy-4" />
            <div>
                <h1 className="ntext-primary lg:ntext-md  sm:ntext-sm ntext-bold">
                    Section : Quantitative Aptitude
                </h1>
                <div className="nflex nflex-wrap ngap-4 nmt-4">
                    <Each
                        of={questions}
                        render={(item, index) => (
                            <div
                                onClick={() => onAnyQuestionClick(index)}
                                className={`nw-[36px] nh-[36px] ncursor-pointer nflex nitems-center active:nscale-90 njustify-center 
                                ${visitedQuestions.includes(index + 1)
                                        ? "!nbg-green-400"
                                        : ""
                                    }  ${unVisitedQuestions.includes(index + 1) ? "nbg-red-400" : ""
                                    } 
                                    ${currentQuestionIndex === index
                                        ? "!nbg-brand"
                                        : ""
                                    }
                 nshadow-lg  ntxt-semibold nborder nborder-gray-300  ntext-sm nrounded-full  cursor-pointer`}
                                key={item.id}
                            >
                                {index + 1}
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(QuizInformation);
