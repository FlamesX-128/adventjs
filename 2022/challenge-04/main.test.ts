import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { fitsInOneBox } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-003-001', () => assertEquals(
    fitsInOneBox([
        { l: 1, w: 1, h: 10 },
        { l: 3, w: 3, h: 12 },
        { l: 2, w: 2, h: 1 },
    ]),
    false
))

Deno.test('2022-003-002', () => assertEquals(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
    ]),
    true
))

Deno.test('2022-003-003', () => assertEquals(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
    ]),
    false
))
