import { assertEquals } from 'assert'

import { optimizeIntervals } from './main.ts'

Deno.test('Challenge #17: 🛷 Optimizing the rental', () => {
    const intervals: number[][] = [
        [2, 7], [3, 4], [5, 8]
    ]

    const result = optimizeIntervals(intervals)
    const expected: number[][] = [
        [2, 8]
    ]

    assertEquals(result, expected)
})

Deno.test('Challenge #17: 🛷 Optimizing the rental', () => {
    const intervals: number[][] = [
        [3, 4], [5, 8], [2, 7]
    ]

    const result = optimizeIntervals(intervals)
    const expected: number[][] = [
        [2, 8]
    ]

    assertEquals(result, expected)
})
