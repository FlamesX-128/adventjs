function checkPart(part: string): boolean {
    // split the string into an array of characters.
    return [...part, ' '].some(
            // if some of the caracters are removed, and the remaining string is a palindrome, return true.
        (_, i, arr) => {
            // create a subarray without the current character.
            const part = arr.slice(0, i).concat(arr.slice(i + 1, -1))

            // if the index is the last one and the word is 'owo'
            // the subarray will be ['o', 'w', 'o'] and the reverse will be ['o', 'w', 'o']
            // so the word is a palindrome.
            return part.join('') === part.reverse().join('')
        }
    );
}

// Only exporting the function to test it.
export { checkPart }
