export default function groupBy(collection, it) {
    const content = {};

    for (let i = 0; i < collection.length; i++) {
        const key = typeof it === 'function'
            ? it(collection[i])
            : collection[i][it];

        content[key]
            ? content[key].push(collection[i])
            : content[key] = [collection[i]];
    }

    return content
}
