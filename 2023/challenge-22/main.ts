// Complejidad cognitiva: 7, lower score, and more readable.
function _compile(code: string) {
    let counter = 0;
    let stack = -1;

    const basicInstructions = {
        '+': +1,
        '-': -1,
        '*': +0,
    }

    for (let i = 0; i < code.length; i++) {
        const instruction = code[i];

        if (instruction in basicInstructions) {
            counter += basicInstructions[instruction as '+'] || counter
        }

        // @ts-ignore - The '&' operator is allowed for boolean types.
        if (instruction === '<' & stack !== -1) {
            i = stack;
            stack = -1;
        }

        // @ts-ignore - The '&' operator is allowed for boolean types.
        if ((instruction === '¿' & counter <= 0)) {
            i = code.indexOf('?', i);
        }

        if (instruction === '%') {
            stack = i;
        }
    }

    return counter;
}

// Cognitive complexity: 3, better score, and less readable.
function compile(code: string) {
    let counter = 0;

    const markPoints = [0, -1];
    const instructionModifiers = {
        '+': 1,
        '-': -1,
        '*': 0,
        '%': 0,
    };

    const codeLength = code.length;
    let index = -1;

    while (++index < codeLength) {
        const currentInstruction = code[index];
        const returnStack = markPoints[1];

        if (currentInstruction in instructionModifiers) {
            instructionModifiers['*'] = counter;
            markPoints[+(currentInstruction === '%')] = index;

            counter += instructionModifiers[currentInstruction as '+'];

            continue;
        }

        const markOptions = [
            [index, returnStack], [returnStack, -1]
        ]
        const [markIndex, markStack] = markOptions[ // @ts-ignore - The '&' operator is allowed for boolean types.
            currentInstruction === '<' & returnStack !== -1
        ]

        markPoints[1] = markStack;
        index = markIndex;

        const loopOptions = [
            index, code.indexOf('?', index)
        ]
        const loopIndex = loopOptions[ // @ts-ignore - The '&' operator is allowed for boolean types.
            currentInstruction === '¿' & counter <= 0
        ]

        index = loopIndex;
    }

    return counter;
}

export { compile }
