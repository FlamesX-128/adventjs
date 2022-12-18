function fixLetter(letter: string): string {
    const s_1 = letter.replace(/^\s+|\s+$/g, '')

    const s_2 = s_1.replace(/\s+(?=[.,?])|(?<=\s)\s+/g, '')

    const s_3 = s_2.replace(/(?<=[.,?!])(?=[.,?!])./g, '')

    const s_4 = s_3.replace(/^.|(?<=[.?!] )./g,
        (char) => {
            return char.toUpperCase()
        }
    )

    const s_5 = s_4.replace(/santa claus/gi, 'Santa Claus')

    const s_6 = s_5.replace(/(?<=[^.?!])$/, '.')

    const s_7 = s_6.replace(/(?<=[,.?!])./g,
        (char) => {
            return char !== ' ' ? ' ' + char : char
        }
    )

    return s_7
}

// Only exporting the function to test it.
export { fixLetter }
