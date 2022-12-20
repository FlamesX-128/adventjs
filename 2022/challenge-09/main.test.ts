import { assertEquals } from 'std/testing/asserts.ts'

import { countTime } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-009-001', () => assertEquals(
    countTime([0, 1, 0, 0, 1]),
    14
))

Deno.test('2022-009-002', () => assertEquals(
    countTime([0, 0, 0, 1]),
    21
))

Deno.test('2022-009-003', () => assertEquals(
    countTime([0, 0, 1, 0, 0]),
    28
))
