function distributeGifts(weights: (number | null)[][]): number[][] {
    const resultGrid: number[][] = [];

    let rowIndex = -1;
    for (const currentRow of weights) {
        resultGrid[++rowIndex] = [];

        let columnIndex = 0;
        for (const currentCol of currentRow) {
            const topRowValue = weights[rowIndex - 1]?.[columnIndex];
            const bottomRowValue = weights[rowIndex + 1]?.[columnIndex];

            const rightColValue = currentRow[columnIndex + 1];
            const leftColValue = currentRow[columnIndex - 1];

            const values = [
                currentCol, leftColValue, rightColValue,
                topRowValue, bottomRowValue
            ];

            const divisor = values.reduce(
                (accumulator, value) => accumulator! + Number(value != null),
                0,
            );

            const total = values.reduce(
                (accumulator, value) => accumulator! + (value ?? 0),
                0
            );

            resultGrid[rowIndex][columnIndex++] = Math.round(total! / divisor!);
        }
    }

    return resultGrid;
}

export { distributeGifts }
