/**
 * @param {string} s 
 * @returns {string}
 */
function removeSnow(s) {
    const pattern = /(.)\1/g;

    while (pattern.test(s)) {
        s = s.replace(pattern, "");
    }

    return s;
}
