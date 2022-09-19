/** @typedef {{ value: number, left: Tree | null right: Tree | null }} Tree */
/** @param {Tree} bigTree */
export default function countDecorations(bigTree) {
    return bigTree.value 
        + (bigTree.right ? countDecorations(bigTree.right) : 0)
        + (bigTree.left ? countDecorations(bigTree.left) : 0)
}