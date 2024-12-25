import re

def find_in_agenda(agenda: str, phone: str):
    data = []

    for entry in agenda.split("\n"):
        matched_phone = re.search(r'\+[-\d]+', entry)
        name_match = re.search(r'<([^>]+)>', entry)

        if matched_phone and name_match:
            matched_phone = matched_phone.group(0)
            name = name_match.group(1)

            if phone not in matched_phone:
                continue

            address = entry.replace(matched_phone, "").replace(f"<{name}>", "").strip()

            data.append({
                'name': name.strip(),
                'address': address
            })

    return data[0] if len(data) == 1 else None
