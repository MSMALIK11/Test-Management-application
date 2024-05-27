import React from 'react'
interface ChangePassProp {
    currentPassword: number | string,
    newPassword: number | string
}
interface Event {
    [x: string]: { name: string; value: string | number }
    event?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
}

interface Instructor {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    isVerified: boolean;
    myCourses: string[]; // Assuming myCourses is an array of strings
    createdAt: string;
    updatedAt: string;
    __v: number;
}
interface ID {
    id: string
}
export { ChangePassProp, Event, Instructor, ID }