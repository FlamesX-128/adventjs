import re

def decode_filename(filename: str) -> str:
    match = re.search(r"(?<=\d+_)[\w-]+\.\w+", filename)
    
    return match.group(0)
