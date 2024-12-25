def execute(code: str) -> int:
    pos = 0
    val = 0

    loop_index = 0

    delta = {
        '-': -1,
        '+': 1,
    }

    pairs = {
        '{': '}',
        '[': ']'
    }

    while pos < len(code):
        char = code[pos]

        if char in pairs:
            if val == 0:
                pair = pairs.get(char)
                pos += code[pos:].index(pair) - 1
            elif char == '[':
                loop_index = pos

        elif char == ']':
            if val != 0:
                pos = loop_index

        else:
            val += delta.get(char, 0)

        pos += 1

    return val
