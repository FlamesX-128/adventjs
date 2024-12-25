def create_xmas_tree(height: int, ornament: str) -> str:
    tree_lines = []

    for i in range(height):
        spaces = '_' * (height - i - 1)
        ornaments = ornament * (2 * i + 1)
        tree_lines.append(f"{spaces}{ornaments}{spaces}")

    trunk_spaces = '_' * (height - 1)
    trunk = f"{trunk_spaces}#{trunk_spaces}"

    tree_lines.append(trunk)
    tree_lines.append(trunk)

    return "\n".join(tree_lines)
