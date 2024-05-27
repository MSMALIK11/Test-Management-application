import { UploadAnswerSheetProp } from "@/types/answerSheetType";
import { tmsService } from "../http";
export const answerSheet = {
    async uploadAnswerSheet(data: UploadAnswerSheetProp) {
        return await tmsService.post('/answersheet/upload', data, {
            headers: {
                'Content-Type': "multipart/form-data",
            },
        })


    },
    async getAnswerSheetList() {
        const res = await tmsService.get('/answersheet/getAnswersheetVIewList')
        return res.data
    },
}

