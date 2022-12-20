import { assertEquals } from 'std/testing/asserts.ts'

import { wrapping } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-001-001', () => assertEquals(
    wrapping(["cat", "game", "socks"]),
    [
        "*****\n*cat*\n*****",
        "******\n*game*\n******",
        "*******\n*socks*\n*******"
    ]
))
