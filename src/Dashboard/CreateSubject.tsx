import React, { useState } from "react";
import InputControl from "@/components/shared/InputControl";
import TextAreaControl from "@/components/shared/TextAreaControl";
import { SubjectType } from "@/types/CourseType";
import { Button } from "react-day-picker";
import { Event } from "@/types";
interface CourseProp {
    createSubject: (data: SubjectType) => void
}
const initialState = {
    title: '',
    description: "",
    price: 0,
    isPaid: false,
    totalSets: 0,
    freeSets: 0,
    totalAttempt: 0
}
const CreateSubject = ({ createSubject }: CourseProp) => {
    const [subject, setSubject] = useState<SubjectType>(initialState)
    const handleCourse = (event: React.ChangeEvent<HTMLInputElement> | Event) => {
        const { name, value } = event.target
        setSubject(prevCourse => ({
            ...prevCourse, [name]: value
        }));
    }
    const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement> | Event) => {
        const { name, value } = event.target
        setSubject(prevCourse => ({
            ...prevCourse, [name]: value
        }));
    }
    const onResetForm = () => {
        setSubject(initialState)
    }

    const onCourseCreate = () => {
        createSubject(subject)
        onResetForm()
    }
    return (
        <div className="nw-full nbg-secondary np-4 nspace-y-2 nrounded-md">
            <InputControl
                label="Title"
                name="title"
                hintText="Enter Tstz"
                inputValue={subject.title}
                onInputChange={handleCourse}
            />
            <TextAreaControl
                label="Description"
                name="description"
                inputValue={subject?.description}
                hintText="Enter description"
                onInputChange={handleDescription}
            />
            {/* <div className="ngrid ngrid-cols-2 ngap-1">
                <InputNumberControl
                    label="Number of Quesitons"
                    name="totalQuestions"
                    value={subject.totalQuestions}
                    hintText="Enter number of Questions"
                    onChange={handleCourse}
                />
                <InputNumberControl
                    name="price"
                    label="Price"
                    hintText="Price"
                    value={subject.price}
                    onChange={handleCourse}
                />
            </div> */}
            <Button onClick={onCourseCreate}>Create Subject</Button>

        </div>
    );
};
export default CreateSubject