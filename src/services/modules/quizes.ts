
import { tmsService } from "../http"
export const quiz = {
    async InsertQuiz(payload) {
        return tmsService.post('/quiz/insert', payload)

    },
    async getAllQuizesCourse() {
        return tmsService.get('/quiz/getAllLists')

    },
    async deleteQuizCourse(id: number) {
        return tmsService.delete(`/quiz/${id}`)

    },

}