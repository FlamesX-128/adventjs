type Board = string[];
type Movement = 'U' | 'D' | 'R' | 'L';
type Result = 'none' | 'crash' | 'eat';

function moveTrain(board: Board, mov: Movement): Result {
    const movementDeltas: Record<Movement, [number, number]> = {
        'U': [+0, -1],
        'D': [+0, +1],
        'L': [-1, +0],
        'R': [+1, +0],
    };

    const positionCases: Record<string, Result> = {
        '·': 'none',
        '*': 'eat',
    };

    let enginePosition = { x: -1, y: -1 };

    for (let y = 0; y < board.length; y++) {
        const x = board[y].indexOf('@');

        if (x !== -1) {
            enginePosition = { x, y };
            break;
        }
    }

    const [dx, dy] = movementDeltas[mov];
    const { x, y } = enginePosition;

    const newPositionChar = board[y + dy]?.[x + dx];

    return positionCases[newPositionChar] ?? 'crash';
}
