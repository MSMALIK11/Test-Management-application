
import { CourseType } from "@/types/CourseType"
import { tmsService } from "../http"
import { CourseApiResponse } from "@/types/courseApiResponse"
export const quiz = {
    async InsertQuiz(payload: CourseType) {
        return tmsService.post('/quiz/insert', payload)

    },
    async getAllQuizesCourse(): Promise<CourseApiResponse> {
        const res = await tmsService.get('/quiz/getAllLists')
        return res.data

    },
    async deleteQuizCourse(id: number) {
        return tmsService.delete(`/quiz/${id}`)

    },


}