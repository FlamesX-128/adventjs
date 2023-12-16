function autonomousDrive(store: string[], movements: string[]) {
    let robotX = -1;
    let robotY = -1;

    let y = 0;
    for (const road of store) {
        const x = road.search('!');

        const searchMoveOptions = [
            [
                [0, 0], [x + 1, ++y]
            ],
            [
                [0, 0], [0, 0]
            ]
        ]

        const hasRobotBeenFound = robotX !== -1;
        const isRobotInRow = x !== -1;

        const [newX, newY] = searchMoveOptions[+hasRobotBeenFound]
            [+isRobotInRow];

        robotX += newX;
        robotY += newY;
    }

    store[robotY] = store[robotY].replace('!', '.');

    const moveOptions: Record<string, [number, number]> = {
        'R': [+1, +0],
        'L': [-1, +0],
        'U': [+0, -1],
        'D': [+0, +1]
    }

    for (const movement of movements) {
        const [x, y] = moveOptions[movement];    
        const obstacle = store[robotY + y]?.[robotX + x];

        const isObstacle = ['*', undefined].includes(obstacle);
        const robotMoveOptions = [
            [x, y],
            [0, 0]
        ]

        const [newX, newY] = robotMoveOptions[+isObstacle];

        robotX += newX;
        robotY += newY;
    }

    store[robotY] = store[robotY].substring(0, robotX) + '!'
        + store[robotY].substring(robotX + 1);
    
    return store;
}

export { autonomousDrive }
