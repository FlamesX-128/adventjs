import { assertEquals } from 'assert'

import { findBalancedSegment } from './main.ts'

Deno.test('Challenge #21: 🪐 Binary message', () => {
    const message: number[] = [1, 1, 0, 1, 1, 0, 1, 1]

    const result = findBalancedSegment(message)
    const expected: number[] = [2, 5]

    assertEquals(result, expected)
})

Deno.test('Challenge #21: 🪐 Binary message', () => {
    const message: number[] = [1, 1, 0]

    const result = findBalancedSegment(message)
    const expected: number[] = [1, 2]

    assertEquals(result, expected)
})

Deno.test('Challenge #21: 🪐 Binary message', () => {
    const message: number[] = [1, 1, 1]

    const result = findBalancedSegment(message)
    const expected: number[] = []

    assertEquals(result, expected)
})
