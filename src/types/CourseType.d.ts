interface optionType {
    id: string,
    value: string,
}
export interface QuestionType {
    question: string,
    options: optionType[],
    currectAnswer: string
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
    questions: QuestionType[]
}