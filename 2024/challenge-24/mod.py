from typing import Optional, Dict, Any, Tuple

Tree = Optional[Dict[str, Any]]

def is_trees_synchronized(tree1: Tree, tree2: Tree) -> Tuple[bool, str]:
    value = tree1['value']

    def is_mirror(node1: Tree, node2: Tree) -> bool:
        if not node1 and not node2:
            return True
        if not node1 or not node2 or node1['value'] != node2['value']:
            return False
        
        return (
            is_mirror(node1.get('left'), node2.get('right')) and is_mirror(node1.get('right'), node2.get('left'))
        )
    
    synchronized = is_mirror(tree1, tree2)
    
    return (synchronized, value)
