import { UserData } from "@/types/userType";
import { createSlice } from "@reduxjs/toolkit";
interface User {
    user: UserData
}

const initialState: User = {
    user: {
        _id: "",
        name: "",
        email: "",
        role: "",
        isVerified: false,
        myCourses: [],
        createdAt: "",
        updatedAt: "",
        __v: 0
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.user = action.payload
        }
    }
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer