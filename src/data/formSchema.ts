
import * as yup from "yup";

const changePasswordSchema = yup.object().shape({
    currentPassword: yup.string().min(4).max(10).required('Please Enter Current Password'),
    newPassword: yup.string().min(4).max(10).required('Please Enter New Password'),
    confirmPassword: yup.string()
        .min(4)
        .max(10)
        .oneOf([yup.ref('newPassword')], 'Passwords must match')
        .required('Please Confirm New Password')
})

const createCourseSchema = yup.object().shape({
    question: yup.string().required("Question is filed is required")
})
const subjectFormSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string(),
    price: yup.string(),
    totalSet: yup.string(),
    freeSet: yup.string()
})
const subjectTopicSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    isPaid: yup.boolean(),
    totalQuestion: yup.number(),
    totalMark: yup.number(),
    timeDuration: yup.number()
})

export { changePasswordSchema, createCourseSchema, subjectFormSchema, subjectTopicSchema }