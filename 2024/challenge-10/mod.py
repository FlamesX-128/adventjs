from typing import List, Union, Dict

def compile(instructions: List[str]) -> Union[int, None]:
    registers: Dict[str, int] = {}
    i = 0

    delta = {"INC": +1, "DEC": -1}

    def mov(opcode: str, literal: str, identifier: str):
        registers[identifier] = int(literal) if literal.isdigit() else registers.get(literal, 0)

    def update_register(opcode: str, identifier: str):
        registers[identifier] = registers.get(identifier, 0) + delta[opcode]

    def jmp(opcode: str, identifier: str, index: str):
        if registers.get(identifier, 0) == 0:
            i = int(index) - 1

    handlers = {
        'MOV': mov,
        'INC': update_register,
        'DEC': update_register,
        'JMP': jmp,
    }

    while i < len(instructions):
        parts = instructions[i].split()
        opcode, *args = parts
        
        handlers[opcode](opcode, *args)
        i += 1

    return registers.get('A')
