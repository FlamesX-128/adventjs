function prepareGifts(gifts: number[]): number[] {
    return Array.from(new Set(gifts.sort((a, b) => a - b)));
}
