/**
 * @typedef {Object} Shoe
 * @property {'I' | 'R'} type 
 * @property {number} size
 */

/**
 * @param {Shoe[]} shoes
 * @returns {number[]}
 */
function organizeShoes(shoes) {
    /** @type {Map<number, { I: number; R: number }>} */
    const inventory = new Map();
    /** @type {number[]} */
    const sizes = [];

    for (const shoe of shoes) {
        const { type, size } = shoe;

        if (!inventory.has(size)) {
            inventory.set(size, { I: 0, R: 0 });
        }

        inventory.get(size)[type] += 1;
    }

    for (const [size, counts] of inventory) {
        const numberOfPairs = Math.min(counts.I, counts.R);

        for (let i = 0; i < numberOfPairs; i++) {
            sizes.push(size);
        }
    }

    return sizes;
}
