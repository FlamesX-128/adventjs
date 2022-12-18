import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { carryGifts } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-017-001', () => assertEquals(
    carryGifts(['game', 'bike', 'book', 'toy'], 10),
    [
        "game bike",
        "book toy"
    ]
))

Deno.test('2022-017-002', () => assertEquals(
    carryGifts(['game', 'bike', 'book', 'toy'], 7),
    [
        "game",
        "bike",
        "book toy"
    ]
))
