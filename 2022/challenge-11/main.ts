function getCompleted(part: string, total: string): string {
    const mcd = (a: number, b: number): number => 
        b === 0 ? a : mcd(b, a % b)

    const x = total.split(':').reduce(
        (acc, curr) => acc * 60 + +curr, 0
    )

    const y = part.split(':').reduce(
        (acc, curr) => acc * 60 + +curr, 0
    )

    const z = mcd(y, x)

    return `${y / z}/${x / z}`
}

// Only exporting the function to test it.
export { getCompleted }
