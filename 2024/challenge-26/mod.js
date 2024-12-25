/**
 * 
 * @param {string} timeWorked 
 * @param {string} totalTime 
 * @returns {string}
 */
function getCompleted(timeWorked, totalTime) {
    /**
     * @param {string} time 
     * @returns {number}
     */
    function parseTime(time) {
        const [hh, mm, ss] = time.split(':').map(Number);
        return hh * 3600 + mm * 60 + ss;
    }

    const workedSeconds = parseTime(timeWorked);
    const totalSeconds = parseTime(totalTime);

    if (totalSeconds === 0) return '0%';

    const percentage = Math.round((workedSeconds / totalSeconds) * 100);
    return `${percentage}%`;
}
