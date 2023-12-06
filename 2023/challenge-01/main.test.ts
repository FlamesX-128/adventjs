import { assertEquals } from 'assert'

import { findFirstRepeated } from './main.ts'

Deno.test('Challenge #1: 🎁 First gift repeated!', () => {
    const data = [2, 1, 3, 5, 3, 2]

    const result = findFirstRepeated(data)
    const expected = 3

    assertEquals(result, expected)
})

Deno.test('Challenge #1: 🎁 First gift repeated!', () => {
    const data = [1, 2, 3, 4]

    const result = findFirstRepeated(data)
    const expected = -1

    assertEquals(result, expected)
})

Deno.test('Challenge #1: 🎁 First gift repeated!', () => {
    const data = [5, 1, 5, 1]

    const result = findFirstRepeated(data)
    const expected = 5

    assertEquals(result, expected)
})
