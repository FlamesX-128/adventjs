import { assertEquals } from 'std/testing/asserts.ts'

import { dryNumber } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-018-001', () => assertEquals(
    dryNumber(1, 15),
    [
        1,
        10,
        11,
        12,
        13,
        14,
        15
    ]
))

Deno.test('2022-018-002', () => assertEquals(
    dryNumber(2, 20),
    [
        2,
        12,
        20
      ]
))
