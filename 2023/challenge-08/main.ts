function organizeGifts(gifts: string): string {
    let result = '';

    for (const giftInfo of gifts.match(/\d+\w/g) || []) {
        const symbol = giftInfo.slice(-1);
        const size = +giftInfo.slice(0, -1);

        const repetitions = ~~(size / 50);
        const remainingBoxes = ~~((size % 50) / 10);
        const remainingGifts = size % 10;

        result += `[${symbol}]`.repeat(repetitions);
        result += `{${symbol}}`.repeat(remainingBoxes);

        if (remainingGifts > 0) {
            result += `(${symbol.repeat(remainingGifts)})`;
        }
    }

    return result;
}

export { organizeGifts }
