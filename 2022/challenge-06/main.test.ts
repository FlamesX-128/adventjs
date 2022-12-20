import { assertEquals } from 'std/testing/asserts.ts'

import { createCube } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

const specs = [
    '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/',
    ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/',
    '/\\_\\\n\\/_/',
]

Deno.test('2022-006-001', () => assertEquals(
    createCube(3),
    specs[0]
))

Deno.test('2022-006-002', () => assertEquals(
    createCube(2),
    specs[1]
))

Deno.test('2022-006-003', () => assertEquals(
    createCube(1),
    specs[2]
))
