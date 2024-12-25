def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
    rows = len(grid)
    cols = len(grid[0])

    result = [[0] * cols for _ in range(rows)]

    directions = [
        (-1, -1), (-1, 0), (-1, 1),
        (0, -1),        (0, 1),
        (1, -1), (1, 0), (1, 1),
    ]

    for i in range(rows):
        for j in range(cols):
            delta = directions if grid[i][j] else []

            for dx, dy in delta:
                ni, nj = i + dx, j + dy

                if 0 <= ni < rows and 0 <= nj < cols:
                    result[ni][nj] += 1

    return result
