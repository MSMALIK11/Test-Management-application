import { createSlice } from "@reduxjs/toolkit";
interface User {
    createdAt: string;
    email: string;
    isVerified: boolean;
    myCourses: any[];
    role: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

const initialState: User = {
    createdAt: "",
    email: "",
    isVerified: false,
    myCourses: [],
    role: "",
    updatedAt: "",
    __v: 0,
    _id: ""
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