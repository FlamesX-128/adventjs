import re

def remove_snow(s: str) -> str:
    pattern = re.compile(r"(.)\1")

    while pattern.search(s):
        s = pattern.sub("", s)

    return s
