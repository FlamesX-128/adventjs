/** @param {number} height  */
/** @returns {string} */
export default function createXmasTree(height) {
    let tree = '';

    for (let i = 0; i < height; i++) {
        tree += "_".repeat(height - i - 1) + "*".repeat(i * 2 + 1) + "_".repeat(height - i - 1) + "\n";
    }

    tree += "_".repeat(height - 1 / 2) + "#".repeat(1) + "_".repeat(height - 1 / 2) + "\n"
    tree += "_".repeat(height - 1 / 2) + "#".repeat(1) + "_".repeat(height - 1 / 2)

    return tree
}
