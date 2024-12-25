import re
from typing import List

def in_box(box: List[str]) -> bool:
    return any(re.match(r'^#.*\*.*#$', row) for row in box[1:-1])
