import { SubjectFormValues } from "@/types/testSeries";
import { tmsService } from "../http";
import { API } from '@/config/apiEndpoint'
import { QuestionType } from "@/types/CourseType";
import { GetAllTestSeriesApiResponse } from "@/types/getAllTestSeriesApiResponse";
import { Question } from "@/types/subjectApiResponse";
export const testSeries = {
    async addSubject(payload: SubjectFormValues) {
        return await tmsService.post(API.ADD_SUBJECT_API_URL, payload)
    },
    async addTopic(payload: SubjectFormValues, subjectId: string | number) {
        console.log('inaylaod ', subjectId)
        return await tmsService.post(`/admin/test-series/subject/${subjectId}/add-topic`, payload)
    },
    async getSubject(subjectId: string | number) {
        const res = await tmsService.get(`/admin/test-series/subject/${subjectId}`)
        return res.data
    },
    async indertQuestion(data: QuestionType, id: string) {
        return await tmsService.post(`admin/test-series/topic/question/${id}/insert`, data)

    },
    async deleteQuestion(id: string) {
        return await tmsService.delete(`admin/test-series/question/${id}`)

    },
    async deleteTopic(id: string) {
        return tmsService.delete(`admin/test-series/topic/${id}`)

    },
    async getAllTestSeries(): Promise<GetAllTestSeriesApiResponse> {
        const res = await tmsService.get(`admin/test-series/getAllTestSeries`)
        return res.data

    },
    async deleteSubject(id: string) {
        return await tmsService.delete(`/admin/test-series/subject/${id}`)

    },
    async publishTestSeries(id: string) {
        return await tmsService.put(`/admin/test-series/subject/${id}/publish`)

    },
    async privateTestSeries(id: string) {
        return await tmsService.put(`/admin/test-series/subject/${id}/private`)

    },
    async updateQuestion(payload: Question | null) {
        return await tmsService.put(`/admin/test-series/topic/question/update`, payload)

    },
    async updateTopic(id: string, payload: { title: string, totalMark: number, totalQuestion: number | string, duration: number | string }) {
        return await tmsService.put(`/admin/test-series/topic/${id}`, payload)

    },
    async getPublishTestSeries() {
        const res = await tmsService.get('/test-series/published')
        return res.data

    }

}