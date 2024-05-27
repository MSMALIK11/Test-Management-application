interface Course {
    _id: string;
    title: string;
    isPaidCourse: boolean;
    totalTopic: number;
    freeTopic: number;
    totalSetCount: number;
    freeSetCount: number;
    isPublish: boolean;
    instructor: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface GetAllTestSeriesApiResponse {
    success: boolean;
    data: Course[];
}


