export interface Question {
    _id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    topicId: string;
    explanation: string;
    __v: number;
}

export interface Topic {
    _id: string;
    subjectId: string;
    title: string;
    totalQuestion: number;
    duration: number;
    totalMark: number;
    totalAttempt: number;
    __v: number;
    questions: Question[];
}

export interface SubjectData {
    _id: string;
    subject: string;
    topics: Topic[];
}

export interface SubjectApiResponse {
    title: string;
    totalQuestion: any;
    _id: string | number;
    questions: Question[];
    success: boolean;
    data: SubjectData[];
}
