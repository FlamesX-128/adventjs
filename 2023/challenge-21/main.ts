function findBalancedSegment(message: number[]) {
    let longestSegmentIndices = [0, 0];
    let currentStartIndex = 0;

    for (const currentBit of message) {
        const currentSegmentIndices = [currentStartIndex, currentStartIndex];

        let zerosCount = +(currentBit === 0);
        let onesCount = currentBit;

        let currentIndex = currentStartIndex + 1;
        for (const nextBit of message.slice(currentIndex)) {
            zerosCount += +(nextBit === 0);
            onesCount += nextBit;

            const segmentOptions = [currentSegmentIndices[1], currentIndex];
            const segment = segmentOptions[
                +(onesCount === zerosCount)
            ];

            currentSegmentIndices[1] = segment;
            currentIndex++;
        }

        const segmentOptions = [currentSegmentIndices, longestSegmentIndices];
        const segment = segmentOptions[
            +(
                currentSegmentIndices[1] - currentSegmentIndices[0] <=
                longestSegmentIndices[1] - longestSegmentIndices[0]
            )
        ];

        longestSegmentIndices = segment;
        currentStartIndex++;
    }

    const outputOptions = [longestSegmentIndices, []];
    const output = outputOptions[
        +(longestSegmentIndices[0] === longestSegmentIndices[1])
    ];

    return output;
}

export { findBalancedSegment }
