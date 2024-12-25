from collections import Counter
from typing import List, Dict

Result = Dict[str, Dict[str, int]]

def fix_gift_list(received: List[str], expected: List[str]) -> Result:
    received_count = Counter(received)
    expected_count = Counter(expected)
    
    data: Result = {
        'missing': {},
        'extra': {}
    }
    
    items = set(received_count.keys()).union(expected_count.keys())
    
    for item in items:
        b = received_count.get(item, 0)
        a = expected_count.get(item, 0)
        
        if a > b:
            data['missing'][item] = a - b
        elif b > a:
            data['extra'][item] = b - a
    
    return data
