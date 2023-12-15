import { assertEquals } from 'assert'

import { maxGifts } from './main.ts'

Deno.test('Challenge #14: 🚨 Avoid the alarm', () => {
    const gifts: number[] = [2, 4, 2]

    const result = maxGifts(gifts)
    const expected = 4

    assertEquals(result, expected)
})

Deno.test('Challenge #14: 🚨 Avoid the alarm', () => {
    const gifts: number[] = [5, 1, 1, 5]

    const result = maxGifts(gifts)
    const expected = 10

    assertEquals(result, expected)
})

Deno.test('Challenge #14: 🚨 Avoid the alarm', () => {
    const gifts: number[] = [4, 1, 1, 4, 2, 1]

    const result = maxGifts(gifts)
    const expected = 9

    assertEquals(result, expected)
})

Deno.test('Challenge #14: 🚨 Avoid the alarm', () => {
    const gifts: number[] = [1, 3, 1, 3, 100]

    const result = maxGifts(gifts)
    const expected = 103

    assertEquals(result, expected)
})
