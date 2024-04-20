import { SignupFormType, LoginFormType } from "@/types/userType"
import { tmsService } from "../http"
import { ChangePassProp } from "@/types"
export const user = {

    async login(payload: LoginFormType) {
        console.log('paylaod', payload)
        return tmsService.post('/login', payload)

    },
    async singup(payload: SignupFormType) {
        console.log('paylaod', payload)
        return tmsService.post('/signup', payload)

    },
    async getUserProfile() {
        return tmsService.get('/profile')
    },
    async logout() {
        return tmsService.get('/logout')
    },
    async changePassword({ currentPassword, newPassword }: ChangePassProp) {
        return tmsService.put('/user/changePassword', { currentPassword, newPassword })

    }
}