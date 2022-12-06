function createCube(size: number): string {
    const head: string[] = [], tail: string[] = []

    for (let i = 0; i < size; i++) {
        head.push(
            ' '.repeat(size - i - 1) + '/\\'.repeat(i + 1) + '_\\'.repeat(size)
        )

        tail.push(
            ' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size)
        )
    }

    return head.concat(...tail).join('\n')
}

// Tests

console.log(
    createCube(3),
    // output:
    // /\_\
    // \/_/

    createCube(2),
    // output:
    //  /\_\_\
    // /\/\_\_\
    // \/\/_/_/
    //  \/_/_/

    createCube(3)
    // output:
    //   /\_\_\_\
    //  /\/\_\_\_\
    // /\/\/\_\_\_\
    // \/\/\/_/_/_/
    //  \/\/_/_/_/
    //   \/_/_/_/
)
