function optimizeIntervals(intervals: number[][]) {
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [intervals[0]];

    for (const currentInterval of intervals) {
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(
                lastMergedInterval[1], currentInterval[1]
            );
        } else {
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}

export { optimizeIntervals }
