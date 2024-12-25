function isRobotBack(moves: string): true | [number, number] {
    const invertMoves: Record<string, string> = {
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

    while (conditional.test(moves)) {
        moves = moves.replace(conditional, (_, char, offset) =>
            [char, ""][+moves.substring(0, offset).includes(char)]
        );
    }

    const movements: Record<string, [number, number]> = {
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

    return Boolean(+!x & +!y) || [x, y]
}

console.log(
    isRobotBack('R'),     // [1, 0]
isRobotBack('RL'),    // true
isRobotBack('RLUD'),  // true
isRobotBack('*RU') ,  // [2, 1]
isRobotBack('R*U') ,  // [1, 2]
isRobotBack('LLL!R'), // [-4, 0]
isRobotBack('R?R') ,  // [1, 0]
isRobotBack('U?D') ,  // true
isRobotBack('R!L') ,  // [2,0]
isRobotBack('U!D') ,  // [0,2]
isRobotBack('R?L') ,  // true
isRobotBack('U?U') ,  // [0,1]
isRobotBack('*U?U'),  // [0,2]
isRobotBack('U?D?U'), // true
isRobotBack('R!U?U'), // [1,0]
isRobotBack('UU!U?D') ,// [0,1]
isRobotBack('*U?D?!U')

)
