function manufacture(gifts: string[], materials: string) {
    return gifts.filter(
        (gift) => [...gift].every(
            (char) => materials.includes(char)
        )
    )
}

export { manufacture }
