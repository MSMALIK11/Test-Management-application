import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: [],
    currentQuiz: []
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