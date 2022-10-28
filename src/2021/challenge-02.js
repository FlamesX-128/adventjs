/**
 * @param {string} letter
 * @returns {{ [key: string]: number }}
 */
export default function listGifts(letter) {
    return letter.split(" ").reduce(
        (prev, curr) => curr.length && curr[0] !== "_"
            ? { ...prev, [curr]: (prev[curr] || 0) + 1 }
            : prev,
        {},
    )
}
