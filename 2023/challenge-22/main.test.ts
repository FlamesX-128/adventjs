import { assertEquals } from 'assert'

import { compile } from './main.ts'

Deno.test('Challenge #22: 🚂 Programming language', () => {
    const code = '++*-'

    const result = compile(code)
    const expected = 3

    assertEquals(result, expected)
})

Deno.test('Challenge #22: 🚂 Programming language', () => {
    const code = '++%++<'

    const result = compile(code)
    const expected = 6

    assertEquals(result, expected)
})

Deno.test('Challenge #22: 🚂 Programming language', () => {
    const code = '++<--'

    const result = compile(code)
    const expected = 0

    assertEquals(result, expected)
})

Deno.test('Challenge #22: 🚂 Programming language', () => {
    const code = '++¿+?'

    const result = compile(code)
    const expected = 3

    assertEquals(result, expected)
})

Deno.test('Challenge #22: 🚂 Programming language', () => {
    const code = '--¿+++?'

    const result = compile(code)
    const expected = -2

    assertEquals(result, expected)
})
