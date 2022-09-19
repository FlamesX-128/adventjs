/** @typedef {{ value: number, left: Tree | null right: Tree | null }} Tree */
/** @param {Tree} bigTree */
// Function from challenge 22
function countDecorations(bigTree) {
    return bigTree.value 
        + (bigTree.right ? countDecorations(bigTree.right) : 0)
        + (bigTree.left ? countDecorations(bigTree.left) : 0)
}

export default function checkIsSameTree(treeA, treeB) {
    return countDecorations(treeA) === countDecorations(treeB)
}
