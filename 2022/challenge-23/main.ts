// "% 256" and "+ 256) % 256" Based on github.com/Achalogy/advent-js-2022

type Memory = [number, number, number, number, number, number, number, number]
type Match = 'OFL' | 'CONV' | 'ADD' | 'MOV' | 'INC' | 'DEC' | 'JMP'

function executeCommands(commands: string[]): Memory {
    const memory: Memory = [0, 0, 0, 0, 0, 0, 0, 0]
    let i = 0

    const match: {
        [key in Match]: (...params: (string | number)[]) => number | void
    } = {
        CONV: (value) => +(value as string).slice(1)!,

        OFL: (value) => +value % 256,

        ADD: (n_1, n_2) =>
            memory[match.CONV(n_1) as number] = match.OFL(
                memory[match.CONV(n_1) as number] +
                memory[match.CONV(n_2) as number]
            ) as number,

        MOV: (n_1, n_2) =>
            memory[match.CONV(n_2) as number] = match.OFL(
                (n_1 as string).at(0) === 'V' ? memory[match.CONV(n_1) as number] : +n_1
            ) as number,

        INC: (n_1) =>
            memory[match.CONV(n_1) as number] = match.OFL(
                memory[match.CONV(n_1) as number] + 1
            ) as number,

        DEC: (n_1) =>
            memory[match.CONV(n_1) as number] = (
                match.OFL(
                    memory[match.CONV(n_1) as number] - 1
                ) as number + 256
            ) % 256,

        JMP: (n_1) =>
            (memory[0] > 0 && (i = +n_1 - 1)) || void 0
    }

    while (i < commands.length) {
        const [command, ...params] = commands[i].split(/\s|,/g)

        match[command as Match](...params)
        i++
    }

    return memory
}

// Only exporting the function to test it.
export { executeCommands }
