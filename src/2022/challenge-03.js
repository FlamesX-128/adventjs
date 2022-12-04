/**
 * Score: 144
 * @param {string[]} packOfGifts 
 * @param {string[]} reindeers 
 * @returns {number}
 */
function distributeGifts(packOfGifts, reindeers) {
    return Math.trunc(
        reindeers.join('').length * 2 / packOfGifts.join('').length
    )
}

// Tests

// Expected: 2
console.log(
    // 12
    // 24
    // 
    distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
)

// Expected: 1
console.log(
    // 3
    // 4
    distributeGifts(['a', 'b', 'c'], ['d', 'e'])
)

// Expected: 0
console.log(
    // 17
    // 8
    distributeGifts(['videogames', 'console'], ['midu'])
)

// Expected: 5
console.log(
    // 24
    // 134
    distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])
)

// Expected: 26
console.log(
    // 5
    // 134
    distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])
)
