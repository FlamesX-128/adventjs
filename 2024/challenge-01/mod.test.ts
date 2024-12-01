import { assertEquals } from "jsr:@std/assert";

import { prepareGifts } from './mod.ts';

Deno.test("Test #1", () => {
    const result = prepareGifts([1, 2, 3]);

    assertEquals(Array.isArray(result), true);
});

Deno.test("Test #2", () => {
    const result = prepareGifts([3, 1, 2, 3, 4, 2, 5]);

    assertEquals(result, [1, 2, 3, 4, 5]);
});

Deno.test("Test #3", () => {
    const result = prepareGifts([5, 5, 5, 5]);

    assertEquals(result, [5]);
});

Deno.test("Test #4", () => {
    const result = prepareGifts([1, 2, 3]);

    assertEquals(result, [1, 2, 3]);
});

Deno.test("Test #5", () => {
    const result = prepareGifts([]);

    assertEquals(result, []);
});

Deno.test("Test #6", () => {
    const result = prepareGifts([10, 20, 10, 30, 20, 30, 40]);

    assertEquals(result, [10, 20, 30, 40]);
});

Deno.test("Test #7", () => {
    const result = prepareGifts([3, 1, 2, 3, 1, 2]);

    assertEquals(result, [1, 2, 3]);
});
