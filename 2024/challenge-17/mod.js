/**
 * @param {boolean[][]} grid 
 * @returns {boolean[][]}
 */
function detectBombs(grid) {
    const cols = grid[0].length;
    const rows = grid.length;

    /** @type {boolean[][]} */
    const result = Array.from(
        { length: rows }, () => Array(cols).fill(0)
    );

    const directions = [
        [-1, -1], [-1, +0], [-1, +1],
        [+0, -1], [+0, +1],
        [+1, -1], [+1, +0], [+1, +1],
    ];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const delta = [[], directions][+grid[i][j]];

            for (const [dx, dy] of delta) {
                const ni = i + dx;
                const nj = j + dy;

                if (
                    Number(ni >= 0)
                    & Number(ni < rows)
                    & Number(nj >= 0)
                    & Number(nj < cols)
                ) {
                    result[ni][nj]++;
                }
            }
        }
    }

    return result;
}
