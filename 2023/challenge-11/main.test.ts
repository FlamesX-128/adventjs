import { assertEquals } from 'assert'

import { getIndexsForPalindrome } from './main.ts'

Deno.test('Challenge #11: 📖 The studious elves', () => {
    const word = 'anna'

    const result = getIndexsForPalindrome(word)
    const expected: number[] = []

    assertEquals(result, expected)
})

Deno.test('Challenge #11: 📖 The studious elves', () => {
    const word = 'abab'

    const result = getIndexsForPalindrome(word)
    const expected: number[] = [0, 1]

    assertEquals(result, expected)
})

Deno.test('Challenge #11: 📖 The studious elves', () => {
    const word = 'abac'

    const result = getIndexsForPalindrome(word)
    const expected = null

    assertEquals(result, expected)
})
