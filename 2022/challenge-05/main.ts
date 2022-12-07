// Fast solution by github.com/alexisg24/adventjs-2022-challenge
function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number): number {
    return Math.max(
        ...[...giftsCities.reduce(
            (x: number[][], y: number) => x.concat(x.map(
                (x: number[]) => [y].concat(x)
            )), [[]])
        ].filter(
            (item) => item.length <= maxCities
        ).map(
            (subset) => subset.reduce((a: number, b: number) => a + b, 0)
        ).filter(
            (item) => item <= maxGifts
        )
    );
}

// Only exporting the function to test it.
export { getMaxGifts }
