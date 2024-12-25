function generateGiftSets(gifts: string[]): string[][] {
    const result: string[][] = [];

    const combine = (start: number, path: string[], k: number): unknown => {
        if (path.length === k) {
            return result.push([...path]);
        }

        let i = start;
        while (i < gifts.length) {
            const gift = gifts[i++];
            path.push(gift);

            combine(i, path, k);
            path.pop();
        }
    };

    for (let size = 1; size <= gifts.length; size++) {
        combine(0, [], size);
    }

    return result;
}
