import InputControl from "@/components/shared/InputControl";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const optionClass = "nflex nitems-center ngap-2";

const CreateQuestions = ({ onAddQuestions }) => {
    const optionsInitialState = {
        question: '',
        options: ['', '', '', ''],
        correctAnswer: null
    };

    const [options, setOptions] = useState(optionsInitialState);
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number | null>(null);

    const handleQuestionChange = (event) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            question: event.target.value
        }));
    };

    const handleOptionChange = (value, index) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            options: prevOptions.options.map((opt, i) => (i === index ? value : opt))
        }));
    };

    const handleCorrectAnswerClick = (index: number) => {
        setCurrentAnswerIndex(index)
        const currAns = options.options[index]
        setOptions((prevOptions) => ({
            ...prevOptions,
            correctAnswer: currAns
        }));
    };

    const handleAddQuestion = () => {
        onAddQuestions(options);
        setOptions(optionsInitialState);
        setCurrentAnswerIndex(null);
    };

    return (
        <div className="nbg-secondary nw-full np-4 nrounded-md">
            <div className="np-2">
                <InputControl
                    label="Question"
                    value={options.question}
                    hintText="Enter Question title"
                    onChange={handleQuestionChange}
                />
                <div className="nmt-4">
                    {['A', 'B', 'C', 'D'].map((optionName, index) => (
                        <InputControl
                            key={optionName}
                            name={optionName}
                            value={options.options[index]}
                            label={optionName}
                            hintText={`Option ${optionName}`}
                            className={optionClass}
                            onChange={(event) => handleOptionChange(event.target.value, index)}
                        />
                    ))}
                    <div className="nflex ngap-4 nmt-6 nitems-center">
                        <p>Correct Answer</p>
                        {['A', 'B', 'C', 'D'].map((optionName, index) => (
                            <Button
                                variant={"outline"}
                                key={optionName}
                                tabIndex={0}
                                onClick={() => handleCorrectAnswerClick(index)}
                                className={`nh-[26px] ntext-xs nflex nitems-center njustify-center nw-[26px] hover:nborder-background nrounded-full  ${currentAnswerIndex === index ? 'nbg-brand' : ''}`}
                            >
                                {optionName}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="nflex njustify-end">
                    <Button onClick={handleAddQuestion} className="!nbg-background nmt-4 !ntext-primary">Add</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateQuestions;
