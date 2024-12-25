import re
from typing import List

def fix_packages(packages: str) -> str:
    while '(' in packages:
        packages = re.sub(
            r'\(([^()]+)\)', 
            lambda match: ''.join(reversed(match.group(1))),
            packages
        )

    return packages
