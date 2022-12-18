import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { decorateTree } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-015-001', () => assertEquals(
    decorateTree('B P R P'),
    [
        "R",
        "P B",
        "R B B",
        "B P R P"
    ]
))

Deno.test('2022-015-002', () => assertEquals(
    decorateTree('B B'),
    [
        "B",
        "B B"
    ]
))

Deno.test('2022-015-003', () => assertEquals(
    decorateTree('R R P R R'),
    [
        "R",
        "R R",
        "P B P",
        "R B B R",
        "R R P R R"
    ]
))

Deno.test('2022-015-004', () => assertEquals(
    decorateTree('B B P R P R R'),
    [
        "B",
        "R P",
        "B P P",
        "P R B R",
        "P P B B P",
        "B R B B B R",
        "B B P R P R R"
    ]
))
