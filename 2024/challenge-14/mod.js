/**
 * @param {number[]} reindeer 
 * @param {number[]} stables 
 * @returns {number} 
 */
function minMovesToStables(reindeer, stables) {
    reindeer.sort();
    stables.sort();

    return reindeer.reduce(
        (acc, curr, index) => acc + Math.abs(stables[index] - curr), 0
    );
}
