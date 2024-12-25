from typing import List

def generate_gift_sets(gifts: List[str]) -> List[List[str]]:
    result = []

    def combine(start: int, path: List[str], k: int) -> None:
        if len(path) == k:
            result.append(path.copy())
            return

        i = start
        while i < len(gifts):
            gift = gifts[i]
            i += 1
            path.append(gift)

            combine(i, path, k)
            path.pop()

    for size in range(1, len(gifts) + 1):
        combine(0, [], size)

    return result
