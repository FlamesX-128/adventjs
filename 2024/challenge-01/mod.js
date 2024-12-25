/**
 * @param {number[]} gifts 
 * @returns {number[]}
 */
function prepareGifts(gifts) {
    return Array.from(new Set(gifts.sort((a, b) => a - b)));
}

export {
    prepareGifts
}
