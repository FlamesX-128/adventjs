import { assertEquals } from 'std/testing/asserts.ts'

import { howManyReindeers } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-020-001', () => assertEquals(
    howManyReindeers([
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
    ], [
        { country: 'Spain', weight: 30 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
    ]),
    [
        {
            "country": "Spain",
            "reindeers": [
                {
                    "type": "Electric",
                    "num": 1
                },
                {
                    "type": "Gasoline",
                    "num": 3
                },
                {
                    "type": "Diesel",
                    "num": 5
                }
            ]
        },
        {
            "country": "France",
            "reindeers": [
                {
                    "type": "Electric",
                    "num": 1
                },
                {
                    "type": "Gasoline",
                    "num": 1
                },
                {
                    "type": "Diesel",
                    "num": 2
                }
            ]
        },
        {
            "country": "Italy",
            "reindeers": [
                {
                    "type": "Electric",
                    "num": 3
                },
                {
                    "type": "Gasoline",
                    "num": 3
                },
                {
                    "type": "Diesel",
                    "num": 5
                }
            ]
        }
    ]
))

Deno.test('2022-020-002', () => assertEquals(
    howManyReindeers(
        [
            { type: 'Diesel', weightCapacity: 1 },
            { type: 'Gasoline', weightCapacity: 5 }
        ],
        [
            { country: 'Spain', weight: 30 },
            { country: 'Germany', weight: 7 }
        ]),
    [
        {
            "country": "Spain",
            "reindeers": [
                {
                    "type": "Gasoline",
                    "num": 5
                },
                {
                    "type": "Diesel",
                    "num": 5
                }
            ]
        },
        {
            "country": "Germany",
            "reindeers": [
                {
                    "type": "Gasoline",
                    "num": 1
                },
                {
                    "type": "Diesel",
                    "num": 2
                }
            ]
        }
    ]
))
