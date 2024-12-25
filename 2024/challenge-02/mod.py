from typing import List

def create_frame(names: List[str]) -> str:
    max_length = max(len(name) for name in names)
    border = '*' * (max_length + 4)

    framed_names = [
        f"* {name.ljust(max_length)} *"
        for name in names
    ]

    return border + "\n".join(framed_names) + "\n" + border
