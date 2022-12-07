import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { getGiftsToRefill } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-007-001', () => assertEquals(
    getGiftsToRefill(
        ['bike', 'car', 'bike', 'bike'],
        ['car', 'bike', 'doll', 'car'],
        ['bike', 'pc', 'pc']
    ),
    ['doll', 'pc']
))

Deno.test('2022-007-002', () => assertEquals(
    getGiftsToRefill(
        [],
        [],
        []
    ),
    []
))
