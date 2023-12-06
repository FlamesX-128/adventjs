import { assertEquals } from 'assert'

import { maxDistance } from './main.ts'

Deno.test('# Challenge #6: 🦌 The reindeer on trial', () => {
    const movements = '>>*<'

    const result = maxDistance(movements)
    const expected = 2

    assertEquals(result, expected)
})

Deno.test('# Challenge #6: 🦌 The reindeer on trial', () => {
    const movements = '<<<<<'

    const result = maxDistance(movements)
    const expected = 5

    assertEquals(result, expected)
})

Deno.test('# Challenge #6: 🦌 The reindeer on trial', () => {
    const movements = '>***>'

    const result = maxDistance(movements)
    const expected = 5

    assertEquals(result, expected)
})
