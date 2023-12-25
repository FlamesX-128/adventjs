// Ingenious solution found at 'github.com/iswilljr/adventjs'.

function travelDistance(map: string) {
    const rows = map.split('\n');

    const flattenedMap = rows.join('');
    const numCols = rows[0].length;

    const giftPositions = flattenedMap.replace(/\.|S/g, '');
    const santaPosition = flattenedMap.indexOf('S');

    let santaRow = Math.floor(santaPosition / numCols);
    let santaCol = santaPosition % numCols;

    let totalMovements = 0;
    let currentGift = 1;
    for (const _ of giftPositions) {
        const giftPosition = flattenedMap.indexOf(`${currentGift++}`);
        const giftCol = giftPosition % numCols;
        const giftRow = Math.floor(giftPosition / numCols);

        totalMovements
            += Math.abs(santaRow - giftRow)
            + Math.abs(santaCol - giftCol);

        santaCol = giftCol;
        santaRow = giftRow;
    }

    return totalMovements;
}

export { travelDistance }
