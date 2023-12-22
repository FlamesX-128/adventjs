import { assertEquals } from 'assert'

import { distributeGifts } from './main.ts'

Deno.test('Challenge #20: 🏋️‍♂️ Distribute the weight', () => {
    const store: (number | null)[][] = [
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4]
    ]

    const result = distributeGifts(store)
    const expected: (number | null)[][] = [
        [5, 3, 3],
        [6, 5, 3],
        [7, 6, 4]
    ]

    assertEquals(result, expected)
})
