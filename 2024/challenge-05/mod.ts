type Shoe = {
    type: 'I' | 'R';
    size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
    const inventory: Map<number, { I: number; R: number }> = new Map();
    const sizes: number[] = [];

    for (const shoe of shoes) {
        const { type, size } = shoe;

        if (!inventory.has(size)) {
            inventory.set(size, { I: 0, R: 0 });
        }

        inventory.get(size)![type] += 1;
    }

    for (const [size, counts] of inventory) {
        const numberOfPairs = Math.min(counts.I, counts.R);

        for (let i = 0; i < numberOfPairs; i++) {
            sizes.push(size);
        }
    }

    return sizes;
}
