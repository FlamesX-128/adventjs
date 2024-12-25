from typing import List, Dict, Union

def draw_table(data: List[Dict[str, Union[int, str]]]) -> str:
    border = "+"
    
    columns = [
        [key.capitalize()] + [str(row[key]) for row in data]
        for key in data[0].keys()
    ]

    table_rows = [""] * len(columns[0])

    for column in columns:
        max_cell_width = max(len(cell) for cell in column)

        for i, cell in enumerate(column):
            table_rows[i] += f"| {cell.ljust(max_cell_width)} "

        border += "-" * (max_cell_width + 2) + "+"

    table_rows = [row + "|" for row in table_rows]

    header, *body = table_rows

    return ("\n".join([border, header, border, *body, border]))
