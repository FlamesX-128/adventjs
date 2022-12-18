// Based on Achalogy/advent-js-2022 solution.
function getOptimalPath(path: number[][]): number {
    return path.reduceRight((acc, curr) => {
        return curr.map((val, i) => {
            return val + Math.min(acc[i], acc[i + 1])
        })
    })[0]
}

// [[0], [7, 4], [2, 4, 6]]
// [] : [2, 4, 6]
// 2 + min(undefined, undefined) = 2
// 4 + min(undefined, undefined) = 4
// 6 + min(undefined, undefined) = 6

// [2, 4, 6] : [7, 4]
// 7 + min(2, 4) = 9
// 4 + min(4, 6) = 8

// [4, 8, 12] : [0]
// 0 + min(9, 8) = 8

// Only exporting the function to test it.
export { getOptimalPath }
