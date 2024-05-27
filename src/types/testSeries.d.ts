interface SubjectFormValues {
    title: string;
    description?: string;
    price?: string | number;
    totalSet?: string | number;
    freeSet?: string | number;
    isPaidCourse?: boolean,
}
interface TopicFormValues {
    title: string,
    isPaidCourse?: boolean,
    totalQuestion?: number,
    totalMark?: number,
    timeDuration?: number
}


export { SubjectFormValues, TopicFormValues }