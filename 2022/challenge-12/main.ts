interface Sleigh {
    consumption: number,
    name?: string
}

function selectSleigh(distance: number, sleighs: Sleigh[]): string | null {
    const sleigh = sleighs.reduce((acc, curr) => {
        const c = curr.consumption * distance

        return c <= 20 && c > acc.consumption * distance
            ? curr
            : acc
    }, { consumption: -1 })

    return sleigh.name || null
}

// Only exporting the function to test it.
export { selectSleigh }
