function countTime(leds: number[]): number {
    let seconds = 0

    while (leds.includes(0)) {
        for (let i = 0; i < leds.length; i++) {
            if (leds[i] === 1) {
                const next = (leds[i + 1] !== undefined) ? i + 1 : 0
                leds[next] === 0 ? ((leds[next] = 1) && i++) : 0
            }

        }

        seconds++
    }

    return 7 * seconds
}

// Only exporting the function to test it.
export { countTime }
