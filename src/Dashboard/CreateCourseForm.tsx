// Add Topic
import { useState } from "react";
import InputControl from "@/components/shared/InputControl";
import InputNumberControl from "@/components/shared/InputNumberControl";
import TextAreaControl from "@/components/shared/TextAreaControl";
import { Button } from "@/components/ui/button";
import { CourseType } from "@/types/CourseType";
import { Event } from "@/types";

interface CourseProp {
    addCourse: (data: CourseType) => void
}

const initialState: CourseType = {
    title: '',
    description: "",
    price: "",
    timeDuration: {
        hh: "",
        mm: "",
        ss: ""
    },
    totalMarks: "",
    totalQuestions: "",
    questions: []
}


const CreateCourseForm = ({ addCourse }: CourseProp) => {
    const [course, setCourse] = useState<CourseType>(initialState)

    const handleCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCourse(prevCourse => ({
            ...prevCourse,
            ...(name === "hh" || name === "mm" || name === "ss"
                ? { timeDuration: { ...prevCourse.timeDuration, [name]: value } }
                : { [name]: value }
            )
        }));
    }
    const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement> | Event) => {
        const { name, value } = event.target
        setCourse(prevCourse => ({
            ...prevCourse, [name]: value
        }))
    };

    const onResetForm = () => {
        setCourse(initialState)
    }
    const onCourseCreate = () => {
        console.log('c', course)
        addCourse(course)
        onResetForm()
    }
    return (
        <div className="nw-full nbg-secondary np-4 nspace-y-2 nrounded-md">
            <InputControl
                label="Title"
                name="title"
                hintText="Enter title"
                inputValue={course.title}
                onInputChange={handleCourse}
            />
            <TextAreaControl
                label="Description"
                name="description"
                inputValue={course.description}
                hintText="Enter description"
                onInputChange={handleDescription}
            />
            <div className="ngrid ngrid-cols-2 ngap-1">
                <InputNumberControl
                    label="Number of Quesitons"
                    name="totalQuestions"
                    value={course.totalQuestions}
                    hintText="Enter number of Questions"
                    onInputChange={handleCourse}
                />
                <InputNumberControl
                    name="price"
                    label="Price"
                    hintText="Price"
                    value={course.price}
                    onInputChange={handleCourse}
                />
            </div>
            <div className="ngrid ngrid-cols-2 ngap-1">
                <InputNumberControl
                    label="Total Marks"
                    name="totalMarks"
                    hintText="Enter total marks"
                    value={course?.totalMarks}
                    onInputChange={handleCourse}
                />
                <div className="nflex">
                    <InputNumberControl
                        name="hh"
                        label="HH"
                        hintText="HH"
                        value={course.timeDuration.hh}
                        onInputChange={handleCourse}
                    />
                    <InputNumberControl
                        name="mm"
                        label="MM"
                        hintText="MM"
                        value={course?.timeDuration.mm}
                        onInputChange={handleCourse}
                    />
                    <InputNumberControl
                        name="ss"
                        label="SS"
                        hintText="SS"
                        value={course.timeDuration.ss}
                        onInputChange={handleCourse}
                    />
                </div>
            </div>
            <div className="nflex njustify-end">
                <Button onClick={onCourseCreate} className="!nbg-background !ntext-primary">Create </Button>
            </div>
        </div>
    );
};
export default CreateCourseForm