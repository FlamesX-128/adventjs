import { assertEquals } from 'assert'

import { createChristmasTree } from './main.ts'

Deno.test('Challenge #10: 🎄 Create your own Christmas tree', () => {
    const ornaments = 'x'
    const height = 3

    const result = createChristmasTree(ornaments, height)
    const expected = `  x\n x x\nx x x\n  |\n`

    assertEquals(result, expected)
})

Deno.test('Challenge #10: 🎄 Create your own Christmas tree', () => {
  const ornaments = 'xo'
  const height = 4

  const result = createChristmasTree(ornaments, height)
  const expected = `   x\n  o x\n o x o\nx o x o\n   |\n`

  assertEquals(result, expected)
})
