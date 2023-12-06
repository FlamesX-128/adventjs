import { assertEquals } from 'assert'

import { manufacture } from './main.ts'

Deno.test('Challenge #2: 🏭 We start the factory', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'

    const result = manufacture(gifts, materials)
    const expected = ["tren", "oso"]

    assertEquals(result, expected)
})

Deno.test('Challenge #2: 🏭 We start the factory', () => {
    const gifts = ['juego', 'puzzle']
    const materials = 'jlepuz'

    const result = manufacture(gifts, materials)
    const expected = ["puzzle"]

    assertEquals(result, expected)
})

Deno.test('Challenge #2: 🏭 We start the factory', () => {
    const gifts = ['libro', 'ps5']
    const materials = 'psli'

    const result = manufacture(gifts, materials)
    const expected: string[] = []

    assertEquals(result, expected)
})
