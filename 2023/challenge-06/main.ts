function maxDistance(movements: string) {
    const movementValues: Record<string, number> = {
        '<': -1,
        '>': 1,
    };

    const steps = [...movements];

    let a = 0;
    let b = 0;

    for (const step of steps) {
        if (step !== '*') {
            a += movementValues[step];
            
            continue
        }

        b++
    }

    return Math.abs(a) + b;
}

export { maxDistance }
