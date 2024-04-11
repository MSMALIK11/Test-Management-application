import * as yup from "yup";

const changePasswordSchema = yup.object().shape({
    currentPassword: yup.string().min(4).max(10).required('Please Enter Current Password'),
    newPassword: yup.string().min(4).max(10).required('Please Enter New Password'),
    confirmPassword: yup.string()
        .min(4)
        .max(10)
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
        .required('Please Confirm New Password')
})

export { changePasswordSchema }