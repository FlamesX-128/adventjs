function wrapping(gifts: string[]): string[] {
    return gifts.map(
        (gift) => `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(gift.length + 2)}`
    );
}

// Only exporting the function to test it.
export { wrapping }
