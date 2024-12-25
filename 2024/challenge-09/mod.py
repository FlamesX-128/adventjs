from typing import List, Literal, Tuple

Board = List[str]
Movement = Literal['U', 'D', 'R', 'L']
Result = Literal['none', 'crash', 'eat']

def move_train(board: Board, mov: Movement) -> Result:
    movement_deltas = {
        'U': (+0, -1),
        'D': (+0, +1),
        'L': (-1, +0),
        'R': (+1, +0),
    }

    position_cases = {
        '·': 'none',
        '*': 'eat',
    }

    engine_position = (-1, -1)
    for y, row in enumerate(board):
        x = row.find('@')

        if x != -1:
            engine_position = (x, y)
            break

    dx, dy = movement_deltas[mov]
    x, y = engine_position

    new_position_char = (
        board[y + dy][x + dx] if 0 <= y + dy < len(board) else None
    )

    return position_cases.get(new_position_char, 'crash')
