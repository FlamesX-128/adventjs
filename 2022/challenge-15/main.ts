function decorateTree(base: string): string[] {
    const data: string[][] = [base.split(' ')]

    const dict: { [key: string]: string } = {
        BP: 'R',
        BR: 'P',
        BB: 'B',

        RP: 'B',
        RR: 'R',
        RB: 'P',

        PP: 'P',
        PR: 'B',
        PB: 'R',
    }

    while ((data.at(-1) || []).length > 1) {
        const prev: string[] = data.at(-1)!
        const next: string[] = []

        for (let i= 0; i < prev.length - 1; i++) {
            const item = dict[prev[i] + prev[i + 1]]
    
            item && next.push(item)
        }

        data.push(next)
    }

    return data.reverse().map(
        (row) => row.join(' ')
    )
}

// Only exporting the function to test it.
export { decorateTree }
