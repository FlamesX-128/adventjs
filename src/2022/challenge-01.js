/**
 * Score: 121
 * @param {string[]} gifts
 * @returns {string}
 */
function wrapping(gifts) {
    return gifts.map(
        (gift) => `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(gift.length + 2)}`
    );
}

// Tests
console.log(
    wrapping(["Hello", "World", "in", "a", "frame"])
)

console.log(
    wrapping(["a", "b", "c", "d", "e"])
)
