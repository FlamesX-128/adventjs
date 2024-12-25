from typing import List, Dict

def organize_inventory(inventory: List[Dict[str, str]]) -> Dict[str, Dict[str, int]]:
    organized = {}

    for item in inventory:
        category = item["category"]
        name = item["name"]
        quantity = item["quantity"]

        if category not in organized:
            organized[category] = {}
        if name not in organized[category]:
            organized[category][name] = 0

        organized[category][name] += quantity

    return organized
