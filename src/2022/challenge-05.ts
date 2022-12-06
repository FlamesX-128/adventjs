function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
    if (giftsCities.length === 1) giftsCities[0] <= maxGifts ? giftsCities[0] : 0
    if (maxGifts < 1 || maxCities < 1) return 0

    const result = giftsCities.reduce((prev, curr, index) => {
        let max = maxCities - 1

        const res = giftsCities.slice(index + 1).reduce(
            (prev, curr, index) => index < max && (prev + curr) <= maxGifts
                ? prev + curr
                : max++ && prev,
            curr
        )

        return (res > prev && res <= maxGifts) ? res : prev
    }, 0)

    return result;
}

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

    getMaxGifts([50, 70, 30], 100, 3), // 100
    getMaxGifts([50, 70, 30], 100, 4), // 100
    getMaxGifts([50, 70, 30], 100, 5), // 100

    getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4), // 100
    getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000), // 115
)
