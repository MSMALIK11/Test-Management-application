interface usersApiResponse {
    avatar: string;
    isVerified: boolean;
    myCourses?: any[];
    _id: string;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    updatedAt: string;
};


export { usersApiResponse }
