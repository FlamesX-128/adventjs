import { assertEquals } from 'assert'

import { getStaircasePaths } from './main.ts'

Deno.test('Challenge #24: 🪜 Jump on the stairs', () => {
    const steps = 2
    const maxJump = 1

    const result = getStaircasePaths(steps, maxJump)
    const expected: number[][] = [
        [1, 1]
    ]

    assertEquals(result, expected)
})

Deno.test('Challenge #24: 🪜 Jump on the stairs', () => {
    const steps = 3
    const maxJump = 3

    const result = getStaircasePaths(steps, maxJump)
    const expected: number[][] = [
        [1, 1, 1],
        [1, 2],
        [2, 1],
        [3]
    ]

    assertEquals(result, expected)
})

Deno.test('Challenge #24: 🪜 Jump on the stairs', () => {
    const steps = 5
    const maxJump = 1

    const result = getStaircasePaths(steps, maxJump)
    const expected: number[][] = [
        [1, 1, 1, 1, 1]
    ]

    assertEquals(result, expected)
})

Deno.test('Challenge #24: 🪜 Jump on the stairs', () => {
    const steps = 5
    const maxJump = 2

    const result = getStaircasePaths(steps, maxJump)
    const expected: number[][] = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 2],
        [1, 1, 2, 1],
        [1, 2, 1, 1],
        [1, 2, 2],
        [2, 1, 1, 1],
        [2, 1, 2],
        [2, 2, 1]
    ]

    assertEquals(result, expected)
})
