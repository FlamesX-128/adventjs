// Cognitive complexity: 3, lower score, and more readable.
function _checkIsValidCopy(original: string, copy: string) {
    let isValidCopy = true
    let index = 0

    for (const letter of original) {
        const copyLetter = copy[index++]

        const isValidLetter = [
            letter.toLowerCase(),
            '#',
            '+',
            ':',
            '.',
            ' ',
        ].includes(copyLetter)

        const isCopyLetterBlankSpace = copyLetter === ' '
        const isLetterBlankSpace = letter === ' '

        const isValidCharacter = isLetterBlankSpace
            ? isCopyLetterBlankSpace
            : isValidLetter;

        if (!isValidCharacter) {
            isValidCopy = false;
            break;
        }
    }

    return isValidCopy
}

// Clever way to remove 'if' statements using arrays, found at https://github.com/iswilljr/adventjs
// Cognitive complexity: 1, better score, and less readable.
function checkIsValidCopy(original: string, copy: string) {
    let isValidCopy = true
    let index = 0

    for (const letter of original) {
        const copyLetter = copy[index++]

        const isValidLetter = [
            letter.toLowerCase(),
            '#',
            '+',
            ':',
            '.',
            ' ',
        ].includes(copyLetter)

        const isCopyLetterBlankSpace = copyLetter === ' '
        const isLetterBlankSpace = letter === ' '

        const isValidCharacter = [isValidLetter, isCopyLetterBlankSpace][
            +isLetterBlankSpace
        ]

        isValidCopy = [isValidCopy, isValidCharacter][+isValidCopy]
    }

    return isValidCopy
}

export { checkIsValidCopy }
