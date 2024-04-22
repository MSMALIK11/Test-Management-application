interface SubjectFormValues {
    title: string;
    description?: string;
    price?: string | number;
    totalSet?: string | number;
    freeSet?: string | number;
}
interface TopicFormValues {
    title: string,
    isPaid?: boolean,
    totalQuestion?: number,
    totalMark?: number,
    timeDuration?: number
}


export { SubjectFormValues, TopicFormValues }