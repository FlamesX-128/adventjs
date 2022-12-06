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

/* Very slow solution
function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
    if (
        !(maxGifts >= 1 && giftsCities.length >= 1 && maxCities >= 1)
    ) return 0

    function combinations(arr: number[], n: number, m: number): number[] {
        if (n < 2) return arr

        return arr.flatMap(
            (e1, i1) => combinations(
                [...new Set(arr.slice(0, i1).concat(arr.slice(i1 + 1)))], n - 1, m
            ).filter((e2) => e2 < m).map((e2) => {
                return e1 + e2 > m
                    ? e2 > m
                        ? e1
                        : e2
                    : e1 + e2
            })
        )

    }

    if (giftsCities.length === 1) return giftsCities[0] <= maxGifts
        ? giftsCities[0]
        : 0

    const res = combinations(
        giftsCities.sort((a, b) => b - a), giftsCities.length < maxCities
        ? giftsCities.length
        : maxCities,
        maxGifts
    )

    return res.reduce(
        (a, b) => a > b && a <= maxGifts
            ? a
            : b <= maxGifts
                ? b
                : 0,
        0
    )
}
*/

// Tests

console.log(
    getMaxGifts([2, 2, 2, 2, 2, 2, 2, 2], 100, 1), // 2
    getMaxGifts([12, 11, 7, 5, 3], 13, 3), // 12
    getMaxGifts([12, 3, 11, 5, 7], 20, 3), // 20
    getMaxGifts([50], 15, 1), // 0
    getMaxGifts([50], 100, 1), // 50
    getMaxGifts([50, 70], 100, 1), // 70
    getMaxGifts([50, 70, 30], 100, 2), // 100
    getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4), // 100
    getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 3), // 100
    getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 2), // 90
    getMaxGifts([20, 2, 2, 1000, 500, 200], 199, 1), // 20
    getMaxGifts([39, 0, 20, 1000, 500, 200], 40, 2), // 39
    getMaxGifts([20, 0, 19, 1], 20, 2), // 20
    getMaxGifts([50, 70, 30], 100, 3), // 100
    getMaxGifts([50, 70, 30], 100, 4), // 100
    getMaxGifts([50, 70, 30], 100, 5), // 100
    getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4), // 100
);
