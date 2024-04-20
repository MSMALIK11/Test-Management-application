import { tmsService } from "../http";
export const admin = {
    async getAllUsers() {
        return await tmsService.get('/getAllUsers')
    },
    async updateRole(id: string, body: { role: string }) {
        return await tmsService.put(`/admin/updateRole/${id}`, body)
    },
    async getAnalysis() {
        return tmsService.get('/admin/getAnalysis')
    }
}