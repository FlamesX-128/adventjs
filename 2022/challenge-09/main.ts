// Based on pabloc54#6798's solution.
function countTime(leds: number[]): number {
    const arr = leds.join('').split('1');
  
    const e_n = arr[arr.length - 1].length;
    const e_0 = arr[0].length;

    return 7 * Math.max(
        ...arr.map((e) => e.length), e_0 + e_n
    )
}

// Only exporting the function to test it.
export { countTime }
