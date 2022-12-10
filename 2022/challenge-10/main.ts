// Create a dictionary to map, where:
// - Down: occurs when the current height is less than the previous.
// + sign = -1 == 'd'

// - Up: occurs when the current height is greater than the previous.
// + sign = 1 == 'u'

// - Stagnant: occurs when current and previous heights are equal.
// + sign = 0 == ''

// - Stagnant: height difference gives a non-numeric value
// + sign = NaN == ''

// The form would be:
// [ 1, 3, 8, 5, 2 ] -> uudd (up up down down)
// [ 1, 7, 3, 5 ] -> udu (up down up)

// And the problem is only solved when the result starts with at least one 'u' and
// ends with at least one 'd'.

// then the regex should be "/^[u]+[d]+$/g".

// Solution by rasom#7936
function checkJump(heights: number[]): boolean {
    const dict: { [key: number]: string } = {
        'NaN': '', '0': '', '-1': 'd', '1': 'u'
    }

    const str = heights.reduce((acc, curr, i) => {
        const sign = Math.sign(curr - heights[i - 1])
        return acc + dict[sign]
    }, '')

    return str.match(/^[u]+[d]+$/g) !== null;
}

// Only exporting the function to test it.
export { checkJump }
