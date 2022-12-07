import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { distributeGifts } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-003-001', () => assertEquals(
    distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]),
    2
))

Deno.test('2022-003-002', () => assertEquals(
    distributeGifts(['a', 'b', 'c'], ['d', 'e']),
    1
))

Deno.test('2022-003-003', () => assertEquals(
    distributeGifts(
        ['game', 'videoconsole', 'computer'],
        [
            'midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco',
            'facundocapua', 'madeval', 'memxd'
        ]
    ),
    5
))
