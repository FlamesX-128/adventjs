import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { getMaxGifts } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-005-001', () => assertEquals(
    getMaxGifts([12, 3, 11, 5, 7], 20, 3),
    20
))

Deno.test('2022-005-002', () => assertEquals(
    getMaxGifts([50], 15, 1),
    0
))

Deno.test('2022-005-003', () => assertEquals(
    getMaxGifts([50, 70, 30], 100, 5),
    100
))
