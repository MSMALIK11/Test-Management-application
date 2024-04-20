type OptionsType = string[];

export interface QuestionType {
    question: string,
    options: optionType[],
    correctAnswer: string,
    explanation?: string
}
export interface CourseType {
    title: string,
    description: string,
    totalQuestions: number | string,
    price: number | string,
    totalMarks: number | string
    timeDuration: {
        hh: string | number,
        mm: string | number,
        ss: string | number
    }
    questions?: QuestionType[],
    _id?: string | number
    __v?: number

}
export interface SubjectType {
    title?: string,
    description?: string,
    price?: number,
    isPaid?: boolean,
    totalSets?: number,
    freeSets?: number,
    totalAttempt?: number,
    _id?: string,
    questions?: QuestionType
}
interface Option {
    question: string;
    options: string[];
    correctAnswer: string;
    _id?: string;
}

interface QuizQuestions {
    questions?: Option | nulll;
}
export { QuizQuestions }