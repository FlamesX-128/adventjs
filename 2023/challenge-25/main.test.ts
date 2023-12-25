import { assertEquals } from 'assert'

import { travelDistance } from './main.ts'

Deno.test('Challenge #25: 🗺️ Calculating distances', () => {
    const map = `.....1....\n..S.......\n..........\n....3.....\n......2...`;

    const result = travelDistance(map)
    const expected = 12;

    assertEquals(result, expected)
})

Deno.test('Challenge #25: 🗺️ Calculating distances', () => {
    const map = `..S.1...`;

    const result = travelDistance(map)
    const expected = 2;

    assertEquals(result, expected)
})
