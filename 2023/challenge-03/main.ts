function findNaughtyStep(original: string, modified: string) {
    const [shorterStr, longerStr] = [original, modified].sort(
        (a, b) => b.length - a.length
    );

    for (let i = 0; i < shorterStr.length; i++) {
        if (shorterStr[i] !== longerStr[i]) return shorterStr[i];
    }

    return ''
}

export { findNaughtyStep }
