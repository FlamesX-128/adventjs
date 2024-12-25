/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function findMissingNumbers(nums) {
    nums = Array.from(new Set(nums));

    const n = Math.max(nums.length, Math.max(...nums));

    const fullSet = new Set(Array.from({ length: n }, (_, i) => i + 1));

    for (const num of nums) {
        fullSet.delete(num);
    }

    return Array.from(fullSet);
}
