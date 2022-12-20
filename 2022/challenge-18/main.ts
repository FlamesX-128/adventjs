function dryNumber(dry: number, numbers: number): number[] {
    return [...new Array(numbers)]
        .map(
            (_, i) => i + 1
        )
        .filter(
            (e) => e.toString().includes(
                dry.toString()
            )
        )
}

// Only exporting the function to test it.
export { dryNumber }
