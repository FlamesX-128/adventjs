/**
 * @param {number} weight 
 * @returns {string}
 */
function distributeWeight(weight) {
    /** @type {Record<number, string[]>} */
    const boxes = {
        1: [
            " _ ",
            "|_|",
        ],
        2: [
            " ___ ",
            "|___|",
        ],
        5: [
            " _____ ",
            "|     |",
            "|_____|",
        ],
        10: [
            " _________ ",
            "|         |",
            "|_________|",
        ],
    };

    const sortedWeights = Object.keys(boxes).map(Number).sort((a, b) => a - b);

    /** @type {string[]} */
    let output = [];

    while (weight > 0) {
        const w = sortedWeights.findLast(x => x <= weight);
        weight -= w;

        if (!output.length) {
            output = boxes[w];
        } else {
            const box = boxes[w];

            const line = box[box.length - 1] + output[0]
                .slice(box[box.length - 1].length)
                .trim();

            output = box
                .slice(0, -1)
                .concat(line, output.slice(1));
        }
    }

    return output.join("\n");
}
