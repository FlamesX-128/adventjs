def calculate_price(ornaments: str) -> int | None:
    patterns = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100,
    }

    prev = patterns.get(ornaments[-1])
    acc = prev

    for i in range(len(ornaments) - 2, -1, -1):
        curr = patterns.get(ornaments[i])

        if curr < prev:
            acc -= curr
        else:
            acc += curr

        prev = curr

    return acc or None
