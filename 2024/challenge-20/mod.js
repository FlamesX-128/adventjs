/**
 * @typedef {Object} Result
 * @property {Record<string, number>} missing
 * @property {Record<string, number>} extra
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    /**
     * @param {string[]} items
     * @returns {Record<string, number>}
     */
    const count = (items) => {
        const counter = {};

        items.forEach((item) => {
            counter[item] = (counter[item] || 0) + 1;
        });

        return counter;
    };

    const receivedCount = count(received);
    const expectedCount = count(expected);

    const data = {
        missing: {}, extra: {}
    };

    const items = new Set([...received, ...expected]);

    for (const item of items) {
        const b = receivedCount[item] ?? 0;
        const a = expectedCount[item] ?? 0;

        if (a > b) {
            data.missing[item] = a - b;
        } else if (b > a) {
            data.extra[item] = b - a;
        }
    }

    return data;
}
