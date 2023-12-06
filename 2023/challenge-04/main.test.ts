import { assertEquals } from 'assert'

import { decode } from './main.ts'

Deno.test('Challenge #4: 😵‍💫 Turn the parentheses around', () => {
    const message = 'hola (odnum)'

    const result = decode(message)
    const expected = 'hola mundo'

    assertEquals(result, expected)
})

Deno.test('Challenge #4: 😵‍💫 Turn the parentheses around', () => {
    const message = '(olleh) (dlrow)!'

    const result = decode(message)
    const expected = 'hello world!'

    assertEquals(result, expected)
})

Deno.test('Challenge #4: 😵‍💫 Turn the parentheses around', () => {
    const message = 'sa(u(cla)atn)s'

    const result = decode(message)
    const expected = 'santaclaus'

    assertEquals(result, expected)
})
