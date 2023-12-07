function drawGift(size: number, symbol: string) {
    if (size < 2) {
        return '#'.repeat(size) + '\n';
    }

    const lines = [];

    // First, draw the top part of the gift box.
    lines.push(' '.repeat(size - 1) + '#'.repeat(size));

    // Draw the remaining top part of the gift box.
    for (let i = 1; i < size - 1; i++) {
        lines.push(
            ' '.repeat(size - i - 1)
                + '#' + symbol.repeat(size - 2)
                + '#' + symbol.repeat(i - 1)
                + '#'
        )
    }

    // Draw the middle part of the gift box.
    lines.push(
        '#'.repeat(size) + symbol.repeat(size - 2) + '#'
    );

    // Reverse the top part to create the other half of the gift box.
    lines.push(
        ...lines.slice(0, -1)
            .map(
                (str) => str.replace(/\s+/, '')
            )
            .reverse()
    );

    return lines.join('\n') + '\n';
}

export { drawGift };

