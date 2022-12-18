// Great solution by Avrick#3850
function carryGifts(gifts: string[], maxWeight: number): string[] {
    // Basically collects words until the weight of the phrase is greater than maxWeight
    // and then starts a new collection of words.
    const regExp = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')

    return gifts.join(' ').match(regExp) || [];
}

// Only exporting the function to test it.
export { carryGifts }
