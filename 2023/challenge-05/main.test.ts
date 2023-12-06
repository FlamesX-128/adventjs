import { assertEquals } from 'assert'

import { cyberReindeer } from './main.ts'

Deno.test("Challenge #5: 🛷 Santa's CyberTruck", () => {
    const road = 'S..|...|..'
    const time = 10

    const result = cyberReindeer(road, time)
    const expected = [
        'S..|...|..', // initial state
        '.S.|...|..', // sled advances on the road
        '..S|...|..', // sled advances on the road
        '..S|...|..', // sled stops at the barrier
        '..S|...|..', // sled stops at the barrier
        '...S...*..', // barrier opens, sled advances
        '...*S..*..', // sled advances on the road
        '...*.S.*..', // sled advances on the road
        '...*..S*..', // sled advances on the road
        '...*...S..', // passes through the open barrier
    ]

    assertEquals(result, expected)
})
