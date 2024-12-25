def distribute_weight(weight: int) -> str:
    boxes = {
        1: [
            " _ ",
            "|_|",
        ],
        2: [
            " ___ ",
            "|___|",
        ],
        5: [
            " _____ ",
            "|     |",
            "|_____|",
        ],
        10: [
            " _________ ",
            "|         |",
            "|_________|",
        ],
    }

    sorted_weights = sorted(boxes.keys(), reverse=True)

    output = []

    while weight > 0:
        w = None
        for x in sorted_weights:
            if x <= weight:
                w = x
                break

        weight -= w

        if not output:
            output = boxes[w]
        else:
            box = boxes[w]

            new_box_last_line = box[-1]

            output_first_line = output[0]
            slice_start = len(new_box_last_line)
            output_slice = output_first_line[slice_start:].strip()

            line = new_box_last_line + output_slice

            output = box[:-1] + [line] + output[1:]

    return "\n".join(output)
