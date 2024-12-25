/**
 * @param {string} code 
 * @returns {number}
 */
function execute(code) {
    let pos = 0;
    let val = 0;

    let loopIndex = 0;

    /** @type {Record<string, number>} */
    const delta = {
        '-': -1,
        '+': +1,
    };

    const pairs = {
        '{': '}',
        '[': ']'
    };

    while (pos < code.length) {
        const char = code[pos];

        switch (char) {
            case '{':
            case '[': {
                if (val === 0) {
                    const pair = pairs[char];

                    pos += code
                        .slice(pos)
                        .indexOf(pair);
                } else if (char === '[') {
                    loopIndex = pos;
                }

            }
                break;

            case ']': {
                if (char === ']' && val !== 0) {
                    pos = loopIndex;
                }
            }
                break;

            default:
                val += delta[char] ?? 0;
        }

        pos++;
    }

    return val;
}
