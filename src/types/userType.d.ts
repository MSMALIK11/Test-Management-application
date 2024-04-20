interface SignupFormType {
    name: string,
    email: string,
    password: string,
    phone: number | null
}
interface LoginFormType {
    email: string,
    password: string,

}

interface UserData {
    _id: string;
    name: string;
    email: string;
    role: string;
    isVerified: boolean;
    myCourses: string[]; // Assuming myCourses is an array of course IDs (strings)
    createdAt: string;
    updatedAt: string;
    level?: number,
    xp?: string
    __v: number;
}

export { SignupFormType, LoginFormType, UserData }
