import { assertEquals } from 'assert'

import { findNaughtyStep } from './main.ts'

Deno.test('Challenge #3: 😏 The naughty elf', () => {
    const original = 'abcd'
    const modified = 'abcde'

    const result = findNaughtyStep(original, modified)
    const expected = 'e'

    assertEquals(result, expected)
})

Deno.test('Challenge #3: 😏 The naughty elf', () => {
    const original = 'stepfor'
    const modified = 'stepor'

    const result = findNaughtyStep(original, modified)
    const expected = 'f'

    assertEquals(result, expected)
})

Deno.test('Challenge #3: 😏 The naughty elf', () => {
    const original = 'abcde'
    const modified = 'abcde'

    const result = findNaughtyStep(original, modified)
    const expected  = ''

    assertEquals(result, expected)
})
