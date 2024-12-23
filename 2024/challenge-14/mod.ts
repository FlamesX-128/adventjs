function minMovesToStables(reindeer: number[], stables: number[]): number {
    reindeer.sort();
    stables.sort();

    return reindeer.reduce(
        (acc, curr, index) => acc + Math.abs(stables[index] - curr), 0
    );
}
