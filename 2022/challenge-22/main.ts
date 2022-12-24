function checkStepNumbers(systemNames: string[], stepNumbers: number[]): boolean {
    return systemNames.every(
        (name, i) => stepNumbers[i] <= stepNumbers[
            i + systemNames.slice(i + 1).indexOf(name) + 1
        ]
    )
}

// Only exporting the function to test it.
export { checkStepNumbers }
