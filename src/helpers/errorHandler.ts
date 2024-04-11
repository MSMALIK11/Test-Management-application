export const errorHandler = (error: any) => {
    let message = ""
    if (error?.response?.data?.message) {
        message = error?.response?.data?.message
    } else if (error?.response.status === 500) {
        message = "internal Server Error"
    } else {
        message = "Something went wrong, please try again."
    }

    return message

}