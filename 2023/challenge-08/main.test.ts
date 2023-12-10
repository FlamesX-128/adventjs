import { assertEquals } from 'assert'

import { organizeGifts } from './main.ts'

Deno.test('Challenge #8: 🏬 Sorting the warehouse', () => {
    const gifts = '76a11b'

    const result = organizeGifts(gifts)
    const expected = '[a]{a}{a}(aaaaaa){b}(b)'

    assertEquals(result, expected)
})
