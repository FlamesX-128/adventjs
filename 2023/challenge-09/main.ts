// Ingenious solution developed by Hectorreto/adventjs-solutions.

type ParityRule = {
    [key: string]: [number, number];
};

type ParityRules = {
    [key: number]: ParityRule;
};

function adjustLights(lights: string[]) {
    let totalChangesForGreen = 0;
    let totalChangesForRed = 0;

    const parityRules: ParityRules = {
        0: {
            '🔴': [1, 0],
            '🟢': [0, 1],
        },
        1: {
            '🔴': [0, 1],
            '🟢': [1, 0],
        }
    };

    let parity = 0;

    for (const light of lights) {
        const [changesForRed, changesForGreen] = parityRules[parity][light];

        totalChangesForGreen += changesForGreen;
        totalChangesForRed += changesForRed;

        parity = 1 - parity;
    }

    return Math.min(totalChangesForRed, totalChangesForGreen);
}


export { adjustLights }
