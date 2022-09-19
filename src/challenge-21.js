export default function canCarry(capacity, trip) {
    let occupied = 0, route = {}

    for (const [amount, filling, _] of trip)
        route[filling] = amount

    for (const [amount, _, delivery] of trip)
        route[delivery] = route[delivery]
            ? route[delivery] - amount
            : -amount

    for (const [_, value] of Object.entries(route)) {
        if (occupied > capacity) return false
        occupied += value
    }

    return true
}
