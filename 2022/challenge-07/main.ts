function getGiftsToRefill(a1: string[], a2: string[], a3: string[]): string[] {
    // Set all elements of the arrays to a new Array without duplicates.
    return [...new Set([...a1, ...a2, ...a3])].filter(
        // +<Array>.includes(<Element>) converts the boolean to a number
        // and returns true if the elements exists only once in the arrays.
        (e) => +a1.includes(e) + +a2.includes(e) + +a3.includes(e) === 1
    )
}

// Only exporting the function to test it.
export { getGiftsToRefill }
