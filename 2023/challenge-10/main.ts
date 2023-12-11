// More complexity, lower score, but more realistic.
function _createChristmasTree(ornaments: string, height: number): string {
    const overflow = ornaments.length;

    let pointer = 0;
    let tree = '';

    for (let i = 1; i <= height; i++) {
        let row = ' '.repeat(height - i);

        for (let j = 0; j < i; j++) {
            row += ornaments[pointer++ % overflow] + ' '
        }

        tree += row.trimEnd() + '\n';
    }

    return tree += ' '.repeat(height - 1) + '|\n';
}

// Cognitive complexity: 1, Better Score
function createChristmasTree(ornaments: string, height: number): string {
    const overflow = ornaments.length;
    let tree = '';
  
    let pointer = 0;
    let i = 1;

    for (const _ of ' '.repeat(height)) {
        let row = ' '.repeat(height - i);

        for (const _ of ' '.repeat(i)) {
            row += ornaments[pointer++ % overflow] + ' '
        }

        tree += row.trimEnd() + '\n';
        i++
    }

    return tree += ' '.repeat(height - 1) + '|\n';
}

export { createChristmasTree }
