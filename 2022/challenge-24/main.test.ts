import { assertEquals } from 'std/testing/asserts.ts'

import { canExit } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-024-001', () => assertEquals(
    canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]),
    true
))

Deno.test('2022-024-002', () => assertEquals(
    canExit([
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]),
    false
))

Deno.test('2022-024-003', () => assertEquals(
    canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
    ]),
    true
))

Deno.test('2022-024-004', () => assertEquals(
    canExit([
        ['E', 'S', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W']
    ]),
    true
))

Deno.test('2022-024-005', () => assertEquals(
    canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', 'W', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W'],
    ]),
    false
))

Deno.test('2022-024-006', () => assertEquals(
    canExit([
        ['E', 'S']
    ]),
    true
))

Deno.test('2022-024-007', () => assertEquals(
    canExit([
        ['E', ' ', 'W', ' ', 'S']
    ]),
    false
))

Deno.test('2022-024-008', () => assertEquals(
    canExit([
        ['S', 'E']
    ]),
    true
))

Deno.test('2022-024-009', () => assertEquals(
    canExit([
        ['S', ' ', 'W', ' ', 'E']
    ]),
    false
))

Deno.test('2022-024-010', () => assertEquals(
    canExit([
        ['E'],
        ['S']
    ]),
    true
))