import { assertEquals } from 'assert'

import { autonomousDrive } from './main.ts'

Deno.test('Challenge #15: ↔️ Autonomous robot', () => {
    const movements: string[] = ['R', 'R', 'D', 'L']
    const store: string[] = ['..!....', '...*.*.']

    const result = autonomousDrive(store, movements)
    const expected: string[] = [".......", "...*!*."]

    assertEquals(result, expected)
})
