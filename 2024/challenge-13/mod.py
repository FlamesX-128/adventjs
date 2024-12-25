import re
from typing import Union, List

def isRobotBack(moves: str) -> Union[bool, List[int]]:
    invert_moves = {
        'R': 'L',
        'L': 'R',
        'U': 'D',
        'D': 'U'
    }

    moves = re.sub(r'\!(.)', lambda m: invert_moves.get(m.group(1), ''), moves)
    moves = re.sub(r'\*(.)', lambda m: m.group(1) * 2, moves)

    conditional_pattern = re.compile(r'\?(.?)')

    def replace_conditional(match: re.Match, current_moves: str) -> str:
        char = match.group(1)
        pos = match.start()
        if char:
            if char in current_moves[:pos]:
                return ''
            else:
                return char
        else:
            return ''
    while True:
        matches = list(conditional_pattern.finditer(moves))
        if not matches:
            break

        replacements = []
        for match in matches:
            replacement = replace_conditional(match, moves)
            replacements.append((match.start(), match.end(), replacement))

        for start, end, replacement in reversed(replacements):
            moves = moves[:start] + replacement + moves[end:]

    movements = {
        'R': (1, 0),
        'L': (-1, 0),
        'U': (0, 1),
        'D': (0, -1)
    }

    x, y = 0, 0

    for move in moves:
        dx, dy = movements.get(move, (0, 0))
        x += dx
        y += dy

    if x == 0 and y == 0:
        return True
    else:
        return [x, y]
