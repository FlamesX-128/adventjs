/** @typedef {{ l: number, w: number: h: number }} Box */

/**
 * Score: 170
 * @param {Box[]} boxes 
 * @returns 
 */
function fitsInOneBox(boxes) {
    return boxes.sort(
        (a, b) => a.l * a.w * a.h - b.l * b.w * b.h
    ).every((box, i) => {
        const item = boxes[i + 1]

        return item
            ? item.l > box.l && item.w > box.w && item.h > box.h
            : true
    })
}

// Tests

// Expected: true
console.log(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
    ])
)

// Expected: false
console.log(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
    ])
)

// Expected: false
console.log(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 2, w: 10, h: 2 }
    ])
)

// Expected: true
console.log(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
    ])
)
