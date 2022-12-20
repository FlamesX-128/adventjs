import { assertEquals } from 'std/testing/asserts.ts'

import { sortToys } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-019-001', () => assertEquals(
    sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]),
    [
        "puzzle",
        "car",
        "ball",
        "doll"
    ]
))

Deno.test('2022-019-002', () => assertEquals(
    sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4]),
    [
        "ps4",
        "xbox",
        "switch",
        "pc",
        "nintendo"
    ]
))
