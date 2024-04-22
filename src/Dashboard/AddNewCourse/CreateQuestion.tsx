import InputControl from "@/components/shared/InputControl";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import UploadImage from "../components/UploadImage";
import TextEditor from "../components/TextEditor";
import { QuestionType } from "@/types/CourseType";
import Heading from "@/components/shared/Heading";
const optionClass = "nflex nitems-center ngap-2";
const CreateQuestions = ({ onAddQuestions, title }: { onAddQuestions: (value: QuestionType) => void, title?: string }) => {
    const optionsInitialState: QuestionType = {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
        explanation: ""
    };

    const [options, setOptions] = useState<QuestionType>(optionsInitialState);
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number | null>(null);

    const handleQuestionChange = (event: { target: { value: string; }; }) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            question: event.target.value
        }));
    };

    const handleOptionChange = (value: string, index: number) => {
        console.log('vakue', value)
        console.log('optoons', options)
        setOptions((prevOptions) => {
            const updatedOptions = [...prevOptions.options]; // Create a copy of the options array
            updatedOptions[index] = value;
            return {
                ...prevOptions,
                options: updatedOptions
            };
        });

    };

    const handleCorrectAnswerClick = (optionName: string, index: number) => {
        setCurrentAnswerIndex(index)
        // const currAns = options.options[index]
        setOptions((prevOptions) => ({
            ...prevOptions,
            correctAnswer: optionName as unknown as string
        }));
    };

    const handleAddQuestion = () => {
        console.log(options)
        onAddQuestions(options);
        setOptions(optionsInitialState);
        setCurrentAnswerIndex(null);
    };
    // Handle explanations 
    const onExplanationChange = (value: string) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            explanation: value
        }));
    }
    // Check if question or first two options are empty
    const isDisabled = !options.question || !options.options[0] || !options.options[1] || !options.correctAnswer;

    return (
        <div className="nbg-secondary nw-full np-4 nrounded-md">


            {
                title && <div className="nbg-rose-400 ngap-2  np-1 nflex npx-4 nrounded-full">
                    <Heading text="Topic :" />
                    <Heading text={title} className="nfont-bold" />

                </div>
            }
            <div className="np-2">
                <InputControl
                    label="Question"
                    inputValue={options.question}
                    hintText="Enter Question title"
                    onInputChange={handleQuestionChange}
                />
                <div className="nmt-4 optionsBox" >
                    {['A', 'B', 'C', 'D'].map((optionName, index) => (
                        <InputControl
                            key={optionName}
                            name={optionName}
                            inputValue={options.options[index] || ""}
                            label={optionName}
                            hintText={`Option ${optionName} ${index === 0 || index === 1 ? '*' : ''} `}
                            className={optionClass}
                            onInputChange={(event) => handleOptionChange(event.target.value, index)}
                        />
                    ))}
                    <div className="nflex ngap-4 nmt-6 nitems-center">
                        <p>Correct Answer</p>
                        {['A', 'B', 'C', 'D'].map((optionName, index) => (
                            <Button
                                variant={"outline"}
                                key={optionName}
                                tabIndex={0}
                                onClick={() => handleCorrectAnswerClick(optionName, index)}
                                className={`nh-[26px] ntext-xs nflex nitems-center njustify-center nw-[26px] hover:nborder-background  nrounded-full  ${currentAnswerIndex === index ? 'nbg-brand' : ''}`}
                            >
                                {optionName}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="nspace-y-4 nmt-4">
                    <TextEditor onChange={onExplanationChange} />
                    <UploadImage />

                </div>
                <div className="nflex njustify-end">
                    <Button onClick={handleAddQuestion} className="!nbg-background nmt-4 !ntext-primary">Add</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateQuestions;
