import { assertEquals } from 'std/testing/asserts.ts'

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

Deno.test('2022-005-004', () => assertEquals(
    getMaxGifts([50, 70], 100, 1),
    70
))

Deno.test('2022-005-005', () => assertEquals(
    getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4),
    100
))

Deno.test('2022-005-006', () => assertEquals(
    getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000),
    115
))
