function drawTable(data: Array<{ [key: string]: number | string }>): string {
    let border = "+";

    const columns = Object.keys(data[0])
        .map((key) => [
            key[0].toUpperCase() + key.slice(1), ...data.map(
                (row) => row[key].toString()
            )
        ]);

    const tableRows = Array(columns[0].length).fill("|");

    for (const column of columns) {
        const maxCellWidth = Math.max(...column.map(cell => cell.length));

        let index = 0;
        for (const cell of column) {
            tableRows[index++] += ` ${cell.padEnd(maxCellWidth)} |`;
        }

        border += "-".repeat(maxCellWidth + 2) + "+";
    }

    const [header, ...body] = tableRows;

    return [
        border,
        header,
        border,
        ...body,
        border
    ].join("\n");
}
