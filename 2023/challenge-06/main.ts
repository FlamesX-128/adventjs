function maxDistance(movements: string) {
    const steps = [...movements];
    const movementValues: Record<string, number> = {
        '<': -1,
        '>': 1,
    };

    let a = 0;
    let b = 0;

    for (const step of steps) {
        step !== '*'
            ? a += movementValues[step] 
            : b++
    }

    return Math.abs(a) + b;
}

export { maxDistance }
