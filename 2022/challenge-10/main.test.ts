import { assertEquals } from 'std/testing/asserts.ts'

import { checkJump } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-010-001', () => assertEquals(
    checkJump([1, 2, 1]),
    true
))

Deno.test('2022-010-002', () => assertEquals(
    checkJump([1, 2, 3, 2, 1]),
    true
))

Deno.test('2022-010-003', () => assertEquals(
    checkJump([1, 2, 3]),
    false
))

Deno.test('2022-010-004', () => assertEquals(
    checkJump([1, 1000, 900, 800]),
    true
))

Deno.test('2022-010-005', () => assertEquals(
    checkJump([1, 7, 3, 5]),
    false
))
