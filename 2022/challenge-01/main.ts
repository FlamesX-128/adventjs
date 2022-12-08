function wrapping(gifts: string[]): string[] {
    return gifts.map((gift) => {
        const stars = '*'.repeat(gift.length + 2);

        return stars + `\n*${gift}*\n` + stars;
    });
}

// Only exporting the function to test it.
export { wrapping }
