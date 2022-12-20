function sortToys(toys: string[], positions: number[]): string[] {
    return toys.sort(
        (i1, i2) => positions[toys.indexOf(i1)] - positions[toys.indexOf(i2)]
    )
}

// Only exporting the function to test it.
export { sortToys }
