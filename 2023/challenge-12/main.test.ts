import { assertEquals } from 'assert'

import { checkIsValidCopy } from './main.ts'

Deno.test('Challenge #12: 📸 Is it a valid copy?', () => {
    const oriignal = 'Santa Claus is coming'
    const copy = 'sa#ta cl#us is comin#'

    const result = checkIsValidCopy(oriignal, copy)
    const expected = true

    assertEquals(result, expected)
})

Deno.test('Challenge #12: 📸 Is it a valid copy?', () => {
    const oriignal = 'Santa Claus is coming'
    const copy = 'p#nt: cla#s #s c+min#'

    const result = checkIsValidCopy(oriignal, copy)
    const expected = false

    assertEquals(result, expected)
})

Deno.test('Challenge #12: 📸 Is it a valid copy?', () => {
    const oriignal = 'Santa Claus'
    const copy = 's#+:. c:. s'

    const result = checkIsValidCopy(oriignal, copy)
    const expected = true

    assertEquals(result, expected)
})
