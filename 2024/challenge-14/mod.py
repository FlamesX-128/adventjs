from typing import List

def min_moves_to_stables(reindeer: List[int], stables: List[int]) -> int:
    reindeer.sort()
    stables.sort()

    return sum(abs(stables[i] - reindeer[i]) for i in range(len(reindeer)))
