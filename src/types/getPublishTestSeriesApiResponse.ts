interface Instructor {
    _id: string;
    name: string;
    email: string;
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
    isPaid?: boolean;
}

export interface TestSeries {
    _id: string;
    title: string;
    price: number | null;
    isPublish: boolean;
    instructor: Instructor;
    topics: Topic[];
    totalTopic: number;
}

export interface GetPublishTestSeriesApiResponse {
    success: boolean;
    data: TestSeries[];
}