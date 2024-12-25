function treeHeight(tree: { value: string; left: any; right: any } | null): number {
    if (tree === null) {
        return 0;
    }

    const rightHeight = treeHeight(tree.right);
    const leftHeight = treeHeight(tree.left);

    return Math.max(leftHeight, rightHeight) + 1;
}
