/**
 * @typedef {Object} TreeNode
 * @property {string} value
 * @property {TreeNode | null} left
 * @property {TreeNode | null} right
 */

/**
 * @param {TreeNode | null} tree
 * @returns {number}
 */
function treeHeight(tree) {
    if (tree === null) {
        return 0;
    }

    const rightHeight = treeHeight(tree.right);
    const leftHeight = treeHeight(tree.left);

    return Math.max(leftHeight, rightHeight) + 1;
}
