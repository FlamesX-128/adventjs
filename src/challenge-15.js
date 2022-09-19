export default function checkSledJump(heights) {
    for (let i = 0; i < heights.length; i++) {
        const first = heights[i], second = heights[i + 1];

        if (first === second) return false;

        if (first > second) {
            for (let j = (i + 1); j < heights.length; j++) {
                if (heights[i] < heights[j]) return false;

                i++
            }

            return true
        }

    }

    return false;
}
