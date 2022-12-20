interface Reindeer {
    weightCapacity: number,
    type: string
}

interface Reindeers {
    reindeers: {
        type: string,
        num: number
    }[],
    country: string
}

interface Gift {
    country: string,
    weight: number
}

function howManyReindeers(reindeerTypes: Reindeer[], gifts: Gift[]): Reindeers[] {
    const ord_reindeers = reindeerTypes.sort(
        (i1, i2) => i2.weightCapacity - i1.weightCapacity
    )

    return gifts.map(({ country, weight }) => {
        const data: Reindeers['reindeers'] = ord_reindeers
            .map(
                (i1) => ({ type: i1.type, num: 0 })
            )

        const reindeers = [...ord_reindeers].reverse()
        let sum = 0

        while (sum < weight) for (const reindeer of reindeers) {
            if (sum + reindeer.weightCapacity > weight) continue

            sum += reindeer.weightCapacity

            data.find(
                (i2) => reindeer.type === i2.type
            )!.num++
        }

        return {
            reindeers: data.filter(
                ({ num }) => num > 0
            ),
            country
        }
    })

}

// Only exporting the function to test it.
export { howManyReindeers }
