/**
 * Score: 121
 * @param {number} year 
 * @param {string[]} holidays 
 * @returns {number}
 */
function countHours(year, holidays) {
    return 2 * holidays.filter(
        (date) => ![0, 6].some(
            (end) => new Date(`${year}-${date}`).getDay() === end
        )
    ).length;
}

// Tests
console.log(
    countHours(2022, ['01/06', '04/01', '12/25'])
)

console.log(
    countHours(2023, ['01/06', '04/01', '12/25'])
)

console.log(
    countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])
)
