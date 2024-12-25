from typing import List, Dict

def organize_shoes(shoes: List[Dict[str, int]]) -> List[int]:
    inventory = {}
    sizes = []

    for shoe in shoes:
        shoe_type = shoe["type"]
        size = shoe["size"]

        if size not in inventory:
            inventory[size] = {"I": 0, "R": 0}

        inventory[size][shoe_type] += 1

    for size, counts in inventory.items():
        number_of_pairs = min(counts["I"], counts["R"])

        sizes.extend([size] * number_of_pairs)

    return sizes
