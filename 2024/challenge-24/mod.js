/**
 * @typedef {Object} Tree
 * @property {string} value
 * @property {Tree | undefined} left
 * @property {Tree | undefined} right
 */

/**
 * @param {Tree | undefined} tree1
 * @param {Tree | undefined} tree2
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    const { value } = tree1;

    /**
     * @param {Tree | undefined} node1
     * @param {Tree | undefined} node2
     * @returns {boolean}
     */
    function isMirror(node1, node2) {
        if (!node1 && !node2) {
            return true;
        }

        if (!node1 || !node2 || node1.value !== node2.value) {
            return false;
        }

        return (
            isMirror(node1.left, node2.right) &&
            isMirror(node1.right, node2.left)
        );
    }

    const synchronized = isMirror(tree1, tree2);

    return [synchronized, value];
}
