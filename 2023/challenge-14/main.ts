function maxGifts(houses: number[]) {
    const n = houses.length;
    const maxGiftsArray: number[] = Array.from({ length: n })

    maxGiftsArray[1] = Math.max(houses[0], houses[1]);
    maxGiftsArray[0] = houses[0];

    let i = 1;
    for (const house of houses.slice(2)) {
        maxGiftsArray[++i] = Math.max(
            maxGiftsArray[i - 1], maxGiftsArray[i - 2] + house
        );
    }

    return maxGiftsArray[n - 1];
}

export { maxGifts }
