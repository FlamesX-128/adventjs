import { assertEquals } from 'std/testing/asserts.ts'

import { selectSleigh } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-012-001', () => assertEquals(
    selectSleigh(1, [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 }
    ]),
    'TMChein'
))

Deno.test('2022-012-002', () => assertEquals(
    selectSleigh(10, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 5 }
    ]),
    'Pedrosillano'
))

Deno.test('2022-012-003', () => assertEquals(
    selectSleigh(50, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
    ]),
    null
))

Deno.test('2022-012-004', () => assertEquals(
    selectSleigh(10, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
    ]),
    'SamarJaffal'
))
