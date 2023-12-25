// The code at 'github.com/mariaelisaaraya/adventJS2023' has been instrumental in simplifying the complexity to 1 and eliminating recursion.

// Complejidad cognitiva: 3, lower score, and more readable.
function _getStaircasePaths(steps: number, maxJump: number): number[][] {
    const paths: number[][][] = [];
    paths[0] = [[]];

    for (let currentStep = 1; currentStep <= steps; currentStep++) {
        paths[currentStep] = [];

        for (let jump = 1; jump <= Math.min(currentStep, maxJump); jump++) {
            for (const path of paths[currentStep - jump]) {
                paths[currentStep].push([jump, ...path]);
            }
        }
    }

    return paths[steps];
}

// Cognitive complexity: 1, better score, and less readable.
function getStaircasePaths(steps: number, maxJump: number): number[][] {
    const paths: number[][][] = [];
    paths[0] = [[]];

    let currentSteps = 1;
    const stepsArray = Array.from({
        length: steps
    });

    for (const _ of stepsArray) {
        paths[currentSteps] = [];

        let i = 1;
        const jumpArray = Array.from({
            length: Math.min(currentSteps, maxJump)
        });

        for (const _ of jumpArray) {
            for (const path of paths[currentSteps - i]) {
                paths[currentSteps].push([i, ...path]);
            }

            i++;
        }

        currentSteps++;
    }

    return paths[steps];
}

export { getStaircasePaths }
