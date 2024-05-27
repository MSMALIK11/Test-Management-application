export const getDateTime = (timestamp: string) => {
    const time = timestamp.split('T')[1].split('.')[0]
    const date = timestamp.split('T')[0]

    return `${date} ${time}`

}
