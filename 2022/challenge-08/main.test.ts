import { assertEquals } from 'std/testing/asserts.ts'

import { checkPart } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-008-001', () => assertEquals(
    checkPart('uwu'),
    true
))

Deno.test('2022-008-002', () => assertEquals(
    checkPart('owo'),
    true
))

Deno.test('2022-008-003', () => assertEquals(
    checkPart('yolooloy'),
    true
))

Deno.test('2022-008-004', () => assertEquals(
    checkPart('zzzoonzzz'),
    true
))
