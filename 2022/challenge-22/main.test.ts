import { assertEquals } from 'std/testing/asserts.ts'

import { checkStepNumbers } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-022-001', () => assertEquals(
    checkStepNumbers(
        ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
        [1, 33, 10, 2, 44, 20]
    ),
    true
))

Deno.test('2022-022-002', () => assertEquals(
    checkStepNumbers(
        ["tree_1", "tree_1", "house"],
        [2, 1, 10]
    ),
    false
))

Deno.test('2022-022-003', () => assertEquals(
    checkStepNumbers(
        ["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"],
        [5, 2, 1, 2, 3, 4, 5, 6]
    ),
    false
))
