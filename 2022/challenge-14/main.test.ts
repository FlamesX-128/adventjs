import { assertEquals } from 'std/testing/asserts.ts'

import { getOptimalPath } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-014-001', () => assertEquals(
    getOptimalPath([[0], [7, 4], [2, 4, 6]]),
    8
))

Deno.test('2022-014-002', () => assertEquals(
    getOptimalPath([[0], [2, 3]]),
    2
))

Deno.test('2022-014-003', () => assertEquals(
    getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]),
    8
))

