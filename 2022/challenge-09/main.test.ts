import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { countTime } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-008-001', () => assertEquals(
    countTime([0, 1, 0, 0, 1]),
    14
))

Deno.test('2022-008-002', () => assertEquals(
    countTime([0, 0, 0, 1]),
    21
))

Deno.test('2022-008-003', () => assertEquals(
    countTime([0, 0, 1, 0, 0]),
    28
))
