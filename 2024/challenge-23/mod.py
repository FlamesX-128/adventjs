from typing import List

def find_missing_numbers(nums: List[int]) -> List[int]:
    unique_nums = set(nums)

    n = max(len(unique_nums), max(unique_nums, default=0))

    missing = [num for num in range(1, n + 1) if num not in unique_nums]

    return missing
