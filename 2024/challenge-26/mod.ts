function getCompleted(timeWorked: string, totalTime: string): string {
    function parseTime(time: string): number {
        const [hh, mm, ss] = time.split(':').map(Number);
        return hh * 3600 + mm * 60 + ss;
    }

    const workedSeconds = parseTime(timeWorked);
    const totalSeconds = parseTime(totalTime);

    // Prevent division by zero if totalTime is "00:00:00" 
    // (though it might be an edge case not needed here).
    if (totalSeconds === 0) return '0%';

    const percentage = Math.round((workedSeconds / totalSeconds) * 100);
    return `${percentage}%`;
}
