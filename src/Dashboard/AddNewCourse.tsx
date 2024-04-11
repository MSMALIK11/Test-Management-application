import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateCourseForm from "./CreateCourseForm";
import { CourseType } from "@/types/CourseType";
import CoursePreviewList from "./AddNewCourse/CoursePreviewList";
import CreateQuestions from "./AddNewCourse/CreateQuestion";
import api from '@/services'
import toast from "react-hot-toast";

// Component Start 
const AddNewCourse = () => {
    const [loading, setLaoding] = useState(false)
    const [course, setCourse] = useState<CourseType>({});
    const [isOptionFormVisible, setIsOptionFormVisible] = useState(false)

    const navigate = useNavigate()

    const addCourse = (course: CourseType) => {
        setCourse(course)
        setIsOptionFormVisible(!isOptionFormVisible)
    }
    const onAddQuestions = (question) => {
        setCourse((prev) => ({
            ...prev,
            questions: Array.isArray(prev.questions) ? [...prev.questions, question] : [question]
        }));
    }
    const onHandlePublish = async () => {
        setLaoding(true)
        try {
            const res = await api.quiz.InsertQuiz(course)
            if (res.status === 200) {
                setLaoding(false)
                toast.success('Course has been created successfully 💐')
                navigate('/dashboard/admin/my-courses')
            }
        } catch (error) {
            setLaoding(false)
            const errorMessage = error?.response?.data.error || 'Internal Server error '
            toast.error(errorMessage)
            console.error('Error::while publishing the course ', error)
        }
    }
    return (
        <div className="np-4">
            <div className="nflex nitems-center njustify-between ">
                <h1 className="ntext-lg nmy-4">CREATE COURSE</h1>
                <Button onClick={onHandlePublish} className="nbg-green-400 !ntext-primary hover:nbg-green-500">Publish</Button>
            </div>
            <div className="nflex ngap-4">

                {
                    isOptionFormVisible ? <CreateQuestions onAddQuestions={onAddQuestions} /> : <CreateCourseForm addCourse={addCourse} />
                }
                {/* <CreateSets /> */}
                <CoursePreviewList key={'course preview'} totalMarks={course.totalMarks} title={course.title} questions={course.questions} price={course.price} timeDuration={course.timeDuration} totalQuestions={course.totalMarks} description={course.description} />
            </div>
        </div>
    );
};

export default AddNewCourse;
