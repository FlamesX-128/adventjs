import { assertEquals } from 'std/testing/asserts.ts'

import { executeCommands } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-023-001', () => assertEquals(
    executeCommands([
        'MOV 5,V00',
        'MOV 10,V01',
        'DEC V00',
        'ADD V00,V01',
    ]),
    [
        14,
        10,
        0,
        0,
        0,
        0,
        0,
        0
    ]
))

Deno.test('2022-023-002', () => assertEquals(
    executeCommands([
        'MOV 10,V00',
        'DEC V00',
        'INC V01',
        'JMP 1',
        'INC V06'
    ]),
    [
        0,
        10,
        0,
        0,
        0,
        0,
        1,
        0
    ]
))

Deno.test('2022-023-003', () => assertEquals(
    executeCommands([
        'MOV 255,V00',
        'INC V00',
        'DEC V01',
        'DEC V01'
    ]),
    [
        0,
        254,
        0,
        0,
        0,
        0,
        0,
        0
    ]
))
