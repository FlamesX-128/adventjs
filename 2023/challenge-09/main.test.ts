import { assertEquals } from 'assert'

import { adjustLights } from './main.ts'

Deno.test('Challenge #9: 🚦 Switch the lights', () => {
    const lights = ['🟢', '🔴', '🟢', '🟢', '🟢']

    const result = adjustLights(lights)
    const expected = 1

    assertEquals(result, expected)
})

Deno.test('Challenge #9: 🚦 Switch the lights', () => {
    const lights = ['🔴', '🔴', '🟢', '🟢', '🔴']

    const result = adjustLights(lights)
    const expected = 2

    assertEquals(result, expected)
})

Deno.test('Challenge #9: 🚦 Switch the lights', () => {
    const lights = ['🟢', '🔴', '🟢', '🔴', '🟢']

    const result = adjustLights(lights)
    const expected = 0

    assertEquals(result, expected)
})

Deno.test('Challenge #9: 🚦 Switch the lights', () => {
    const lights = ['🔴', '🔴', '🔴']

    const result = adjustLights(lights)
    const expected = 1

    assertEquals(result, expected)
})
