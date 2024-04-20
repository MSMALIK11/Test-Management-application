interface Option {
    question: string;
    options: string[];
    correctAnswer: string;
    _id: string;
}

interface QuizQuestions {
    questions: Option | nulll;
}

interface TimeDuration {
    hh: string;
    mm: string;
    ss: string;
}

export interface CourseApiResponse {
    courses: {
        _id: string;
        title: string;
        description: string;
        price: string;
        questions: QuizQuestions[];
        timeDuration: TimeDuration;
        totalMarks: string;
        totalQuestions: string;
        __v: number;
    }
}


