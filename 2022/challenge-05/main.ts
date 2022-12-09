function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number): number {
    const sort = giftsCities.sort((a, b) => b - a);

    const size = sort.length < maxCities
        ? sort.length
        : maxCities;

    // deno-lint-ignore no-inferrable-types
    return (function _(arr: number[], n: number, m: number, i: number = 0): number {
        if (i >= n) return 0

        return arr.reduce((acc, curr, index) => {
            if (m === 0) return acc
    
            const data = _(arr.slice(index + 1), n, m - curr, i + 1)
            const sum = data + curr
    
            return sum > acc && sum <= m
                ? sum
                : acc
        }, 0)
    })(sort, size, maxGifts)

}

// Only exporting the function to test it.
export { getMaxGifts }
