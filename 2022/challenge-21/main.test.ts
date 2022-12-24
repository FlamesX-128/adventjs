import { assertEquals } from 'std/testing/asserts.ts'

import { printTable } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-021-001', () => assertEquals(
    printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
    ]),
`++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************`
))

Deno.test('2022-021-002', () => assertEquals(
    printTable([
        { name: 'Game', quantity: 2 },
        { name: 'Bike', quantity: 1 },
        { name: 'Book', quantity: 3 }
    ]),
`+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************`
))

Deno.test('2022-021-003', () => assertEquals(
    printTable([
        { name: 'Game', quantity: 1234567890 }
    ]),
`+++++++++++++++++++++
| Gift | Quantity   |
| ---- | ---------- |
| Game | 1234567890 |
*********************`
))
