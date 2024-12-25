from typing import List

def prepare_gifts(gifts: List[int]) -> List[int]:
    return sorted(set(gifts))
