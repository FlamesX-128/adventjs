import { assertEquals } from 'assert'

import { drawClock } from './main.ts'

Deno.test('Challenge #18: 🔢 The digital clock', () => {
    const time = '01:30'

    const result = drawClock(time)
    const expected: string[][] = [
        [
            "*",
            "*",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            "*",
            "*",
            " ",
            "*",
            "*",
            "*"
        ],
        [
            "*",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            " ",
            " ",
            " ",
            " ",
            "*",
            " ",
            "*",
            " ",
            "*"
        ],
        [
            "*",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            "*",
            " ",
            "*"
        ],
        [
            "*",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            "*",
            "*",
            " ",
            "*",
            " ",
            "*"
        ],
        [
            "*",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            "*",
            " ",
            "*"
        ],
        [
            "*",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            " ",
            " ",
            " ",
            " ",
            "*",
            " ",
            "*",
            " ",
            "*"
        ],
        [
            "*",
            "*",
            "*",
            " ",
            " ",
            " ",
            "*",
            " ",
            " ",
            " ",
            "*",
            "*",
            "*",
            " ",
            "*",
            "*",
            "*"
        ]
    ]

    assertEquals(result, expected)
})
