const symbol_codes = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
}

export default function decodeNumber(symbols) {
    let result = 0;

    for (let i = 0; i < symbols.length; i++) {
        if (!(symbols[i] in symbol_codes)) return NaN;

        const curr = symbol_codes[symbols[i]];

        curr < (symbol_codes[symbols[i + 1]] || curr)
            ? result -= curr
            : result += curr;

    }

    return result
}
