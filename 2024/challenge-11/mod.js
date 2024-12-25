/**
 * @param {string} filename 
 * @returns {string}
 */
function decodeFilename(filename) {
    return filename.match(/(?<=\d+_)[\w-]+\.\w+/)[0];
}
