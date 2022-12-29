type Maze = ' ' | 'W' | 'S' | 'E'

// Spores method.
function canExit(maze: Maze[][]): boolean {
    if (!maze.some((value) => value.includes('E'))) return true

    const prev = [...maze];

    maze.forEach((_, y) => maze[y] = [
        ...maze[y].join('').replace(/[ E]?((?=S)|(?<=S))[ E]?/g,
            (match: string) => 'S'.repeat(match.length)
        )
    ] as Maze[]);

    ['reduce', 'reduceRight'].forEach(
        // deno-lint-ignore ban-ts-comment
        // @ts-ignore
        (method: 'reduce') => maze[method](
            (prev, curr, y) => {
                const positions = prev
                    .map(
                        (c, x): [Maze, number] => [c, x]
                    )
                    .filter(
                        ([c]) => c === 'S'
                    )
                    .map(
                        ([_, x]) => x
                    )

                curr.
                    map(
                        (char, x): [Maze, number] => [char, x]
                    )
                    .filter(
                        ([char], _) => char !== 'W'
                    )
                    .filter(
                        ([_, x]) => positions.includes(x)
                    )
                    .forEach(
                        ([_, x]) => maze[y][x] = 'S'
                    )

                return maze[y]
            }), []
    );

    return prev.join('') !== maze.join('')
        ? canExit(maze)
        : false
}

// Only exporting the function to test it.
export { canExit }
