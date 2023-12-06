function maxDistance(movements: string) {
    const steps = [...movements]

    let i = 0
    let j = 0

    for (const step of steps) {
        switch (step) {
            case '>':
                i++
                break
            case '<':
                i--
                break
            default:
                j++
        }
    }

    return Math.abs(i) + j
}

export { maxDistance }
