function isRobotBack(moves: string): true | [number, number] {
    const invertMoves = {
        R: "L",
        L: "R",
        U: "D",
        D: "U"
    }

    moves = moves
        .replace(/\!(.)/g,
            (_, char) => invertMoves[char]
        );

    moves = moves
        .replace(/\*(.)/g,
            (_, char) => char + char
        );

    const conditional = /\?(.?)/g

    do {
        moves = moves.replace(conditional, (_, char, offset) =>
            [char, ""][+moves.substring(0, offset).includes(char)]
        );
    } while (conditional.test(moves));

    const movements = {
        R: [+1, +0],
        L: [-1, +0],
        U: [+0, +1],
        D: [+0, -1]
    }

    let x = 0;
    let y = 0;

    for (const movement of moves) {
        const [dx, dy] = movements[movement];

        x += dx;
        y += dy;
    }

    return Boolean(!x & !y) || [x, y]
}
