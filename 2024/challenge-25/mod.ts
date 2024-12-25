function execute(code: string): number {
    let pos = 0;
    let val = 0;

    let loopIndex = 0;

    const delta: Record<string, number> = {
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
