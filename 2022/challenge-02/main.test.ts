import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { countHours } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-002-001', () => assertEquals(
    countHours(2023, ['01/06', '04/01', '12/25']),
    4
))

Deno.test('2022-002-002', () => assertEquals(
    countHours(2022, ['01/06', '04/01', '12/25']),
    4
))

Deno.test('2022-002-003', () => assertEquals(
    countHours(2000, ['01/01']),
    0
))
