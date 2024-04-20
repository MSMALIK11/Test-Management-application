import { CourseType, QuizQuestions } from '@/types/CourseType'
import { createSlice } from '@reduxjs/toolkit'
interface QuizProp {
    courses: CourseType[],
    currentQuiz: QuizQuestions | null

}

const initialState: QuizProp = {
    courses: [],
    currentQuiz: { questions: [] },
}
const quizSlice = createSlice({
    name: "quiz-slice",
    initialState,
    reducers: {
        setAllQuizLists(state, action) {
            state.courses = action.payload


        },
        setCurrentQuiz(state, action) {
            state.currentQuiz = action.payload

        }
    }
})

export const { setAllQuizLists, setCurrentQuiz } = quizSlice.actions
export default quizSlice.reducer