/**
 * @param {string[]} gifts
 * @returns {string[][]}
 */
function generateGiftSets(gifts) {
    const result = [];

    /**
     * @param {number} start
     * @param {string[]} path
     * @param {number} k
     * @returns {void}
     */
    const combine = (start, path, k) => {
        if (path.length === k) {
            result.push([...path]);
            return;
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
