/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaAngleRight } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import QuizHeader from "@/components/Quiz/QuizHeader";
import QuizInformation from "@/components/Quiz/QuizInformation";
import { useCallback, useMemo, useState } from "react";
import { quizList } from "@/data/data";
import Each from "@/components/shared/Each";
import { Button } from "@/components/ui/button";
import QuizMobileMenu from "@/components/Quiz/QuizMobileMenu";
import Modal from "@/components/shared/Modal";
import QuizSubmitPreview from "@/components/QuizSubmitPreview";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Loading from "@/components/shared/Loading";
import Typewriter from '@/components/Typewriter'
const Quize = () => {
    // const [questions, setQuestions] = useState<Question[]>([]);
    const { courses, currentQuiz } = useSelector((state: RootState) => state.course)
    console.log('courses', courses)
    const { questions } = currentQuiz
    const [selectedOptions, setSelectedOptions] = useState<string[]>(
        Array(questions?.length).fill(null)
    );
    const [correctAns, setCorrectAns] = useState<string[]>(
        Array(questions?.length).fill(null)
    );
    const { id } = useParams()
    const [isShowPreview, setIsShowPreview] = useState(false)
    const [markAsReview, setMarkAsReview] = useState<number[]>([]);
    const [visitedQuestions, setVisitedQuestions] = useState<number[]>([]);
    const [unVisitedQuestions, setUnVisitedQuestions] = useState<number[]>([]);
    const [openPanel, steOpenPanel] = useState(true);
    // mobile info menu
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const handleQuestionJump = useCallback((questionNo: number) => {
        if (questionNo >= 0 && questionNo < questions?.length) {
            setCurrentQuestionIndex(questionNo);
        } else {
            console.error("Invalid question number:", questionNo);
        }
    }, []);
    const handelCheckCorrectAns = () => {
        const ans = questions[currentQuestionIndex].correctAnswer

        if (ans === selectedOptions[currentQuestionIndex]) {
            const newSelectedOptions = [...correctAns];
            newSelectedOptions[currentQuestionIndex] = ans;
            setCorrectAns(newSelectedOptions);

        } else {
            console.log('nah re baba na')
        }
    }

    const handleNext = useCallback(() => {
        handelCheckCorrectAns()

        if (currentQuestionIndex <= questions.length) {
            const selectedOption = selectedOptions[currentQuestionIndex];
            if (selectedOption === null) {
                if (!visitedQuestions.includes(currentQuestionIndex + 1)) {
                    setUnVisitedQuestions(prevVisited => [...prevVisited, currentQuestionIndex + 1]);
                }
            } else {
                if (!visitedQuestions.includes(currentQuestionIndex + 1)) {
                    const index = unVisitedQuestions.indexOf(currentQuestionIndex + 1);
                    if (index !== -1) {
                        const updatedUnvisited = unVisitedQuestions.filter(q => q !== currentQuestionIndex + 1);
                        setUnVisitedQuestions(updatedUnvisited);
                    }
                    setVisitedQuestions(prevVisited => [...prevVisited, currentQuestionIndex + 1]);
                }
            }
        }
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }, [currentQuestionIndex, questions, selectedOptions, visitedQuestions, unVisitedQuestions]);
    const handlePrevious = useCallback(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }, []);
    const handleOptionSelect = useCallback((option: string) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[currentQuestionIndex] = option;
        setSelectedOptions(newSelectedOptions);

    }, [currentQuestionIndex, selectedOptions]);
    // MARK AS REVIEW
    const onMarkAsReviewClick = useCallback(() => {
        const question = questions[currentQuestionIndex];
        if (!markAsReview.includes(question.id)) {
            setMarkAsReview(prevId => [...prevId, question.id]);
        }
    }, [currentQuestionIndex, markAsReview, questions]);

    // On open mobile menu
    const onOpenMobileMenu = useCallback(() => {
        setOpenMobileMenu(true);
    }, []);
    // On close mobile menu
    const onCloseMobileMenu = useCallback(() => {
        setOpenMobileMenu(false);
    }, []);

    const currentQuestion = useMemo(
        () => questions[currentQuestionIndex],
        [currentQuestionIndex, questions]
    );

    const onHandleSubmit = () => {
        setIsShowPreview(!isShowPreview)
    }
    const onQuizPreviewClick = () => {
        setIsShowPreview(!isShowPreview)
    }
    const onQuizPreviewClose = () => {
        setIsShowPreview(!isShowPreview)
    }
    return (
        <div className="npx-1" >
            <QuizHeader key={"quiz-header"} />
            <div className="nflex">
                <div
                    id="quiz-left-content"
                    className={`npx-6 ${!openPanel ? "nw-[100%]" : "nw-[75%]"
                        }  ncol-span-4`}
                >
                    <div className="nflex njustify-between nitems-center  nh-[50px]">
                        <h4 className="ntext-md ntext-primary">
                            Question No. {currentQuestionIndex + 1}
                        </h4>
                        <div className="nflex nitems-center ngap-6">
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                    <div id="options-container" className="nw-[60%]">
                        {/* <Typewriter text={questions[currentQuestionIndex]?.question} /> */}
                        <h3 className="nmb-4">
                            {questions[currentQuestionIndex]?.question}
                        </h3>
                        <div className="nlflex nflex-col ngap-4 nmb-4  nspace-y-2">
                            <Each
                                of={currentQuestion?.options}
                                render={(quiz) => (
                                    <div
                                        onClick={() => handleOptionSelect(quiz)}
                                        className="nbg-background  nshadow-lg nflex  njustify-between npx-4 npy-2.5 nrounded-md nborder nborder-secondary active:nbg-softHover active:ntext-brand"
                                    >
                                        <label htmlFor="option1">{quiz}</label>
                                        <input
                                            type="checkbox"
                                            checked={selectedOptions[currentQuestionIndex] === quiz}
                                            readOnly
                                        />
                                    </div>
                                )}
                            />
                        </div>

                        <div id="quiz-button-container" className="nflex njustify-between">
                            <Button
                                variant={"secondary"}
                                disabled={currentQuestionIndex === 0}
                                onClick={handlePrevious}
                            >
                                Prev
                            </Button>
                            <div id="quiz-right-action-button" className="nflex ngap-4">
                                <Button variant={"secondary"} onClick={onMarkAsReviewClick}>
                                    Mark for Review & Next
                                </Button>
                                {currentQuestionIndex === questions.length - 1 ? (
                                    <Button variant={"secondary"} onClick={onHandleSubmit}>Submit</Button>
                                ) : (
                                    <Button
                                        variant={"secondary"}
                                        disabled={currentQuestionIndex > quizList.questions.length}
                                        onClick={handleNext}
                                    >
                                        Next
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Desktop info menu */}
                <div
                    id="desktop-info-menu"
                    className={`nrelative ${!openPanel ? "nw-[0px]" : "w-[25%px]"}`}
                >
                    <QuizInformation
                        key={'quiz-information'}
                        currentQuestionIndex={currentQuestionIndex}
                        unVisitedQuestions={unVisitedQuestions}
                        visitedQuestions={visitedQuestions}
                        onAnyQuestionClick={handleQuestionJump}
                        questions={questions}
                        markAsReview={markAsReview}
                    />
                    <div
                        id="open-quiz-info-icon"
                        onClick={() => steOpenPanel(!openPanel)}
                        className=" nshadow-lg nbg-darkPrimary"
                    >
                        <FaAngleRight className="ntext-white" />
                    </div>
                </div>
                {/* Mobile bottom menu */}
                <QuizMobileMenu key={'mobile-menu'} open={openMobileMenu} onClose={onCloseMobileMenu}>
                    <div
                        id="quiz-right-content"
                        className={`nrelative`}
                    >
                        <QuizInformation
                            key={"quiz-information"}
                            currentQuestionIndex={currentQuestionIndex}
                            unVisitedQuestions={unVisitedQuestions}
                            visitedQuestions={visitedQuestions}
                            onAnyQuestionClick={handleQuestionJump}
                            questions={questions}
                            markAsReview={markAsReview}
                        />
                        <div
                            id="open-quiz-info-icon"
                            onClick={() => steOpenPanel(!openPanel)}
                            className=" nshadow-lg nbg-darkPrimary"
                        >
                            <FaAngleRight className="ntext-white" />
                        </div>
                    </div>
                </QuizMobileMenu>
            </div>
            <div
                onClick={onOpenMobileMenu}
                id="mobile-menu-bar"
                className={`nbg-secondary ${openMobileMenu ? ' nrotate-45' : ''} nrounded-full nw-[36px] nh-[36px] nflex nitems-center njustify-center`}
            >
                <FaCirclePlus className="ntext-primary" />
            </div>
            <Modal isVisible={isShowPreview} onClick={onQuizPreviewClick} onClose={onQuizPreviewClose} >
                <QuizSubmitPreview questions={questions} correctAns={correctAns} />
            </Modal>
            <Loading isLoading={!questions} />
        </div>
    );
};

export default Quize;
