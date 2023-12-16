interface TreeNode {
    value: null | number;
    left: null | TreeNode;
    right: null | TreeNode;
}

interface StackEntry {
    node: TreeNode;
    index: number;
}

// Cognitive complexity: 1, lower score, and less readable.
function _transformTree(tree: number[]): TreeNode | null {
    const root: TreeNode = {
        value: tree[0], left: null, right: null,
    };

    const outputOptions = [null, root];
    const stack: StackEntry[] = [
        { node: root, index: 0 }
    ];

    for (const entry of stack) {
        const { node, index } = entry;

        const rightChildIndex = 2 * index + 2;
        const rightValue = tree[rightChildIndex];

        const leftChildIndex = 2 * index + 1;
        const leftValue = tree[leftChildIndex];

        const treeOptions: [StackEntry[], Partial<TreeNode>][] = [
            [[], {}], [stack, node]
        ];

        const [rightStack, rightNode] = treeOptions[
            +(typeof rightValue === 'number')
        ];

        rightNode.right = { value: rightValue, left: null, right: null };
        rightStack.push({ node: rightNode.right, index: rightChildIndex });

        const [leftStack, leftNode] = treeOptions[
            +(typeof leftValue === 'number')
        ];

        leftNode.left = { value: leftValue, left: null, right: null };
        leftStack.push({ node: leftNode.left, index: leftChildIndex });
    }

    return outputOptions[+!!tree.length];
}

// Cognitive complexity: 3, better score, and more readable.
function transformTree(tree: number[]): TreeNode | null {
    function transformTree(i = 0): TreeNode | null {
        const value = tree[i];

        if (typeof value !== "number") {
            return null;
        }

        return {
            value,
            right: transformTree(2 * i + 2),
            left: transformTree(2 * i + 1),
        };
    }

    const result = transformTree();

    return result;
}

export type { TreeNode }
export { transformTree }
