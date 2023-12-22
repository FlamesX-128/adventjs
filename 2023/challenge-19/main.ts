function revealSabotage(store: string[][]) {
    let y = 0;
    for (const currRow of store) {
        let x = 0;
        for (const cell of currRow) {
            if (cell === '*') {
                x++; continue;
            }

            const prevRow = store[y - 1]
            const nextRow = store[y + 1]

            const adjacentCells = [
                prevRow?.[x - 1],
                prevRow?.[x],
                prevRow?.[x + 1],
                currRow[x - 1],
                currRow[x + 1],
                nextRow?.[x - 1],
                nextRow?.[x],
                nextRow?.[x + 1],
            ];

            const adjacentMines = adjacentCells.reduce(
                (acc, curr) => acc + Number(curr === '*'),
                0
            );

            if (adjacentMines > 0) {
                currRow[x] = '' + adjacentMines;
            }

            x++;
        }

        y++;
    }

    return store;
}

export { revealSabotage }
