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
    distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
)

// Expected: 1
console.log(
    distributeGifts(['a', 'b', 'c'], ['d', 'e'])
)

// Expected: 0
console.log(
    distributeGifts(['videogames', 'console'], ['midu'])
)

// Expected: 5
console.log(
    distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])
)

// Expected: 26
console.log(
    distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])
)
