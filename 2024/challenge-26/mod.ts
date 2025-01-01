function getCompleted(timeWorked: string, totalTime: string): string {
    function parseTime(time: string): number {
        const [hh, mm, ss] = time.split(':').map(Number);
        return hh * 3600 + mm * 60 + ss;
    }

    const workedSeconds = parseTime(timeWorked);
    const totalSeconds = parseTime(totalTime);

    const percentage = Math.round((workedSeconds / totalSeconds) * 100);
    return `${percentage}%`;
}
