export const getPersonaName = (name:string) => {
    const wordList = name.split(' ');
    if (wordList.length === 1) {
        return wordList[0].charAt(0);
    } else if (wordList.length >= 2) {
        return wordList[0].charAt(0) + wordList[1].charAt(0);
    }
};