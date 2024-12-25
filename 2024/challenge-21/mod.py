from typing import Optional, Dict, Any

TreeNode = Optional[Dict[str, Any]]

def tree_height(tree: TreeNode) -> int:
    if tree is None:
        return 0

    right_height = tree_height(tree.get('right'))
    left_height = tree_height(tree.get('left'))

    return max(left_height, right_height) + 1
