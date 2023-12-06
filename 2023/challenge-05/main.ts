function cyberReindeer(road: string, time: number) {
    const raceData = [road]

    road = road.replace('S', '.')

    let reindeerPosition = 2
    let pointer = 2

    let raceTime = 1

    while (raceTime < time) {
        const symbol = road[pointer]

        raceData.push(
            road.slice(0, reindeerPosition - 1) + 'S' +
            road.slice(reindeerPosition)
        )

        if (++raceTime === 5) {
            road = road.replace(/\|/g, '*')
        } else if (symbol === '|') {
            continue
        }

        reindeerPosition++
        pointer++
    }

    return raceData
}

export { cyberReindeer }
