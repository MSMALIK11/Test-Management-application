import { tmsService } from "../http";
export const admin = {
    async getAllUsers() {
        const res = await tmsService.get('/getAllUsers')
        return res.data
    },
    async updateRole(id: string, body: { role: string }) {
        return await tmsService.put(`/admin/updateRole/${id}`, body)
    },
    async getAnalysis() {
        return tmsService.get('/admin/getAnalysis')
    }
}