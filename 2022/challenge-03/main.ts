function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
    return ~~ (reindeers.join('').length * 2 / packOfGifts.join('').length)
}

// Only exporting the function to test it.
export { distributeGifts }
