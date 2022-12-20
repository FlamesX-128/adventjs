import { assertEquals } from 'std/testing/asserts.ts'

import { fixLetter } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-016-001', () => assertEquals(
    fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `),
    "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye."
))

Deno.test('2022-016-002', () => assertEquals(
    fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"),
    "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
))

Deno.test('2022-016-003', () => assertEquals(
    fixLetter("  hi    santa    claus "),
    "Hi Santa Claus."
))


Deno.test('2022-016-004', () => assertEquals(
    fixLetter('  hi,santa claus. are you there ?   '),
    "Hi, Santa Claus. Are you there?"
))
