import { assertEquals } from 'assert'

import { calculateTime } from './main.ts'

Deno.test('Challenge #13: ⌚️ Calculating the time', () => {
    const deliveries = ['00:10:00', '01:00:00', '03:30:00']

    const result = calculateTime(deliveries)
    const expected = '-02:20:00'

    assertEquals(result, expected)
})

Deno.test('Challenge #13: ⌚️ Calculating the time', () => {
    const deliveries = ['02:00:00', '05:00:00', '00:30:00']

    const result = calculateTime(deliveries)
    const expected = '00:30:00'

    assertEquals(result, expected)
})
