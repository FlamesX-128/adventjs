function countHours(year: number, holidays: string[]): number {
    return 2 * holidays.filter(
        (date) => ![0, 6].includes(new Date(`${year}-${date}`).getDay())
    ).length;
}

// Only exporting the function to test it.
export { countHours }
