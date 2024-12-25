/**
 * @param {string[]} instructions
 * @returns {number | undefined}
 */
function compile(instructions) {
    /** @type {Record<string, number>} */
    const registers = {};
    let i = 0;

    /** @type {Record<string, (...args: string[]) => void>} */
    const handlers = {
        /**
         * Moves a value into a register.
         * @param {string} literal - The value or source register name.
         * @param {string} identifier - The target register name.
         */
        'MOV': (literal, identifier) => {
            registers[identifier] = Number(literal) || registers[literal] || 0;
        },

        /**
         * Increments the value of a register.
         * @param {string} identifier - The register to increment.
         */
        'INC': (identifier) => {
            registers[identifier] = (registers[identifier] || 0) + 1;
        },

        /**
         * Decrements the value of a register.
         * @param {string} identifier - The register to decrement.
         */
        'DEC': (identifier) => {
            registers[identifier] = (registers[identifier] || 0) - 1;
        },

        /**
         * Jumps to a specific instruction if the register's value is zero.
         * @param {string} identifier - The register to check.
         * @param {string} index - The instruction index to jump to.
         */
        'JMP': (identifier, index) => {
            if ((registers[identifier] || 0) === 0) {
                i = index - 1;
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
