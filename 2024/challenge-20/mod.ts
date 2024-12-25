type Result = {
    missing: Record<string, number>,
    extra: Record<string, number>
};

function fixGiftList(received: string[], expected: string[]): Result {
    const count = (items: string[]) => {
        const counter: Record<string, number> = {};

        items.forEach((item) => {
            counter[item] = (counter[item] || 0) + 1;
        });

        return counter;
    };

    const receivedCount = count(received);
    const expectedCount = count(expected);

    const data: Result = {
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
