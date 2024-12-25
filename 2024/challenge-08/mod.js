/**
 * @param {number[]} indices 
 * @param {number} length 
 * @returns {string}
 */
function drawRace(indices, length) {
    /** @type {string[]} */
    const lanes = [];

    indices.forEach((position, index) => {
        const track = Array(length).fill("~");

        track[(length + position) % length] = "r";
        track[0] = "~";

        const indentation = " ".repeat(indices.length - index - 1);

        lanes.push(
            `${indentation}${track.join("")} /${index + 1}`
        );
    });

    return lanes.join("\n");
}
