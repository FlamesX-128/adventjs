function compile(instructions: string[]): number | undefined {
    const registers: Record<string, number> = {};
    let i = 0;

    const handlers: Record<string, (...args: string[]) => void> = {
        'MOV': (literal, identifier) => {
            registers[identifier] = Number(literal) || registers[literal] || 0;
        },
        'INC': (identifier) => {
            registers[identifier] = (registers[identifier] || 0) + 1;
        },
        'DEC': (identifier) => {
            registers[identifier] = (registers[identifier] || 0) - 1;
        },
        'JMP': (identifier, index) => {
            if ((registers[identifier] || 0) === 0) {
                i = Number(index) - 1;
            }
        }
    };

    while (i < instructions.length) {
        const [opcode, ...args] = instructions[i].split(' ');

        handlers[opcode](...args);
        i++;
    }

    return registers['A'];
}
