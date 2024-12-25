/**
 * @typedef {string[]} Board
 * @typedef {'U' | 'D' | 'R' | 'L'} Movement
 * @typedef {'none' | 'crash' | 'eat'} Result
 */

/**
 * @param {Board} board
 * @param {Movement} mov
 * @returns {Result}
 */
function moveTrain(board, mov) {
    /** @type {Record<Movement, [number, number]>} */
    const movementDeltas = {
        'U': [+0, -1],
        'D': [+0, +1],
        'L': [-1, +0],
        'R': [+1, +0],
    };

    /** @type {Record<string, Result>} */
    const positionCases = {
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
