import { assertEquals } from 'assert'

import { revealSabotage } from './main.ts'

Deno.test('Challenge #19: 💣 Face the sabotage', () => {
    const store: string[][] = [
        ['*', ' ', ' ', ' '],
        [' ', ' ', '*', ' '],
        [' ', ' ', ' ', ' '],
        ['*', ' ', ' ', ' ']
    ]

    const result = revealSabotage(store)
    const expected: string[][] = [
        ['*', '2', '1', '1'],
        ['1', '2', '*', '1'],
        ['1', '2', '1', '1'],
        ['*', '1', ' ', ' ']
    ]

    assertEquals(result, expected)
})

Deno.test('Challenge #19: 💣 Face the sabotage', () => {
    const store: string[][] = [
        ['*', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    const result = revealSabotage(store)
    const expected: string[][] = [
        ["*", "1", " "],
        ["1", "1", " "],
        [" ", " ", " "]
    ]

    assertEquals(result, expected)
})
