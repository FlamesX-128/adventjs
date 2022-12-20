import { assertEquals } from 'std/testing/asserts.ts'

import { getFilesToBackup } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-013-001', () => assertEquals(
    getFilesToBackup(1546300800, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
    ]),
    [
        1,
        3
    ]
))

Deno.test('2022-013-002', () => assertEquals(
    getFilesToBackup(1546300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
    ]),
    [
        1,
        2,
        3
    ]
))

Deno.test('2022-013-003', () => assertEquals(
    getFilesToBackup(1556300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
    ]),
    []
))
