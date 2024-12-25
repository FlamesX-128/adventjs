from typing import List

def draw_race(indices: List[int], length: int) -> str:
    lanes = []

    for index, position in enumerate(indices):
        track = ["~"] * length

        r_position = (length + position) % length
        track[r_position] = "r"

        track[0] = "~"

        indentation = " " * (len(indices) - index - 1)

        lane_str = f"{indentation}{''.join(track)} /{index + 1}"
        lanes.append(lane_str)

    return '\n'.join(map(str, lanes))
