// Very slow solution
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

export { getMaxGifts }
