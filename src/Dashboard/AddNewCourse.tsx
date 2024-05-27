import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateCourseForm from "./CreateCourseForm";
import { CourseType, QuestionType } from "@/types/CourseType";
import CoursePreviewList from "./AddNewCourse/CoursePreviewList";
import CreateQuestions from "./AddNewCourse/CreateQuestion";
import api from '@/services'
import toast from "react-hot-toast";
import { errorHandler } from "@/helpers/errorHandler";

// Component Start 
const AddNewCourse = () => {
    const [course, setCourse] = useState<CourseType>({
        title: "",
        description: "",
        totalQuestions: 0,
        price: 0,
        totalMarks: 0,
        timeDuration: {
            hh: 0,
            mm: 0,
            ss: 0
        },
        questions: [],
    });
    const [isOptionFormVisible, setIsOptionFormVisible] = useState(false)

    const navigate = useNavigate()

    const addCourse = (course: CourseType) => {
        setCourse(course)
        setIsOptionFormVisible(!isOptionFormVisible)
    }
    const onAddQuestions = (question: QuestionType) => {

        setCourse((prev) => ({
            ...prev,
            questions: Array.isArray(prev.questions) ? [...prev.questions, question] : [question]
        }));
        console.log('coursr', course)
    }
    const onHandlePublish = async () => {
        try {
            const res = await api.quiz.InsertQuiz(course)
            if (res.status === 200) {
                toast.success('Course has been created successfully 💐')
                navigate('/dashboard/admin/my-courses')
            }
        } catch (error) {
            const errorMessage = errorHandler(error)
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
