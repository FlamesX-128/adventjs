import { assertEquals } from 'assert'

import { organizeChristmasDinner } from './main.ts'

Deno.test('Challenge #23: 🍽️ Christmas dinner', () => {
    const dishes: string[][] = [
        ["christmas turkey", "turkey", "sauce", "herbs"],
        ["cake", "flour", "sugar", "egg"],
        ["hot chocolate", "chocolate", "milk", "sugar"],
        ["pizza", "sauce", "tomato", "cheese", "ham"],
    ]

    const result = organizeChristmasDinner(dishes)
    const expected: string[][] = [
        ["sauce", "christmas turkey", "pizza"],
        ["sugar", "cake", "hot chocolate"]
    ]

    assertEquals(result, expected)
})
