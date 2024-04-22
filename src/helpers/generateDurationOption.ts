export const generateDurationOption = () => {
    const options = []

    for (let i = 1; i < 150; i++) {
        if (i % 5 == 0) {
            options.push({
                label: `${i} mins`,
                value: i
            })
        }


    }

    return options

}